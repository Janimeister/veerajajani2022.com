// Generates src/environments/primeui-license.ts from the PRIMEUI_LICENSE
// environment variable (GitHub Actions repository secret of the same name).
// PrimeNG 22 is distributed under the PrimeUI license and needs a key at
// runtime; keeping it in a generated, git-ignored file avoids committing it.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const targetPath = join(projectRoot, 'src', 'environments', 'primeui-license.ts');

const licenseKey = (process.env.PRIMEUI_LICENSE ?? '').trim();

if (/['\\\r\n]/.test(licenseKey)) {
  console.error('[primeui] PRIMEUI_LICENSE contains invalid characters; refusing to generate license file.');
  process.exit(1);
}

const contents = `// GENERATED FILE - do not edit and do not commit.
// Created by scripts/generate-primeui-license.mjs from the PRIMEUI_LICENSE environment variable.
export const primeuiLicense = '${licenseKey}';
`;

let current = '';
try {
  current = readFileSync(targetPath, 'utf8');
} catch {
  // File does not exist yet.
}

if (current !== contents) {
  mkdirSync(dirname(targetPath), { recursive: true });
  writeFileSync(targetPath, contents, 'utf8');
}

if (licenseKey) {
  console.log('[primeui] License key applied to src/environments/primeui-license.ts.');
} else {
  console.warn('[primeui] PRIMEUI_LICENSE is not set - PrimeNG will report an invalid license.');
}
