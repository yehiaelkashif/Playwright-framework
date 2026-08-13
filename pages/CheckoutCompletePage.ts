import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutCompletePage extends BasePage {

    readonly thankYouMessage: Locator;
    readonly generatePdfButton: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        super(page);

this.thankYouMessage = this.page.locator('[data-test="complete-header"]');

        this.generatePdfButton = this.page.getByTestId('Generate PDF order');

        this.backHomeButton = this.page.getByTestId('back-to-products');
    }

    async clickGeneratePdfButton() {
        await this.generatePdfButton.click();
    }

    async clickBackHomeButton() {
        await this.backHomeButton.click();
    }

    async expectOrderCompleted() {
     await expect(this.thankYouMessage)
        .toHaveText('Thank you for your order!');
    }
}