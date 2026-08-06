import { test, expect } from '@playwright/test';

test('page loaded and has title', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/#/');

    await expect(page).toHaveTitle('TodoMVC: React');
});