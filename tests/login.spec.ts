import{test, expect} from '../Fixtures/login.fixture.js';

test('Login Test Page' , async({loggedInUser}) => {
    
  await expect(loggedInUser).toHaveURL('https://www.saucedemo.com/inventory.html');
})