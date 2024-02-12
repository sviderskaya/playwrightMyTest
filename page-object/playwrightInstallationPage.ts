import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightInstallationPage{
    readonly page: Page
    readonly getInstallingPlaywrightNpm: Locator
    readonly getInstallingPlaywrightYarn: Locator
    readonly getInstallingPlaywrightPnpm: Locator
    readonly getCoppiedNpmInstallationCode: Locator

    readonly getNpmCodeToInstall: Locator
    readonly getYarnCodeToInstall: Locator
    readonly getPnpmCodeToInstall: Locator

    constructor(page:Page){
        this.page = page
        this.getInstallingPlaywrightNpm = page.locator("//li[@class='tabs__item tabItem_LNqP tabs__item--active']")
        this.getInstallingPlaywrightYarn = page.locator("//li[@class='tabs__item tabItem_LNqP' and contains (text(), 'yarn')]")
        this.getInstallingPlaywrightPnpm = page.locator("//li[@class='tabs__item tabItem_LNqP' and contains (text(), 'pnpm')]")

        this.getNpmCodeToInstall = page.locator("//span[@class='token plain' and contains (text(), ' init playwright@latest')]")
        this.getYarnCodeToInstall = page.locator("//span[@class='token function' and contains (text(), 'yarn')]")
        this.getPnpmCodeToInstall = page.locator("//span[@class='token function' and contains (text(), 'pnpm')]")

    }
}

