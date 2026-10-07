#!/usr/bin/env bash
set -euo pipefail

# The runner's Ubuntu mirror is sometimes slow or drops connections. Let apt
# retry failed downloads and give up on a stalled connection after 30 seconds,
# and let apt wait for a dpkg lock held by another process instead of failing
# immediately with "Could not get lock". The settings apply only while this
# script runs, so they don't change apt on a developer machine.
APT_DROP_IN=/etc/apt/apt.conf.d/80ci-apt-retries.conf
if command -v apt-get >/dev/null; then
  trap 'sudo rm -f "$APT_DROP_IN"' EXIT
  sudo tee "$APT_DROP_IN" >/dev/null <<'EOF'
Acquire::Retries "3";
Acquire::http::Timeout "30";
Acquire::https::Timeout "30";
DPkg::Lock::Timeout "180";
EOF
fi

# Killing a timed-out attempt stops npx and sudo, but the apt-get under sudo
# keeps running and holds the apt and dpkg locks, and dpkg may be left
# half-configured. Stop apt-get, wait up to a minute for it and any dpkg run
# to exit, then finish configuring whatever dpkg had unpacked so the retry
# starts clean.
recover_apt() {
  command -v apt-get >/dev/null || return 0
  sudo pkill -x apt-get || true
  for _ in $(seq 30); do
    pgrep -x apt-get >/dev/null || pgrep -x dpkg >/dev/null || break
    sleep 2
  done
  sudo dpkg --configure -a || true
}

# Cap each step so a slow mirror or CDN fails with a clear error instead of
# running into the job timeout. A healthy run installs dependencies for all
# three browsers in about 2 minutes. At worst this script takes about
# 20 minutes (two 6-minute dependency attempts, a minute of cleanup, and a
# 6-minute browser download), and the job timeouts in .github/workflows
# leave room for that plus the rest of each job.
installed_deps=false
for attempt in 1 2; do
  if timeout --kill-after=10s 6m npx --no-install playwright install-deps "$@"; then
    installed_deps=true
    break
  fi
  echo "::warning::Playwright system dependency installation failed (attempt $attempt/2)"
  if [ "$attempt" -lt 2 ]; then
    recover_apt
  fi
done
if [ "$installed_deps" != true ]; then
  echo "::error::Unable to install Playwright system dependencies"
  exit 1
fi

# Playwright retries each browser download itself (5 attempts, with a
# connection timeout), so this only needs an overall cap.
if ! timeout --kill-after=10s 6m npx --no-install playwright install "$@"; then
  echo "::error::Unable to download Playwright browsers"
  exit 1
fi
