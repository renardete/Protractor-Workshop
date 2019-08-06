import { $, ElementFinder } from 'protractor';

export class ShippingStep {
  private proceedToCheckoutButton: ElementFinder;
  private acceptAgreementCheckBox: ElementFinder;

  constructor () {
    this.acceptAgreementCheckBox = $('#cgv');
    this.proceedToCheckoutButton = $('#form > p > button > span');
  }

  public async acceptAgrements(): Promise<void> {
    await this.acceptAgreementCheckBox.click();
  }
  public async goToPaymentStep(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
