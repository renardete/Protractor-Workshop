import { $, browser } from 'protractor';
import { MenuContentPage, ProductList, ProductAddedModal, SummaryStep, SignInStep, AddresStep } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductList = new ProductList();
  const productAddedModal: ProductAddedModal = new ProductAddedModal();
  const summaryStep: SummaryStep = new SummaryStep();
  const signInStep: SignInStep = new SignInStep();
  const addresStep: AddresStep = new AddresStep();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToProductAddedModal();
    await(browser.sleep(3000));
    await productAddedModal.goToSummaryStep();
    await(browser.sleep(3000));
    await summaryStep.goToSigninStep();
    await(browser.sleep(3000));

    await signInStep.insertUserEmail('aperdomobo@gmail.com');
    await signInStep.insertUserPasswd('WorkshopProtractor');
    await signInStep.goToAddresStep();
    await(browser.sleep(3000));

    await addresStep.goToShippingStep();
    await(browser.sleep(3000));

    await $('#cgv').click();
    await(browser.sleep(3000));

    await $('#form > p > button > span').click();
    await(browser.sleep(3000));
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await(browser.sleep(3000));
    await $('#cart_navigation > button > span').click();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
