

import { checkoutUser } from '../../test-data/checkoutData';
import { test, expect } from '../fixtures/baseTest';


test('User can open cart', async ({ inventoryPage, cartPage }) => {

    
    await inventoryPage.openCart();

await expect(cartPage.checkoutButton).toBeVisible();
});



test('User can add backpack to cart', async ({ inventoryPage, cartPage }) => {

   

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

     await cartPage.expectProductInCart("Sauce Labs Backpack");


});

test('should continue shopping', async ({ inventoryPage, cartPage }) => {


    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await cartPage.continueShopping();

    await expect(inventoryPage.currentPage).toHaveURL(/inventory.html/);

});

test ('User can complete checkout ', async ({inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage})=>{
  
    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();
    await cartPage.checkout();
    await expect(checkoutStepOnePage.currentPage).toHaveURL(/checkout-step-one.html/);
    await checkoutStepOnePage.fillCheckoutInformation(checkoutUser
);
    await checkoutStepOnePage.clickContinue();
    await expect(checkoutStepTwoPage.currentPage).toHaveURL(/checkout-step-two.html/);

    await checkoutStepTwoPage.clickFinishButton();
    await expect(checkoutCompletePage.currentPage).toHaveURL(/checkout-complete.html/);
    
   
});

test('should complete checkout successfully', async ({
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage
}) => {

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await cartPage.checkout();

    await expect(checkoutStepOnePage.currentPage)
        .toHaveURL(/checkout-step-one\.html/);

    await checkoutStepOnePage.fillCheckoutInformation(checkoutUser);

    await checkoutStepOnePage.clickContinue();

    await expect(checkoutStepTwoPage.currentPage)
        .toHaveURL(/checkout-step-two\.html/);

    await checkoutStepTwoPage.clickFinishButton();

    await expect(checkoutCompletePage.currentPage)
        .toHaveURL(/checkout-complete\.html/);

    await checkoutCompletePage.expectOrderCompleted();
});