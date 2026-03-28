# Copilot Instructions

## Project Overview

This is the wedding website for **Veera ja Jani 2022** — a static-content Angular single-page application that provides guests with event information including program details, RSVP, getting-there directions, accommodation options, gifting guidance, and an FAQ.

## Tech Stack

- **Framework**: Angular 21 (TypeScript ~5.9)
- **UI Libraries**: PrimeNG 21 (with `@primeuix/themes`), Bootstrap 5.3
- **CDK**: `@angular/cdk` (required peer dep for PrimeNG 21)
- **Theming**: PrimeNG Lara preset via `providePrimeNG` with custom `WeddingPreset` (defined in `app.module.ts`)
- **Styling**: SCSS (per-component stylesheets)
- **Testing**: Jasmine + Karma (unit), Playwright (e2e)
- **Build tool**: Angular CLI (`ng`) with `@angular/build:application` builder

## Project Structure

```
src/
  app/
    basic-information/   # Event details (date, venue, etc.)
    faq/                 # Frequently asked questions
    footer/              # Footer component
    getting-there/       # Travel directions & map
    gifting/             # Gift registry information
    header/              # Site header / hero image
    navigation-menu/     # PrimeNG Tabs navigation (p-tabs / p-tablist / p-tab)
    page-not-found/      # 404 page
    placeholder/         # Generic placeholder component
    program/             # Wedding program / schedule
    registration/        # Guest registration
    rsvp/                # RSVP form
    staying/             # Accommodation options
  assets/                # Static assets (images, etc.)
  environments/          # environment.ts / environment.prod.ts
e2e/                     # Playwright end-to-end tests
.github/workflows/       # GitHub Actions deploy workflow
```

## Common Commands

| Task | Command |
|------|---------|
| Start dev server | `npm start` (serves on http://localhost:4200) |
| Production build | `npm run build` |
| Run unit tests | `npm test` |
| Run e2e tests | `npx playwright test` |
| Angular CLI | `npx ng <command>` |

## Code Conventions

- **Components** follow the Angular CLI default structure: `*.component.ts`, `*.component.html`, `*.component.scss`, `*.component.spec.ts`.
- **`standalone: false`** must be explicitly set on every `@Component` decorator — Angular 19+ defaults to `standalone: true`, but this project uses `NgModule`-based architecture.
- **Styles** use SCSS; global styles live in `src/styles.scss`, component-scoped styles in each component's `.scss` file.
- **Strict mode** is enabled (`tsconfig.json` `strict: true`) — avoid `any` types and ensure null-safety.
- **`moduleResolution`** is set to `"bundler"` (required for Angular 17+ ESM exports).
- Generate new components with `npx ng generate component <name>` so the CLI scaffolds all four files and updates `AppModule` automatically. Remember to add `standalone: false` to the generated `@Component` decorator.
- Keep components in `src/app/`; there is currently no feature-module splitting.
- **Navigation** uses PrimeNG 21 `Tabs` component (`p-tabs`, `p-tablist`, `p-tab` from `primeng/tabs`) with `TabsModule`. The old `TabMenuModule` was removed in PrimeNG 17+. Route changes are handled programmatically via `Router` in `NavigationMenuComponent`.
- **PrimeNG theming** is configured via `providePrimeNG` in `AppModule` providers using a custom `WeddingPreset` (based on `Lara` from `@primeuix/themes/lara` with `definePreset`). Dark mode is disabled. Do **not** add `primeng/resources/primeng.min.css` or theme CSS paths to `angular.json` — PrimeNG 21 uses embedded component styles.

## Testing

Unit tests use **Jasmine** and run in a headless Chrome via **Karma**. Every component has a corresponding `*.spec.ts` file. Run `npm test` to execute them. CI runs tests in headless mode (`--no-sandbox`).

- Use `provideRouter([])` in test `providers` instead of the removed `RouterTestingModule`.
- The `require.context` webpack API has been removed from `test.ts`; do not re-add it.
- PrimeNG component tests should import the relevant module (e.g. `TabsModule`) in the test bed.

End-to-end tests use **Playwright** and live in `e2e/`. The Playwright config (`playwright.config.ts`) auto-starts the dev server. Run `npx playwright test` locally. In CI, Playwright tests run as part of the GitHub Actions deploy workflow.

## Deployment

The project deploys to **GitHub Pages** via a GitHub Actions workflow (`.github/workflows/deploy.yml`). On push to `main`, the workflow:
1. Runs Playwright e2e tests
2. Builds the production bundle
3. Deploys to GitHub Pages

## Dependencies

Add new dependencies with `npm install <package>` and import the corresponding Angular module in `AppModule` (`src/app/app.module.ts`). Prefer PrimeNG or Bootstrap components over adding new UI libraries.
