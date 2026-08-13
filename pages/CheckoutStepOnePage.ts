import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CheckoutUser } from '../test-data/checkoutData';

export class CheckoutStepOnePage extends BasePage {

    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        super(page);

        this.firstNameInput = this.page.locator('[data-test="firstName"]');

        this.lastNameInput = this.page.locator('[data-test="lastName"]');

        this.postalCodeInput = this.page.locator('[data-test="postalCode"]');

        this.continueButton = this.page.locator('[data-test="continue"]');

       this.cancelButton = this.page.locator('[data-test="cancel"]');    }

    async fillCheckoutInformation(user: CheckoutUser) {

        await this.firstNameInput.fill(user.firstName);

        await this.lastNameInput.fill(user.lastName);

        await this.postalCodeInput.fill(user.postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }
}