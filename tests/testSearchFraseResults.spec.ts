import { test, expect } from '@playwright/test';

import { GoToShop } from '../pageObjects/goToShop';
import { Search } from '../pageObjects/search';

let goToShop: GoToShop;
let search: Search;

test.beforeEach(async ({ page }) => {
    goToShop = new GoToShop(page);
    search = new Search(page);
    
})

test('Wyświetlenie rezultatów wyszukiwania dla produktu "spodnie"', async ({ page }) => {
  //given
  await goToShop.goToDecathlon();
  await goToShop.allowCookies();
  //when
  await search.searchFrase('spodnie');
  //then
  await expect(page.getByLabel('Product list navigation')).toBeVisible();
});