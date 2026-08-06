import { test, expect } from '@playwright/test';

test('User can manage todo items', async ({ page }) => {
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

    // Verify the amount of tasks are 4
    const tasks = page.locator('.todo-list li');

    await expect(tasks).toHaveCount(4);

    // Check "sort videos"
    await page
        .getByRole('listitem')
        .filter({ hasText: 'sort videos' })
        .getByTestId('todo-item-toggle')
        .check();
    
    // Verify the completed task is 1
    await expect(page.locator('.todo-list li.completed')).toHaveCount(1);

    // Verify the rest of the tasks are 3
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(tasks).toHaveCount(3);

    // Edit "design packaging" task
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByText('design packaging').dblclick();
    await page
        .getByTestId('todo-item')
        .getByTestId('text-input')
        .fill('design floorplan and packaging');
    await page
        .getByTestId('todo-item')
        .getByTestId('text-input')
        .press('Enter');

    // Verify edit task
    await expect(
        page.getByText("design floorplan and packaging")
    ).toBeVisible();
 
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

    // Verify deletion
    await expect(
        page.getByText("post photos")
    ).toHaveCount(0);
    
    // Clear completed tasks
    await page.locator('.clear-completed').click({force: true});

    // Verify clear completion
    await expect(
        page.getByText("sort videos")
    ).toHaveCount(0);

    // Verify the remaining tasks are 2
    await expect(tasks).toHaveCount(2)
});