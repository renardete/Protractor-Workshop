import { $, ElementFinder } from 'protractor';

export class AddresStep {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('#center_column > form > p > button > span');
  }

  public async goToShippingStep(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
