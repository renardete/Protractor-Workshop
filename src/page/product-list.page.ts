import { $, ElementFinder } from 'protractor';

export class ProductList {
  public addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToProductAddedModal(): Promise<void> {
    await this.addToCartButton.click();
  }
}
