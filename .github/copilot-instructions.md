# Copilot Instructions

## Project Overview

This is the wedding website for **Veera ja Jani 2022** — a static-content Angular single-page application that provides guests with event information including program details, RSVP, getting-there directions, accommodation options, gifting guidance, and an FAQ.

## Tech Stack

- **Framework**: Angular 21 (TypeScript ~5.9)
- **UI Libraries**: PrimeNG 21, Bootstrap 5.3
- **CDK**: `@angular/cdk` (required peer dep for PrimeNG 21)
- **Styling**: SCSS (per-component stylesheets)
- **Testing**: Jasmine + Karma
- **Build tool**: Angular CLI (`ng`)

## Project Structure

```
src/
  app/
    basic-information/   # Event details (date, venue, etc.)
    faq/                 # Frequently asked questions
    footer/              # Footer component
    getting-there/       # Travel directions & map
    gifting/             # Gift registry information
    googlemaps/          # Embedded Google Maps component
    header/              # Site header / hero image
    navigation-menu/     # Bootstrap nav-tabs navigation bar
    page-not-found/      # 404 page
    placeholder/         # Generic placeholder component
    program/             # Wedding program / schedule
    registration/        # Guest registration
    rsvp/                # RSVP form
    staying/             # Accommodation options
  assets/                # Static assets (images, etc.)
  environments/          # environment.ts / environment.prod.ts
```

## Common Commands

| Task | Command |
|------|---------|
| Start dev server | `npm start` (serves on http://localhost:4200) |
| Production build | `npm run build` |
| Run unit tests | `npm test` |
| Angular CLI | `npx ng <command>` |

## Code Conventions

- **Components** follow the Angular CLI default structure: `*.component.ts`, `*.component.html`, `*.component.scss`, `*.component.spec.ts`.
- **`standalone: false`** must be explicitly set on every `@Component` decorator — Angular 19+ defaults to `standalone: true`, but this project uses `NgModule`-based architecture.
- **Styles** use SCSS; global styles live in `src/styles.scss`, component-scoped styles in each component's `.scss` file.
- **Strict mode** is enabled (`tsconfig.json` `strict: true`) — avoid `any` types and ensure null-safety.
- **`moduleResolution`** is set to `"bundler"` (required for Angular 17+ ESM exports).
- Generate new components with `npx ng generate component <name>` so the CLI scaffolds all four files and updates `AppModule` automatically. Remember to add `standalone: false` to the generated `@Component` decorator.
- Keep components in `src/app/`; there is currently no feature-module splitting.
- **Navigation** uses Bootstrap `nav-tabs` with `routerLink`/`routerLinkActive` directives — `TabMenuModule` (PrimeNG) was removed in PrimeNG 20.
- **`GMapModule`** was removed in PrimeNG 17 and is no longer used.

## Testing

Unit tests use **Jasmine** and run in a headless Chrome via **Karma**. Every component has a corresponding `*.spec.ts` file. Run `npm test` to execute them. CI runs tests in headless mode (`--no-sandbox`).

- Use `provideRouter([])` in test `providers` instead of the removed `RouterTestingModule`.
- The `require.context` webpack API has been removed from `test.ts`; do not re-add it.

## Dependencies

Add new dependencies with `npm install <package>` and import the corresponding Angular module in `AppModule` (`src/app/app.module.ts`). Prefer PrimeNG or Bootstrap components over adding new UI libraries.

Note: PrimeNG 21 uses embedded component styles — do **not** add `primeng/resources/primeng.min.css` or theme CSS paths to `angular.json`.
