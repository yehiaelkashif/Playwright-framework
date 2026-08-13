import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

    readonly cartIcon: Locator;
    readonly addBackpackButton: Locator;
    readonly shoppingCartBadge: Locator;

    constructor(page: Page) {
        super(page);

        this.cartIcon = this.page.locator('.shopping_cart_link');

        this.addBackpackButton = this.page.locator(
            '#add-to-cart-sauce-labs-backpack'
        );

        this.shoppingCartBadge = this.page.locator(
            '.shopping_cart_badge'
        );
    }

    
    async open() {
    await this.currentPage.goto('/inventory.html');
}

    async openCart() {
        await this.cartIcon.click();
    }

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

}