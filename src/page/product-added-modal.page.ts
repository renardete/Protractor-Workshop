import { $, ElementFinder } from 'protractor';
import { ExplicitWaits } from '../utils/index';

export class ProductAddedModal {
  private explicitWaits: ExplicitWaits = new ExplicitWaits();
  public proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToSummaryStep(): Promise<void> {
    await this.explicitWaits.waitIsClickable(this.proceedToCheckoutButton);
    await this.proceedToCheckoutButton.click();
  }

}
