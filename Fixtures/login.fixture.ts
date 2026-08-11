import{test as base, expect, Page} from '@playwright/test';

type LoginFixture= {
    loggedInUser: Page;
}

 export const  test = base.extend<LoginFixture> ({
    loggedInUser: async({page}, use) => {
       
       await page.goto('https://www.saucedemo.com');
       await  page.getByRole('textbox',{name:'Username'}).fill('standard user');
       await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
       await page.getByRole('button',{name:'Login'}).click();

       await use(page);
    }

})

export{expect};