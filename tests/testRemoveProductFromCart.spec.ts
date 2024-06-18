import { test, expect } from '@playwright/test';

import { GoToShop } from '../pageObjects/goToShop';
import { MenuPage } from '../pageObjects/menuPage';
import { ProductsPage } from '../pageObjects/productsPage';
import { ShoppingCart } from '../pageObjects/shoppingCart';

let shop: GoToShop;
let menu: MenuPage;
let product: ProductsPage;
let cart: ShoppingCart;

test.beforeEach(async ({ page }) => {
    shop = new GoToShop(page);
    menu = new MenuPage(page);
    product = new ProductsPage(page);
    cart = new ShoppingCart(page);
})

test('Sprawdzenie usunięcia produktu do koszyka', async ({ page }) => {
    //given
    await shop.goToDecathlon();
    await shop.allowCookies();
    await menu.goToMenu('Kobieta','Polary damskie','Polary, swetry damskie');
    await product.choseProduct('SIMOND Sweter wspinaczkowy','Sweter wspinaczkowy damski','XL');
    await cart.addToCart();
    await cart.addToCartSuccess();
    //when
    await cart.viewCart();
    await cart.removeFromCart();
    //then
    await cart.emptyCart();
    
});