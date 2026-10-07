#!/usr/bin/env bash
set -euo pipefail

# The runner's Ubuntu mirror is sometimes slow or drops connections. Let apt
# retry failed downloads and give up on a stalled connection after 30 seconds,
# and let a retry wait for the dpkg lock still held by an earlier attempt's
# apt-get instead of failing immediately with "Could not get lock".
if command -v apt-get >/dev/null; then
  sudo tee /etc/apt/apt.conf.d/80ci-apt-retries.conf >/dev/null <<'EOF'
Acquire::Retries "3";
Acquire::http::Timeout "30";
Acquire::https::Timeout "30";
DPkg::Lock::Timeout "180";
EOF
fi

# Killing a timed-out attempt stops npx and sudo, but the apt-get under sudo
# keeps running and holds the apt and dpkg locks, and dpkg may be left
# half-configured. Stop apt-get, wait for it and any dpkg run to exit, then
# finish configuring whatever dpkg had unpacked so the retry starts clean.
recover_apt() {
  command -v apt-get >/dev/null || return 0
  sudo pkill -x apt-get || true
  for _ in $(seq 90); do
    pgrep -x apt-get >/dev/null || pgrep -x dpkg >/dev/null || break
    sleep 2
  done
  sudo dpkg --configure -a || true
}

# Keep an unavailable apt mirror from consuming the entire job timeout.
# Retry once, then fail clearly instead of testing with missing libraries.
# The cap is generous because installing dependencies for all three browsers
# takes several minutes on a slow mirror.
for attempt in 1 2; do
  if timeout --kill-after=10s 8m npx --no-install playwright install-deps "$@"; then
    npx --no-install playwright install "$@"
    exit 0
  fi
  echo "::warning::Playwright system dependency installation failed (attempt $attempt/2)"
  if [ "$attempt" -lt 2 ]; then
    recover_apt
  fi
done
echo "::error::Unable to install Playwright system dependencies"
exit 1
