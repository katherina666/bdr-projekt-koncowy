import { expect, type Page } from '@playwright/test';

export class GoToShop {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async goToDecathlon(){
        await this.page.goto('https://www.decathlon.pl/');
        await expect(this.page.locator('.logo')).toBeVisible();
    }

    async allowCookies() {
        await this.page.locator('#didomi-notice-agree-button').click();
    }
}