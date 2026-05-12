import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sandbox-crm.mobilecom.in/');
  await page.getByRole('button', { name: 'Get Started' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('avasthi121.d2itechnology@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Pas...