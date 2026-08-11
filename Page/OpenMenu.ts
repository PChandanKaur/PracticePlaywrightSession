import{ Page, Locator, expect} from '@playwright/test';
import{BasePage} from './BasePage.js';
import{LoginPage} from './LoginPage.js';

export class OpenMenu extends BasePage
{
    readonly menuButton: Locator;
   // readonly allItems: Locator;

    constructor(page: Page)
    {
        super(page);
        this.menuButton= page.getByRole('button',{name: 'Open Menu'});
        //this.allItems= page.getByRole('link',{name:'All Items'})
    }

    async goto(): Promise<void>
    {
        await this.navigate('/inventory.html');
    }

    async isLoaded(): Promise<void>
    {
        await expect(this.menuButton).toBeVisible();
        //await expect(this.allItems).toBeVisible();
    
    }

    async menuBtn():Promise<void>
    {
        await this.click(this.menuButton);
        //await this.click(this.allItems);
    }

}