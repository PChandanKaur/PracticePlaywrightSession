# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: windowsHandling.spec.ts >> Handle Windows Tabs
- Location: tests\windowsHandling.spec.ts:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: #sampleHeading)
Expected: "This is a sample page"
Error: Unexpected token ")" while parsing css selector "#sampleHeading)". Did you mean to CSS.escape it?

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for #sampleHeading)

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]:
        - generic [ref=e38] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
      - generic [ref=e71]: Widgets
      - generic [ref=e84]: Interactions
      - generic [ref=e96]: Book Store Application
    - generic [ref=e108]:
      - generic [ref=e109]:
        - heading "Browser Windows" [level=1] [ref=e110]
        - button "New Tab" [active] [ref=e112] [cursor=pointer]
        - button "New Window" [ref=e114] [cursor=pointer]
        - button "New Window Message" [ref=e116] [cursor=pointer]
      - iframe [ref=e120]:
        - generic [ref=f3e3]:
          - link "Play for free in your browser ! Play for free in your browser !" [ref=f3e4] [cursor=pointer]:
            - /url: https://trace.mediago.io/ju/ic?tn=41b6e88a2b85b0e731ef8e73e5558712&trackingid=d02506046a0635133d0510d1b85be0e7&acid=30919&data=JUuqlNKEuExvV4aXIZeIEmKlMPA-gowPA6KynsvmHOhwlPG1Mp9LSSKHehkPDvlHOdlzsxF26BQfwhrdq5S4lsvuclPYPs0s7bf8qlsw69hdgFHAnxLJMEBpUD8TW17kBA5BYUlcu1jSW-QYsYrQ0XfF-YTgyKBlN1eRNETED_1GZ8DhclWpeFbt0gUmouoKqHWdjwdWdMFGU4r_h6cyre6whafRbmbMpexuJGJI06tGhyOu2c7klOs1_IAEn2HFP7u5t4zpR3SauPW_JZ1lZCKXu449tXNBEzYhsCO99EgW_TTH_NEpILGBvw9wtrJjiI3s0wfXKiTT00SgUqnE0MTeyYzOtYjxpfOOT8kXeMOTOfWdEH-OKOHAi1vHpT2Ktpg9CWFbqSyiUA4oA-Nhwc_uC9_wqImxufQ9IF73xCo1-Io_V2mQtR-VsvQfglpWpBKn4AhwbJFSdkgzdQj0buzisQ4C9ZNCY6FeW8Rnl-RqnmAbJwNqlqjhsQ21ztIaHgcIpHM43t3de4P0X7Kor75YfBNs2ezMmEkf9NthrTkXTRVKXD6GAVxBfxVp5sGSV2g8DRS4cleSPcWIyMoYxMtJdr8kaOkueiKIFVzUebJVS0AyWoFe7OKWDn9Og2Naj7WYlIDxleK5agVfq7Ax0a01oTsjj7ZNN2kQ88z4jrIe5tmokKWtUEhgL53C3GBLHx5piPKgWWRaoxRJprEhBHvd3LQJBrR56B3XE4doYaDLdyAJlbl-j7mnL3yGYQIzGkrA2o8g0Q1UM-vTw60k4Gba6eNqbljcQL75xCF2ir2V7H058OApS-xPsoZmo6SeRfPHTf0dI9C8LilMwKm_ysdve5Q8KEnfdcv8loVZJd2DnQ2DwUYAOHdF3VKwU1d4H-cH0vEbRI9vmv_eQWVIDiePTID6hlaZE4TkccqYpy9Hi5c1TUOYcO2y0JI0BuIHMuklwlhVan7eIJPuFGaxoDDt2e_MO4bl0WOLGkMQ5P0z7V3mXN0kFEW23pF3s5C0G5L5jPOk6dBLpHfp_esem3qnHhB0Yo-nwzU2g2KGj9qcWKEQcu89oDPeqHev_sgAU0ZVVrzV6SdhfHw7RTjxyGV4F0I0ebJd1256hH0ckCfSCdNEt8sxZiLDvpqNCAIgtQafEXeE-Qq8SnfjAgbuHRIVTrYgmyZOUv6Vndcud_1QZYFBEkT-i0LVdl_fpRLxjvHrNAUcFDfnO78M5yB4SaVHq_r6E0GJ4eFzxWMnOJtu5AQO4KEwN49LWXdWPipb-iy9bSAPc2dyxnyRvvlSJskdwSbFy2Org_-r1nEOua5r0T8mQ4L-KCmrp6e5DwLzvFqZh6o9wgZJ4awiC1d4ms1K5q2gWTQhTCLuqowEQgH3jvmPfiSPflrvAwg6vSTKpDavoUvRJkcV5zt7LJt8txblmc6u7K6BAS7qQw8RvRL8OvKpO7GAjrQPb9fYn1zHpSQslvPig9Fjute20jg4KwXaK3K89ul6yNQacS2a44yZwBgNPB1rfD3viOXn7HiOUjVNxH74TrWpvjwEUyqNSebJd2ErqAPSUv6n9ip_wlBusv0PMaa9JHJTVUYmOZqIbKLThaRCG5DTyUB8jHlCRFfCT_Ss5xsGiLszsrMIeLQJWTsywpw9A6C-V8mffscGX9165vpnSXkp1OWuGNTX3sq2zhRRCRUkfekuFTi5ZGAw4nvdG2Tj3yJo2J2erqB3WlE43cB0EsyTb2DejFq629mKaxORBjrZZMA2m29MEN7IBwXSA33Xnwjjn1eN7X16zlObcouu-eh5iTeSJTRDyYHNuEJIIfWJ5_hiWluCgnBuMLqW4NDAO9CUJPhKCSNViGA2RdRDRrUNONCQwTBqtwAWQ3YAHtYnwA5thNIAJsrGRTbC7K70Zy33vhphDgLHN71fJI-je0Rxu6ZdO7VLq7oyTDFPTqbx5-grFnEmJRF31PC_rOLy-sehe2KJC-Y-mQfu0FNvTsEr_d9cHFO8ZQB_riksKLDPpwXYHDBkkkc&uid=000014d4f66ec208&mguid=&ap=0.443438&tid=140&gprice=iy8mQ8Zo3DYxxluasRD5AwBc6cHqH1hu-Ks40bG230E&campaignid=5265591&c_sync=1&google_click_url=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCZj8-nDt5aoWTOpmImtUPnt6X2AqjprHLbIXIn6mtEMCNtwEQASDG-9Z5YP2AiYHoA8gBCeACAKgDAcgDAqoE-gFP0JbUKS_1vWRzxrE5OlWBSFKHFM8QNkrBApo8wfTe8TyPIkuaVhMcs3vWRyPweFDeisPjBZVPAdmx5UAUrecEcaBODAcvAIzH_mqs7UqWVgaQszD7_hOcjD22JDjtOypO0GbX8dJF5sm8xwHoglh90Od9fcrpWfvp61IKTz6l17ZTiRLUenywUc66f8TQFdh3DSyaiEWQwDgjp_bpW7jg_ULoYxe-xYJey0EatTRUlDbI_kzbt54ngXppkS_DKFfqbLxZY5VVOPI70X-1Ejtfqykod8iIgRGXdQz_ExuId82yaicPSR3Q1Lt2u9qHiNbuzkKY9N0us0qn4AQBgAbUrbH094ml_4kBoAYhqAeT2LECqAeU2LECqAeV2LECqAemvhuoB5bYG6gHqpuxAqgH_56xAqgH35-xAqgH_uixAqgHrb6xAqgHv9OxAtgHANIIMAiAYRABMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYjLz97oWVlgNgAPIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MvoLAggBgAwBqg0CQ0HiDRMIvuT97oWVlgMVGYSmBB0e7wWr6g0TCJir_u6FlZYDFRmEpgQdHu8Fq4gO____________AdAVAYAXAbIXEBgMKgo2MTY4NTc2NTA1UAGqGBcJQ2DlUIWhFUESCjYxNjg1NzY1MDUYAQ%26num%3D1%26sig%3DAOD64_21f8oO3G4y9V1Ot4OMa4eF2CaVgg%26client%3Dca-pub-4573231550355221%26adurl%3D
            - img "Play for free in your browser !" [ref=f3e5]
            - generic [ref=f3e6]: Play for free in your browser !
          - link [ref=f3e9] [cursor=pointer]:
            - /url: //cdn.mediago.io/js/officialWebsite/policy.html
          - generic: Tiles Survive
          - generic: Open
  - contentinfo [ref=e126]:
    - generic [ref=e127]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test, expect}  from '@playwright/test';
  2  | 
  3  | test('Handle Windows Tabs', async({page, context}) => {
  4  |     await page.goto('https://demoqa.com/browser-windows');
  5  |     await page.context();
  6  | 
  7  |     const [newPage] = await Promise.all([
  8  |         context.waitForEvent('page'),
  9  |         await page.locator('#tabButton').click()
  10 |     ]);
> 11 |     await expect(newPage.locator('#sampleHeading)')).toHaveText('This is a sample page');
     |                                                      ^ Error: expect(locator).toHaveText(expected) failed
  12 | })
```