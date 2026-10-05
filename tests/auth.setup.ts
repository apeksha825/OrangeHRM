/*import { test as setup, expect } from '@playwright/test';
import { env } from '../config/env';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  // Enter username
  await page.getByRole('textbox', { name: 'Username' }).fill(env.username);

  // Enter password
  await page.getByRole('textbox', { name: 'Password' }).fill(env.password);

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify that login was successful
  await expect(page).toHaveURL(/dashboard/);

  // Save authenticated browser state
  await page.context().storageState({ path: authFile });
});*/

import { test as setup, expect } from '@playwright/test';
import { env } from '../config/env';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

  console.log('Starting authentication...');
  console.log('Base URL:', env.baseUrl);
  console.log('Username:', env.username);

  // Navigate to login page
  await page.goto('/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded',
  });

  console.log('Login page URL:', page.url());

  // Username
  await page.getByRole('textbox', {
    name: 'Username',
  }).fill(env.username);

  // Password
  await page.getByRole('textbox', {
    name: 'Password',
  }).fill(env.password);

  // Login
  const loginButton = page.getByRole('button', {
    name: 'Login',
    exact: true,
  });

  await expect(loginButton).toBeVisible();
  await expect(loginButton).toBeEnabled();

  console.log('Clicking Login...');

  await loginButton.click();

  // IMPORTANT:
  // Wait explicitly for the navigation caused by Login.
  await page.waitForURL(/dashboard/, {
    timeout: 30000,
    waitUntil: 'domcontentloaded',
  });

  console.log('Login successful!');
  console.log('Dashboard URL:', page.url());

  // Confirm dashboard
  await expect(page).toHaveURL(/dashboard/);

  // Save authenticated state
  await page.context().storageState({
    path: authFile,
  });

  console.log('Authentication state saved:', authFile);
});
