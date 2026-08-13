import { test as base } from '@playwright/test';

import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

type MyFixtures = {
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutStepOnePage: CheckoutStepOnePage;
    checkoutStepTwoPage: CheckoutStepTwoPage;
    checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<MyFixtures>({

    inventoryPage: async ({ page }, use) => {

        const inventoryPage = new InventoryPage(page);

        await inventoryPage.open();

        await use(inventoryPage);
    },

    cartPage: async ({ page }, use) => {

        const cartPage = new CartPage(page);

        await use(cartPage);
    },

    checkoutStepOnePage: async ({ page }, use) => {

        const checkoutStepOnePage = new CheckoutStepOnePage(page);

        await use(checkoutStepOnePage);
    },

    checkoutStepTwoPage: async ({ page }, use) => {

        const checkoutStepTwoPage = new CheckoutStepTwoPage(page);

        await use(checkoutStepTwoPage);
    },

    checkoutCompletePage: async ({ page }, use) => {

        const checkoutCompletePage = new CheckoutCompletePage(page);

        await use(checkoutCompletePage);
    }

});

export { expect } from '@playwright/test';