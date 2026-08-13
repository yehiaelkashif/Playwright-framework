import { Locator, Page ,expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly productName: Locator;    

    constructor(page: Page) {
        super(page);

        this.checkoutButton = this.page.locator('#checkout');
        this.continueShoppingButton = this.page.locator('#continue-shopping');
         this.productName = this.page.locator( '[data-test="inventory-item-name"]');
         this.productName.getByText
    }


    async checkout() {
        await this.checkoutButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

async expectProductInCart(productName: string) {
    await expect(this.productName).toHaveText(productName);
}

}
