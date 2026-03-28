import { test, expect } from '@playwright/test';

// ── Navigation routes and their expected content ──────────────────────────────

const NAV_ROUTES = [
  { label: 'Mitä, Missä, Milloin', path: '/mitamissamilloin' },
  { label: 'Majapaikkoja', path: '/majapaikkoja' },
  { label: 'Muistaminen', path: '/muistaminen' },
  { label: 'Kulkeminen', path: '/kulkeminen' },
  { label: 'Ilmoittautuminen', path: '/ilmoittautuminen' },
  { label: 'Ohjelma', path: '/ohjelma' },
  { label: 'UKK', path: '/ukk' },
] as const;

// ── Tests ─────────────────────────────────────────────────────────────────────

test.describe('Navigation', () => {
  test('page has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Veerajajani2022/);
  });

  test('navbar shows all navigation links', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('app-navigation-menu');
    await expect(nav).toBeVisible();

    for (const { label } of NAV_ROUTES) {
      await expect(nav.getByText(label, { exact: true })).toBeVisible();
    }
  });

  for (const { label, path } of NAV_ROUTES) {
    test(`"${label}" link navigates to ${path}`, async ({ page }) => {
      await page.goto('/');
      await page.locator('app-navigation-menu').getByText(label, { exact: true }).click();
      await expect(page).toHaveURL(new RegExp(path));
    });
  }

  test('unknown route shows 404 page', async ({ page }) => {
    await page.goto('/nonexistent-page');
    await expect(page.locator('app-page-not-found h1')).toContainText('Error 404');
  });
});

test.describe('Header & Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('header displays hero image and title', async ({ page }) => {
    await expect(page.locator('app-header h1')).toContainText('Veeran & Janin hääsivusto');
    await expect(page.locator('app-header img')).toBeVisible();
  });

  test('footer shows copyright', async ({ page }) => {
    const footer = page.locator('app-footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('Jani Heikkinen');
  });
});

test.describe('Home Page (Mitä, Missä, Milloin)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays wedding date', async ({ page }) => {
    await expect(page.locator('text=23.7.2022')).toBeVisible();
  });

  test('displays ceremony location', async ({ page }) => {
    await expect(page.locator('text=Ruotsinpyhtään kirkossa')).toBeVisible();
  });

  test('displays reception venue', async ({ page }) => {
    await expect(page.locator('text=Petjärven vanhalla navetalla')).toBeVisible();
  });
});

test.describe('Majapaikkoja (Accommodation)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/majapaikkoja');
  });

  test('displays accommodation information', async ({ page }) => {
    await expect(page.locator('text=Strömforsin ruukin alueelta')).toBeVisible();
  });

  test('has links to accommodation providers', async ({ page }) => {
    await expect(page.locator('a[href*="stromforsinruukki.com"]').first()).toBeVisible();
  });
});

test.describe('Muistaminen (Gifting)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/muistaminen');
  });

  test('displays gifting information', async ({ page }) => {
    await expect(page.locator('text=häälahjatiliämme')).toBeVisible();
  });
});

test.describe('Kulkeminen (Getting There)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/kulkeminen');
  });

  test('displays travel directions', async ({ page }) => {
    await expect(page.locator('text=Strömforsin ruukkiin')).toBeVisible();
  });

  test('has taxi information', async ({ page }) => {
    await expect(page.locator('text=Taksi Loviisa')).toBeVisible();
  });
});

test.describe('Ilmoittautuminen (Registration)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ilmoittautuminen');
  });

  test('displays registration info', async ({ page }) => {
    await expect(page.locator('text=Ilmoittaudu häihin')).toBeVisible();
  });

  test('has Google Forms link', async ({ page }) => {
    await expect(page.locator('a[href*="docs.google.com/forms"]')).toBeVisible();
  });
});

test.describe('Ohjelma (Program)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ohjelma');
  });

  test('displays program image', async ({ page }) => {
    await expect(page.locator('app-program img').first()).toBeVisible();
  });

  test('displays speech note', async ({ page }) => {
    await expect(page.locator('text=pitää puheen')).toBeVisible();
  });
});

test.describe('UKK (FAQ)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ukk');
  });

  test('displays dress code question', async ({ page }) => {
    await expect(page.locator('text=Mitä mie laitan päälle')).toBeVisible();
  });

  test('displays contact information', async ({ page }) => {
    await expect(page.locator('text=veerajajani2022@gmail.com')).toBeVisible();
  });
});

test.describe('Responsive', () => {
  test('renders correctly on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('app-header h1')).toBeVisible();
    await expect(page.locator('app-navigation-menu')).toBeVisible();
  });
});
