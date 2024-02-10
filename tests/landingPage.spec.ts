import { test, expect, type Page } from '@playwright/test';
import { PlaywrightLandingPage } from '../pageObject/playwrightLandingPage';
import exp from 'constants';

test.beforeEach(async ({ page }) => {
  
    await page.goto('https://playwright.dev/');
  });

test('should check the title', async ({ page }) => {

    await expect(page).toHaveTitle(/Playwright/);
});

test('should check the site header and all header components are visible', async ({ page }) => {
    let playwrightLandingPage = new PlaywrightLandingPage(page)

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

    await expect(playwrightLandingPage.getHeader).toBeVisible()
});
