import{test, expect} from '@playwright/test';

test('Upload The File', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.getByRole('button', {name:'Choose File'}).setInputFiles('C:\\Users\\Preet\\Downloads\\some-file.txt');
    await page.getByRole('button',{name:'Upload'}).click();

    const value= await expect(page.getByRole('heading',{name:'File Uploaded!'})).toHaveText('File Uploaded!');
    console.log(value);
})