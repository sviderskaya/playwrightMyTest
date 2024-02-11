import { test, expect, type Page } from '@playwright/test';
import { PlaywrightLandingPage } from '../page-object/playwrightLandingPage';

test.beforeEach(async ({ page }) => {
  
    await page.goto('https://playwright.dev/');
  });

test('should check the title', async ({ page }) => {

    await expect(page).toHaveTitle(/Playwright/);
});

test('should check the site header and all header components are visible', async ({ page }) => {
    let playwrightLandingPage = new PlaywrightLandingPage(page)

    await expect(playwrightLandingPage.getHeader).toBeVisible()

    await expect(playwrightLandingPage.getPlaywrightLogo).toBeVisible()
    await expect(playwrightLandingPage.getPlaywrightLogo).toContainText("Playwright")
    await expect(playwrightLandingPage.getDocsBth).toBeVisible()
    await expect(playwrightLandingPage.getDocsBth).toContainText("Docs")
    await expect(playwrightLandingPage.getApiBth).toBeVisible()
    await expect(playwrightLandingPage.getApiBth).toHaveText("API")
    await expect(playwrightLandingPage.getNodeJsDropdown).toBeVisible()
    await playwrightLandingPage.getNodeJsDropdown.hover()
    await expect(playwrightLandingPage.getNodeJsInNodeJsDropdownMenu).toBeVisible()
    await expect(playwrightLandingPage.getPythonInNodeJsDropdownMenu).toBeVisible()
    await expect(playwrightLandingPage.getJavaInNodeJsDropdownMenu).toBeVisible()
    await expect(playwrightLandingPage.getDotNetInNodeJsDropdownMenu).toBeVisible()
    await expect(playwrightLandingPage.getCommunityBth).toBeVisible()

    await expect(playwrightLandingPage.getGitHubIcon).toBeVisible()
    await expect(playwrightLandingPage.getDiscortIcon).toBeVisible()
    await expect(playwrightLandingPage.getDarkAndLightModeSwicher).toBeVisible()
    await expect(playwrightLandingPage.getSearch).toBeVisible()
});

test('schould check GET STARTED button the the Landing Page', async ({page}) => {
    let playwrightLandingPage = new PlaywrightLandingPage(page)

    await expect(playwrightLandingPage.getGetStartedBtnOnLandingPage).toBeVisible()

    await playwrightLandingPage.getGetStartedBtnOnLandingPage.click()
    await expect(page).toHaveURL("https://playwright.dev/docs/intro")
})

test('should check Search on the Landing page', async({page}) => {
    let playwrightLandingPage = new PlaywrightLandingPage(page)

    await expect(playwrightLandingPage.getSearch).toBeVisible()

    await playwrightLandingPage.getSearch.click()
    await playwrightLandingPage.getSearchDocsInput.click()
    await playwrightLandingPage.getSearchDocsInput.pressSequentially("Page object models")
    await playwrightLandingPage.searchingInfo.click()
    
    await expect(page).toHaveURL("https://playwright.dev/docs/pom")
})