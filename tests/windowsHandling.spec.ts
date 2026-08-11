import{test, expect}  from '@playwright/test';

test('Handle Windows Tabs', async({page, context}) => {
    await page.goto('https://demoqa.com/browser-windows');
    await page.context();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator('#tabButton').click()
    ]);
    await expect(newPage.locator('#sampleHeading')).toHaveText('This is a sample page');
})