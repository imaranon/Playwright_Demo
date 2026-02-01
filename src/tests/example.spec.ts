import { test, expect } from '@playwright/test';
import { csvToJson } from '../utils/CsvtoJson';

// import { baseURL } from '../playwright.config.ts'; 

// After each test
// Logout
// Clear cookies
// Take screenshots on failure
// Reset test data
test.afterEach(async () => {
  console.log ('Finished test of After each test...');
  console.log('Test completed');
});

// After all tests
// Delete test data
// Close database connection
// Stop server
// Cleanup
// Generate reports (custom)
test.afterAll(async () => {
  console.log('Finished test suite of After all tests...');
  console.log('All Test completed');
});
// Before all tests
// Create test data
// Global setup
// Start a server
// Load test configuration
test.beforeAll(async () => {
  console.log('Starting test of Before all tests...');
});

// Before each test
// Navigate to base URL
// Login before every test
// Reset app state
test.beforeEach(async ({page}) => {
  console.log ('Starting test of Before each test...');
  await page.goto('https://practicesoftwaretesting.com/');
});




//===============================================================================

// Basic test to check the title of the page .toHaveTitle
test('Homepage has title', async ({ page }) => {  

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
});

// Test to check the get started link
test('get started link', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Sign in' }).click();
  //await page.getByTestId('sign-in-button').click();

  await page.getByRole('textbox', { name: 'Email address' }).fill('admin@practicesoftwaretesting.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('welcome01');
  await page.getByRole('button',{name: 'login'}).click()
});