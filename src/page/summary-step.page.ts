import { $, ElementFinder } from 'protractor';

export class SummaryStep {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('.cart_navigation span');
  }

  public async goToSigninStep(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
