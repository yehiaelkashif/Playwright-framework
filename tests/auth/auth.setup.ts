import { test , expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';


test('authenticate user', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.open();
await loginPage.login(
    process.env.STANDARD_USER!,
    process.env.STANDARD_PASSWORD!
);  //  await loginPage.login('administrator', 'administrator');

  await expect(page).toHaveURL(/inventory.html/);
    await loginPage.currentPage.context().storageState({  path: 'playwright/.auth/user.json' });  
console.log('BASE_URL:', process.env.BASE_URL);
console.log('STANDARD_USER:', process.env.STANDARD_USER);
});