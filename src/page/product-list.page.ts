import { $, ElementFinder } from 'protractor';
import { ExplicitWaits } from '../utils/index';
export class ProductList {
  private explicitWaits: ExplicitWaits = new ExplicitWaits();
  private  addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToProductAddedModal(): Promise<void> {
    await this.explicitWaits.waitIsClickable(this.addToCartButton);
    await this.addToCartButton.click();
  }
}
