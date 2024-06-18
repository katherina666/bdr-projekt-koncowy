import { test, expect } from '@playwright/test';

import { GoToShop } from '../pageObjects/goToShop';
import { Search } from '../pageObjects/search';

let goToShop: GoToShop;
let search: Search;

test.beforeEach(async ({ page }) => {
    goToShop = new GoToShop(page);
    search = new Search(page);
})

test('Sprawdzenie przy braku rezultatów wyszukiwania', async ({ page }) => {
    //given
    await goToShop.goToDecathlon();
    await goToShop.allowCookies();
    //when
    await search.searchFrase('bgshgjdghkdjgkdjkdgjkdjkld');
    //then
    await expect(page.getByText('Nie znaleźliśmy żadnych wyników dla')).toBeVisible();
});