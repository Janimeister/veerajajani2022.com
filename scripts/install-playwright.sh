#!/usr/bin/env bash
set -euo pipefail

# The runner's Ubuntu mirror is sometimes slow or drops connections. Let apt
# retry failed downloads and give up on a stalled connection after 30 seconds,
# and let a retry wait for the dpkg lock still held by an earlier attempt's
# apt-get instead of failing immediately with "Could not get lock".
sudo tee /etc/apt/apt.conf.d/80ci-apt-retries.conf >/dev/null <<'EOF'
Acquire::Retries "3";
Acquire::http::Timeout "30";
Acquire::https::Timeout "30";
DPkg::Lock::Timeout "180";
EOF

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
done
echo "::error::Unable to install Playwright system dependencies"
exit 1
