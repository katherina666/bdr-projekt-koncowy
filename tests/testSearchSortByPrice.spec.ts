import { test, expect } from '@playwright/test';

import { GoToShop } from '../pageObjects/goToShop';
import { Search } from '../pageObjects/search';

let goToShop: GoToShop;
let search: Search;

test.beforeEach(async ({ page }) => {
    goToShop = new GoToShop(page);
    search = new Search(page);
})

test('Sprawdzenie sortowania wyników po cenie rosnąco', async ({ page }) => {
    //given
    await goToShop.goToDecathlon();
    await goToShop.allowCookies();
    await search.searchFrase('spodnie damskie');
    //when
    await page.getByRole('button', { name: 'Sortuj' }).click();
    await page.getByRole('option', { name: 'Ceny rosnąco' }).locator('span').click();
    //then
    await page.getByRole('button', { name: 'Sortuj' }).click();
    await expect(page.locator('#option-sort-1 > svg')).toBeVisible();
    
});