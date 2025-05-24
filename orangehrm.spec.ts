import { test, expect } from '@playwright/test';

test('Create Admin user', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const loginheader=page.locator("h5");
  await expect(loginheader).toHaveText("Login");
const UserName =page.locator('input[name="username"]');
await (UserName).fill('Admin');
const PassWord=page.locator('input[name="password"]');
await PassWord.fill('admin123');
const SubmitButton =page.locator('button[type="submit"]');
await SubmitButton.click();
const AdminButton =await(page).locator('span',{hasText:'Admin'});
await AdminButton.click();
const AddButton = await(page).locator('button,[type="button"]').getByText('Add');
await AddButton.click();
const userRole = await page.getByText('-- Select --').first();
await userRole.click();
await page.getByText('Admin').nth(2).click();
await page.getByPlaceholder("Type for hints...").fill('Sania Shaheen');
await page.getByText('Sania Shaheen').click();
//await page.click('input[placeholder="Type for hints..."]');.fill('Sania  Shaheen');
const status = await page.locator('//div[contains(text(),"-- Select --")]');
await status.click();
await page.getByText('Enabled').click();
await page.locator('input,[class="oxd-input oxd-input--active"]').click();
await page.waitForTimeout(5000);

});