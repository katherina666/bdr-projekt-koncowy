import { expect, type Page } from '@playwright/test';

export class ShoppingCart {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart() {
        await this.page.getByRole('button', { name: 'Dodaj do koszyka' }).click();
    }
    async addToCartSuccess() {
        await expect(this.page.locator('div').filter({ hasText: 'Produkt dodany do koszyka!' }).nth(1)).toBeVisible();
    }
    
    async viewCart() {
        await this.page.getByRole('link', { name: 'Idź do koszyka' }).click();
    }
    
    async removeFromCart() {
        await this.page.getByLabel('Remove product in cart page').click();
    }

    async emptyCart() {
        await expect(this.page.getByRole('heading', { name: 'Twój koszyk jest pusty.' })).toBeVisible();
    }

}