import { expect, type Locator, type Page } from '@playwright/test';

export class InstallationPage{
    readonly page: Page

    constructor(page:Page){
        this.page = page
    }
}

