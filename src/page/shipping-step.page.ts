import { $, ElementFinder } from 'protractor';

export class AddresStep {
  private proceedToCheckoutButton: ElementFinder;
  private acceptAgreementCheckBox: ElementFinder;

  constructor () {
    this.acceptAgreementCheckBox = $('#cgv')
    this.proceedToCheckoutButton = $('#form > p > button > span');
  }

  public async acceptAgrements(): Promise<void> {
      await this.acceptAgreementCheckBox.click();
  }
  public async goToShippingStep(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
