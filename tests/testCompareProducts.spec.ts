import { test, expect } from '@playwright/test';

import { GoToShop } from '../pageObjects/goToShop';
import { MenuPage } from '../pageObjects/menuPage';

let goToShop: GoToShop;
let menu: MenuPage;

test.beforeEach(async ({ page }) => {
    goToShop = new GoToShop(page);
    menu = new MenuPage(page);
})

test('Sprawdzenie dodania do porównania produktów', async ({ page }) => {
    //given
    await goToShop.goToDecathlon();
    await goToShop.allowCookies();
    await menu.goToMenu('Kobieta','Spodnie i spodenki damskie','Spodnie i spodenki damskie');
    
    //when
    await page.locator('label').first().click();
    await page.locator('div:nth-child(2) > .comparator-checkbox > label').click();
    await page.getByRole('button', { name: '/3 Porównaj produkty' }).click();
    //then
    await expect(page.locator('header').filter({ hasText: 'Porównaj produkty' })).toBeVisible();
    
});