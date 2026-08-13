import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutStepTwoPage extends BasePage {

    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        super(page);

this.finishButton = this.page.locator('[data-test="finish"]');     
   this.cancelButton = this.page.locator('[data-test="cancel"]');
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }

}