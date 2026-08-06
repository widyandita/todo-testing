import { test, expect } from '@playwright/test';

test('Demo - failing assertion generates Playwright artifacts', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/#/');

    const newTodo = page.getByTestId('text-input');

    // Add tasks
    await newTodo.click();
    await newTodo.fill('sort videos');
    await newTodo.press('Enter');
    await newTodo.fill('edit pictures');
    await newTodo.press('Enter');
    await newTodo.fill('post pictures');
    await newTodo.press('Enter');
    await newTodo.fill('design packaging');
    await newTodo.press('Enter');

    // Check "sort videos"
    await page
        .getByRole('listitem')
        .filter({ hasText: 'sort videos' })
        .getByTestId('todo-item-toggle')
        .check();
      
    // Delete "post photos"
    await page
        .getByRole("listitem")
        .filter({ hasText: "post pictures" })
        .hover();

    await page
        .getByRole("listitem")
        .filter({ hasText: "post pictures" })
        .locator(".destroy")
        .click({ force: true });

    // Clear completed tasks
    await page.locator('.clear-completed').click({force: true});

    // Change the count of remaining tasks to 3 instead of 2
    const tasks = page.locator('.todo-list li');
    await expect(tasks).toHaveCount(3)
});