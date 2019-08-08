import { $, ElementFinder } from 'protractor';
import { waitIsClickable } from '../utils/index';

export class ProductAddedModal {
  public proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToSummaryStep(): Promise<void> {
    await waitIsClickable(this.proceedToCheckoutButton);
    await this.proceedToCheckoutButton.click();
  }

}
