import{test, expect} from '@playwright/test';
import{LoginPage} from '../Page/LoginPage.js';
import{OpenMenu} from '../Page/OpenMenu.js';


test('Open The Menu', async({page}) => {
    
    const openMn = new OpenMenu(page);
    const login = new LoginPage(page);
    await login.goto();
    await login.isLoaded();
    await login.login('standard_user','secret_sauce');
    await openMn.goto();
    await openMn.isLoaded();
    await openMn.menuBtn();

})