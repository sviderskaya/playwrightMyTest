import { test, expect, type Page } from '@playwright/test';
import { PlaywrightLandingPage } from '../page-object/playwrightLandingPage';
import { PlaywrightInstallationPage } from '../page-object/playwrightInstallationPage';

test.beforeEach(async ({ page }) => {
  
    await page.goto('https://playwright.dev/');
  });

test("should check that we are on the right page", async({page}) => {
    let playwrightLandingPage = new PlaywrightLandingPage(page)

    await playwrightLandingPage.getGetStartedBtnOnLandingPage.click()
    await expect(page).toHaveURL("https://playwright.dev/docs/intro")
})

test("should check Installing Playwright tabs", async({page}) => {
    let playwrightLandingPage = new PlaywrightLandingPage(page)
    let playwrightInstallationPage = new PlaywrightInstallationPage(page)

    await playwrightLandingPage.getGetStartedBtnOnLandingPage.click()
    await expect(playwrightInstallationPage.getInstallingPlaywrightNpm).toBeVisible()
    await expect(playwrightInstallationPage.getInstallingPlaywrightYarn).toBeVisible()
    await expect(playwrightInstallationPage.getInstallingPlaywrightPnpm).toBeVisible()
})

test("should check every command to install playwright", async({page}) => {
    let playwrightLandingPage = new PlaywrightLandingPage(page)
    let playwrightInstallationPage = new PlaywrightInstallationPage(page)

    await playwrightLandingPage.getGetStartedBtnOnLandingPage.click()
    await expect(playwrightInstallationPage.getInstallingPlaywrightNpm).toBeVisible()
    await expect(playwrightInstallationPage.getNpmCodeToInstall).toBeVisible()

    await playwrightInstallationPage.getInstallingPlaywrightYarn.click()
    await expect(playwrightInstallationPage.getYarnCodeToInstall).toBeVisible()

    await playwrightInstallationPage.getInstallingPlaywrightPnpm.click()
    await expect(playwrightInstallationPage.getPnpmCodeToInstall).toBeVisible()
})