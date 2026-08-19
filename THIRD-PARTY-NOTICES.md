# Third-Party Notices

This project makes use of the following third-party software packages.
Their licenses and attribution requirements are reproduced below.
Most dependencies are open source; the PrimeNG / PrimeUI packages are commercially
licensed and are listed separately under "Commercial / Proprietary Software".

---

## Open Source Software

### Angular
- **Packages:**
  `@angular/animations`, `@angular/cdk`, `@angular/common`, `@angular/compiler`, `@angular/core`, `@angular/forms`,
  `@angular/platform-browser`, `@angular/platform-browser-dynamic`, `@angular/router`, `@angular/build`, `@angular/cli`,
  `@angular/compiler-cli`
- **License:** MIT
- **Copyright:** © Google LLC

```
The MIT License

Copyright (c) Google LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

### RxJS
- **Package:** `rxjs`
- **License:** Apache License 2.0
- **Copyright:** © Google, Inc. and Contributors

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

  Copyright (c) 2011-2021 Google, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

---

### tslib
- **Package:** `tslib`
- **License:** BSD Zero Clause License (0BSD)
- **Copyright:** © Microsoft Corporation

```
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
```

---

### TypeScript
- **Package:** `typescript`
- **License:** Apache License 2.0
- **Copyright:** © Microsoft Corporation

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   Copyright (c) Microsoft Corporation. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

---

### Bootstrap
- **Package:** `bootstrap`
- **License:** MIT
- **Copyright:** © The Bootstrap Authors

```
The MIT License (MIT)

Copyright (c) 2011-2024 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

### zone.js
- **Package:** `zone.js`
- **License:** MIT
- **Copyright:** © Google LLC

```
The MIT License

Copyright (c) Google LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

### Playwright
- **Package:** `@playwright/test`
- **License:** Apache License 2.0
- **Copyright:** © Microsoft Corporation

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   Copyright (c) Microsoft Corporation.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

---

## Commercial / Proprietary Software

### PrimeNG / PrimeUI
- **Packages:** `primeng`, `@primeuix/themes` (and their transitive `@primeuix/*` / `@primeui/*` packages)
- **License:** PrimeUI License (dual: Community License – free, or Commercial License – paid); **not** open source
- **Copyright:** © PrimeTek Informatics

> **Note:** PrimeNG was MIT licensed up to and including version 21. Starting with **PrimeNG 22** the
> packages are distributed under the proprietary **PrimeUI License** by PrimeTek Informatics and a
> valid license key is required at runtime. This project uses the free **Community License** and
> supplies the key via the `PRIMEUI_LICENSE` environment variable (a GitHub Actions repository
> secret), which is injected through `providePrimeNG({ license: ... })` in `src/app/app.module.ts`.
> License verification is performed offline; no telemetry or remote connection is used.

```
# PrimeUI License

This package is part of **PrimeUI**, a family of commercial UI libraries by PrimeTek Informatics.

## How PrimeUI May Be Used

PrimeUI may be used under one of two licenses. You choose the one that applies to you based on eligibility.

### Community License (Free)

Free for organizations that meet all of the following criteria:

- Less than $1,000,000 USD in annual gross revenue
- Fewer than 5 developers
- Fewer than 10 employees
- Less than $3,000,000 USD in venture capital or outside funding

Individuals, students, non-profits, and non-commercial open source projects also qualify.

The Community License provides full access to the core libraries and supports up to 4 developers.
It requires annual renewal by confirming continued eligibility.

### Commercial License (Paid)

For organizations that do not qualify for the Community License.

Licensed per developer, perpetual, with one year of updates included. Renewal is optional and
extends access to new versions. The Commercial Suite also includes PrimeBlocks, Theme Designer,
all PrimeUI Pro components, and Premium Support.

## License Key

A valid license key is required to use this software. License verification is performed offline,
with no telemetry and no remote connection. A missing, invalid, or expired key may cause the
software to display a license notice.

## Full Terms

The complete license terms, eligibility details, and renewal information are available at:

- Community License: https://primeui.dev/licenses/community
- Commercial License: https://primeui.dev/licenses/commercial

## Restrictions

This software is distributed as a compiled package. You may not reverse-engineer, decompile, or
extract its source code, redistribute it as a component library or development tool, or remove its
license mechanisms. Redistributing the software so that third parties can develop with it requires
a separate OEM License. See the full terms for details.

---

© 2026 PrimeTek Informatics. All rights reserved.
```

---

## Fonts

### Lovely Garden
- **Usage:** Custom decorative font for headings
- **Notes:** Bundled locally in `src/assets/fonts/`

---

*This file was last updated: August 2026*
