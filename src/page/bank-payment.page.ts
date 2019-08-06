import { $, ElementFinder } from 'protractor';

export class BankPayment {
  private confirmMyOrderButton: ElementFinder;

  constructor () {
    this.confirmMyOrderButton = $('#center_column > form > p > button > span');
  }

  public async goToOrderSummary(): Promise<void> {
    await this.confirmMyOrderButton.click();
  }
}
