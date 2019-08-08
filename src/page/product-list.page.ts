import { $, ElementFinder } from 'protractor';
import { waitIsClickable } from '../utils/index';
export class ProductList {
  private  addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToProductAddedModal(): Promise<void> {
    await waitIsClickable(this.addToCartButton);
    await this.addToCartButton.click();
  }
}
