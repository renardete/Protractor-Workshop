import { browser, ExpectedConditions } from 'protractor';

export class ExplicitWaits {

  constructor() {
  }
  public async waitIsClickable(selector): Promise<void> {
    await browser.wait(ExpectedConditions
      .elementToBeClickable(selector));
  }
}
