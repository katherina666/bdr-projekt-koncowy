import { expect, type Page } from '@playwright/test';

export class MenuPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async goToMenu(menuLink: string, subMenuLink: string, subMenuName: string) {
    

        await this.page.getByRole('banner').getByRole('list').getByRole('button', { name: menuLink }).click();
        await this.page.getByRole('link', { name: subMenuLink }).click();
        await expect(this.page.getByRole('heading', { name: subMenuName, exact: true })).toBeVisible();
    }
}