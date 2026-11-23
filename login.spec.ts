
import { test, expect } from '@playwright/test';

const loginUrl =
  'https://practicetestautomation.com/practice-test-login/';

test.describe('Login Tests', () => {

  test('Positive login', async ({ page }) => {
    await page.goto(loginUrl);

    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL(/logged-in-successfully/);

    await expect(
      page.getByText(/Congratulations student/i)
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'Log out' })
    ).toBeVisible();
  });

  test('Negative login - invalid password', async ({ page }) => {
    await page.goto(loginUrl);

    await page.locator('#username').fill('student');
    await page.locator('#password').fill('WrongPassword123');

    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify the error message
    await expect(
      page.locator('#error')
    ).toHaveText('Your password is invalid!');

    // Verify the user remains on the login page
    await expect(page).toHaveURL(loginUrl);

    // Verify the logout link is not visible
    await expect(
      page.getByRole('link', { name: 'Log out' })
    ).not.toBeVisible();
  });

});
