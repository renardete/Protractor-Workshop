import { browser, ExpectedConditions } from 'protractor';

export  async function waitIsClickable(selector) {
  await browser.wait(ExpectedConditions
    .elementToBeClickable(selector));
}
