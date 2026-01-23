import { test, expect } from '@playwright/test';
// import { baseURL } from '../playwright.config.ts'; 

test('has title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'nav-sign-in' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // Check for the page URL to be 'https://playwright.dev/docs/intro' (including query string)
await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login/');
});
