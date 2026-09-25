# veerajajani2022.com

Finnish-language wedding website for Veera and Jani's wedding on 23 July 2022. The site contains event details, travel and accommodation information, registration instructions, the program, gifting guidance, and an FAQ.

Live site: [veerajajani2022.com](https://veerajajani2022.com).

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Angular 22 with an NgModule-based application and Angular Router |
| Language and build | TypeScript 6, Angular CLI, `@angular/build:application` |
| UI and styling | PrimeNG 22, a custom Lara-based PrimeUIX theme, Bootstrap 5.3, SCSS |
| Unit tests | Vitest through Angular's `@angular/build:unit-test` builder with jsdom |
| Browser tests | Playwright with Chromium, Firefox, and WebKit |
| Hosting | GitHub Pages via GitHub Actions |

## Getting started

Use **Node.js 24** and npm, matching the GitHub Actions workflows.

```bash
git clone https://github.com/Janimeister/veerajajani2022.com.git
cd veerajajani2022.com
npm ci
npm start
```

Open `http://localhost:4200/`. The development server reloads when source files change. Configure `PRIMEUI_LICENSE` as described below to avoid the PrimeNG license warning/banner.

## PrimeNG / PrimeUI license key

The app passes a generated license key to PrimeNG's runtime configuration. If `PRIMEUI_LICENSE` is missing, the generator writes an empty key and warns that PrimeNG will report an invalid license.

Set the key in the `PRIMEUI_LICENSE` environment variable before building or serving:

```powershell
$env:PRIMEUI_LICENSE = '<your key>'
npm start
```

For Bash or another POSIX shell:

```bash
export PRIMEUI_LICENSE='<your key>'
npm start
```

[scripts/generate-primeui-license.mjs](scripts/generate-primeui-license.mjs) runs automatically on `npm ci` / `npm install`, `npm start`, `npm run build`, `npm run watch`, and `npm test`. It writes `src/environments/primeui-license.ts`, which `AppModule` passes to `providePrimeNG({ license: ... })`. The generated source file is git-ignored; the value is included in the browser build for runtime use. In GitHub Actions it comes from the `PRIMEUI_LICENSE` repository secret.

Prefer the npm commands below so these lifecycle hooks run. If invoking `npx ng` directly, run `npm run primeui:license` first to generate or refresh the file. Keep the environment variable set for subsequent npm commands, since each hook regenerates the file from the current environment.

## Pages and source layout

Routes are defined in [src/app/app-routing.module.ts](src/app/app-routing.module.ts). `/` redirects to `/mitamissamilloin`, and unknown routes show the not-found page.

| Route | Content |
| --- | --- |
| `/mitamissamilloin` | Wedding date, ceremony, and reception details |
| `/majapaikkoja` | Accommodation options |
| `/muistaminen` | Gifting guidance |
| `/kulkeminen` | Travel directions and taxi information |
| `/ilmoittautuminen` | Registration instructions and an external Google Forms link |
| `/ohjelma` | Wedding program |
| `/ukk` | Frequently asked questions |

Page components live in `src/app/`, with separate HTML templates, SCSS styles, and unit tests. [src/app/app.module.ts](src/app/app.module.ts) declares the application components and configures PrimeNG's custom `WeddingPreset`. Navigation uses PrimeNG Tabs in `src/app/navigation-menu/`. Global styles live in `src/styles.scss`, images in `src/assets/`, and the custom domain in `src/CNAME`.

This is a static-content frontend; registration links to Google Forms and there is no registration backend in this repository.

## Code scaffolding

Run `npx ng generate component component-name` to generate a component using the repository's SCSS and non-standalone component defaults. Register new routes in `src/app/app-routing.module.ts` and update the navigation component as needed.

## Build

```bash
npm run build
```

The default build is production, with browser assets written to `dist/veerajajani2022.com/browser/`. Use `npm run watch` for a development build that rebuilds on changes; it does not start a web server.

## Running unit tests

```bash
npm test -- --watch=false
```

Use `npm test` for watch mode during development. Tests live alongside components as `*.spec.ts`; [src/test-setup.ts](src/test-setup.ts) provides the browser API stubs needed by PrimeNG in jsdom.

## Running end-to-end tests

Install browser binaries and required system libraries once, then run the suite:

```bash
npx playwright install --with-deps
npx playwright test
```

The tests in [e2e/app.spec.ts](e2e/app.spec.ts) cover navigation, page content, external links, the not-found page, and mobile layout. Playwright runs Chromium, Firefox, and WebKit and starts the development server through `npm start` automatically. HTML reports are written to `playwright-report/`.

## CI and deployment

[Tests](.github/workflows/test.yml) runs on pull requests, manual dispatch, and calls from the deployment workflow. Three parallel jobs check the production build, unit tests, and Playwright tests. Failed browser runs upload the HTML report for seven days.

To deploy, configure GitHub Pages to use **GitHub Actions** as its source and add the `PRIMEUI_LICENSE` repository secret. [Deploy to GitHub Pages](.github/workflows/deploy.yml) runs on pushes to `main` or manual dispatch. It:

1. Runs the reusable test workflow, passing the license secret to its jobs.
2. Waits for the tests, then builds with base href `/`.
3. Copies `index.html` to `404.html` so direct visits to client-side routes load the app.
4. Uploads `dist/veerajajani2022.com/browser/` and deploys to GitHub Pages.

## Further help

Use `npx ng help` or the [Angular CLI reference](https://angular.dev/tools/cli).
