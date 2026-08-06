import { test, expect } from '@playwright/test';

test('page loaded and has title', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/#/');

    await expect(page).toHaveTitle('TodoMVC: React');
});

test('add, check and delete to-do list', async ({ page }) => {
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
    await page.getByRole('listitem').filter({ hasText: 'sort videos' }).getByTestId('todo-item-toggle').check();
    
    // Verify the completed task is 1
    await expect(page.locator('.todo-list li.completed')).toHaveCount(1);

    // Verify the rest of the tasks are 3
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(tasks).toHaveCount(3);
 
    // Delete "post photos"
    await page.getByRole('link', { name: 'All' }).click();
    await tasks.nth(2).hover();
    await tasks.nth(2).locator('.destroy').click({force: true});

    // Clear completed tasks
    await page.locator('.clear-completed').click({force: true});

    // Verify the remaining tasks are 2
    await expect(tasks).toHaveCount(2)
});

test('invalid task count', async ({ page }) => {
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
    await page.getByRole('listitem').filter({ hasText: 'sort videos' }).getByTestId('todo-item-toggle').check();
       
    // Delete "post photos"
    const tasks = page.locator('.todo-list li');
    
    await tasks.nth(2).hover();
    await tasks.nth(2).locator('.destroy').click({force: true});

    // Clear completed tasks
    await page.locator('.clear-completed').click({force: true});

    // Change the count of remaining tasks to 3 instead of 2
    await expect(tasks).toHaveCount(3)
});