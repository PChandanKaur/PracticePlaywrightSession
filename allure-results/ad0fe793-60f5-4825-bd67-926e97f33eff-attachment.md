# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Test Page
- Location: tests\login.spec.ts:3:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    7 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- textbox "Username": standard user
- textbox "Password": secret_sauce
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1 | import{test, expect} from '../Fixtures/login.fixture.js';
  2 | 
  3 | test('Login Test Page' , async({loggedInUser}) => {
  4 |     
> 5 |   await expect(loggedInUser).toHaveURL('https://www.saucedemo.com/inventory.html');
    |                              ^ Error: expect(page).toHaveURL(expected) failed
  6 | })
```