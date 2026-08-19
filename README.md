# Veerajajani2022.Com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and currently targets Angular 22.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## PrimeNG / PrimeUI license key

Starting with PrimeNG 22 the PrimeNG packages are licensed under the [PrimeUI License](https://primeui.dev/licenses/community) and require a license key at runtime; without one PrimeNG logs a warning and shows an "Invalid PrimeUI License" banner.

Set the key in the `PRIMEUI_LICENSE` environment variable before building or serving:

```powershell
$env:PRIMEUI_LICENSE = '<your key>'
npm start
```

`scripts/generate-primeui-license.mjs` runs automatically on `npm install`, `npm start`, `npm run build`, `npm run watch` and `npm test`, and writes the key into the git-ignored file `src/environments/primeui-license.ts`, which `AppModule` passes to `providePrimeNG({ license: ... })`. The key is never committed. In GitHub Actions the value comes from the `PRIMEUI_LICENSE` repository secret.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Vitest](https://vitest.dev).

## Running end-to-end tests

Run `npx playwright test` to execute the end-to-end tests via [Playwright](https://playwright.dev). The tests live in `e2e/` and the Playwright config starts the dev server automatically.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
