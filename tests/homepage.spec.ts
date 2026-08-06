import { test, expect } from '@playwright/test';

test('Page loaded succesfully', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/#/');

    await expect(page).toHaveTitle('TodoMVC: React');
});