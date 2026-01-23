import { test, expect } from '@playwright/test';
import { baseURL } from '../../playwright.config.ts'; 

test.skip('has title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
});