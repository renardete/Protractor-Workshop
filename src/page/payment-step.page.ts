import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private payByWireBackButton: ElementFinder;

  constructor () {
    this.payByWireBackButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBankPayment(): Promise<void> {
    await this.payByWireBackButton.click();
  }
}
