import { expect, type Page } from '@playwright/test';

export class Search {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async searchFrase(searchFrase: string) {
        await this.page.getByRole('searchbox', { name: 'Znajdź produkt, sport lub markę' }).fill(searchFrase);
        await this.page.getByRole('button', { name: 'Znajdź produkt, sport lub markę' }).click();
    }
    // async goToDecathlon(){
    //     await this.page.goto('https://www.decathlon.pl/');
    //     await expect(this.page.locator('.logo')).toBeVisible();
    // }

   
}