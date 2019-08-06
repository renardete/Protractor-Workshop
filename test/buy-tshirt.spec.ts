import { browser, ExpectedConditions } from 'protractor';
import {
  MenuContentPage, ProductList, ProductAddedModal,
  SummaryStep, SignInStep, AddresStep, ShippingStep,
  BankPayment, PaymentStep, OrderSummary
} from '../src/page';

describe('Given the automation web UI is available', () => {

  describe('when the user is going to buy a t-shirt', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductList = new ProductList();
    const productAddedModal: ProductAddedModal = new ProductAddedModal();
    const summaryStep: SummaryStep = new SummaryStep();
    const signInStep: SignInStep = new SignInStep();
    const addresStep: AddresStep = new AddresStep();
    const shippingStep: ShippingStep = new ShippingStep();
    const paymentStep: PaymentStep = new PaymentStep();
    const bankPayment: BankPayment = new BankPayment();
    const orderSummary: OrderSummary = new OrderSummary();

    it('then should be bought a t-shirt', async () => {
      await browser.get('http://automationpractice.com/');
      await menuContentPage.goToTShirtMenu();
      await productListPage.goToProductAddedModal();
      await browser.wait(ExpectedConditions
        .elementToBeClickable(productAddedModal.proceedToCheckoutButton));
      await productAddedModal.goToSummaryStep();
      await summaryStep.goToSigninStep();

      await signInStep.insertUserEmail('aperdomobo@gmail.com');
      await signInStep.insertUserPasswd('WorkshopProtractor');
      await signInStep.goToAddresStep();

      await addresStep.goToShippingStep();

      await shippingStep.acceptAgrements();

      await shippingStep.goToPaymentStep();
      await paymentStep.goToBankPayment();
      await bankPayment.goToOrderSummary();

      await expect(await orderSummary.getOrderSummaryReportTitle())
        .toBe('Your order on My Store is complete.');
    });
  });
});
