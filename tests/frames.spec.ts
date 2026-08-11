import{test, expect} from '@playwright/test';

test('Handle Frames', async({page}) => {
    await page.goto('https://demoqa.com/frames');
    const frame1= await page.frameLocator('#frame1');
    await expect(frame1.locator('#sampleHeading')).toHaveText('This is a sample page');


})