import{expect, Locator, Page} from '@playwright/test';
import{BasePage} from './BasePage.js';

export class LoginPage extends BasePage
{
 readonly username: Locator;
 readonly password: Locator;
 readonly loginButton: Locator;

 constructor(page: Page)
 {
    super(page);
    this.username= page.getByRole('textbox',{name:'Username'});
    this.password = page.getByRole('textbox',{name:'Password'});
    this.loginButton= page.getByRole('button',{name:'Login'});

 }

 async goto():Promise<void>
 {
    await this.navigate('https://www.saucedemo.com12/');
 }

 async isLoaded():Promise<void>
 {
    await expect(this.username).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.loginButton).toBeVisible();
}

async login(email: string, emailPassword: string): Promise<void>
{
    await this.fill(this.username, email);
    await this.fill(this.password,emailPassword);
    await this.click(this.loginButton);

}


}


