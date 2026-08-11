# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Test Page
- Location: tests\login.spec.ts:4:1

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_HOST
Call log:
  - navigating to "https://www.saucedemo.com12/", waiting until "load"

```

# Page snapshot

```yaml
- article [ref=e3]:
  - generic [ref=e6]:
    - heading "Server Not Found" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - text: Nightly can’t connect to the server at
      - strong [ref=e9]: www.saucedemo.com12
      - text: .
    - generic [ref=e10]:
      - heading "What can you do about it?" [level=3] [ref=e11]
      - list [ref=e12]:
        - listitem [ref=e13]: Check to make sure you’ve typed the website address correctly and try again in a few moments.
        - listitem [ref=e14]: Check your network connection.
        - listitem [ref=e15]: Check that Nightly has permission to access the web (you might be connected but behind a firewall).
    - paragraph [ref=e16]:
      - link "Learn more…" [ref=e17] [cursor=pointer]:
        - /url: https://support.mozilla.org/1/firefox/153.0/WINNT/en-US/server-not-found-connection-problem
    - button "Try Again" [ref=e20]
```

# Test source

```ts
  1  | import{test, Locator, Page} from '@playwright/test';
  2  | 
  3  | export abstract class BasePage{
  4  | 
  5  |     readonly page: Page;
  6  |     constructor(page: Page)
  7  |     {
  8  |         this.page = page;
  9  |     }
  10 | 
  11 |     //Navigate to a Specific URL
  12 |     async navigate(url: string): Promise<void>
  13 |     {
> 14 |         await this.page.goto(url, {waitUntil: 'load'});
     |                         ^ Error: page.goto: NS_ERROR_UNKNOWN_HOST
  15 |     }
  16 | 
  17 |     async click(locator: Locator): Promise<void>
  18 |     {
  19 |         await locator.waitFor({state:'visible'});
  20 |         await locator.click();
  21 |     }
  22 | 
  23 |     async fill(locator: Locator, value:string): Promise<void>
  24 |     {
  25 |         await locator.waitFor({state:'visible'});
  26 |         await locator.fill(value);
  27 |     }
  28 | 
  29 |     abstract isLoaded():Promise<void>;
  30 | }
  31 | 
  32 | 
```