import { expect, test } from '@playwright/test';

const loginUrl = 'https://practicetestautomation.com/practice-test-login/';

test('logs in successfully with valid credentials', async ({ page }) => {
  await page.goto(loginUrl);

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL(/\/logged-in-successfully\//);
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  await expect(page.getByText(/Congratulations.*successfully logged in!/i)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});

test('shows an error for an invalid password', async ({ page }) => {
  await page.goto(loginUrl);

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('WrongPassword123');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL(loginUrl);
  await expect(page.locator('#error')).toHaveText('Your password is invalid!');
});
