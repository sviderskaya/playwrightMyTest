import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightLandingPage {
  readonly page: Page;
  readonly getHeader: Locator
  readonly getPlaywrightLogo: Locator
  readonly getDocsBth: Locator
  readonly getApiBth: Locator
  readonly getNodeJsDropdown: Locator
  readonly getNodeJsInNodeJsDropdownMenu: Locator
  readonly getPythonInNodeJsDropdownMenu: Locator
  readonly getJavaInNodeJsDropdownMenu: Locator
  readonly getDotNetInNodeJsDropdownMenu: Locator
  readonly getCommunityBth: Locator

  constructor(page: Page) {
    this.page = page;
    this.getHeader = page.locator("//nav[@class='navbar navbar--fixed-top']")
    this.getPlaywrightLogo = page.locator("//a[@class='navbar__brand']")
    this.getDocsBth = page.locator("//a[@class='navbar__item navbar__link' and contains (text(), 'Docs')]")
    this.getApiBth = page.locator("//a[@class='navbar__item navbar__link' and contains(text(), 'API')]")
    this.getNodeJsDropdown = page.locator("//div[@class='navbar__item dropdown dropdown--hoverable']")
    this.getNodeJsInNodeJsDropdownMenu = page.locator("//a[@class='dropdown__link undefined dropdown__link--active' and contains (text(), 'Node.js')]")
    this.getPythonInNodeJsDropdownMenu = page.locator("//a[@class='dropdown__link' and contains (text(), 'Python')]")
    this.getJavaInNodeJsDropdownMenu = page.locator("//a[@class='dropdown__link' and contains (text(), 'Java')]")
    this.getDotNetInNodeJsDropdownMenu = page.locator("//a[@class='dropdown__link' and contains (text(), '.NET')]")
    this.getCommunityBth = page.locator("//a[@class='navbar__item navbar__link' and contains (text(), 'Community')]")
  }

//   async goto() {
//     await this.page.goto('https://playwright.dev');
//   }
}