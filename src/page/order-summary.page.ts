import { $, ElementFinder } from 'protractor';

export class OrderSummary {
  private orderSummaryTitle: ElementFinder;

  constructor () {
    this.orderSummaryTitle = $('#center_column > div > p > strong');
  }

  public async getOrderSummaryReportTitle(): Promise<String> {
    const title = await this.orderSummaryTitle.getText();
    return title;
  }
}
