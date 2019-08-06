import { $, ElementFinder } from 'protractor';

export class ProductAddedModal {
  public proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToSummaryStep(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }

}
