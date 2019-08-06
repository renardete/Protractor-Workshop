import { $, ElementFinder } from 'protractor';

export class SignInStep {
  private userEmailTextBox: ElementFinder;
  private userPasswdTextBox: ElementFinder;
  private submitLogInButton: ElementFinder;

  constructor() {
    this.userEmailTextBox = $('#email');
    this.userPasswdTextBox = $('#passwd');
    this.submitLogInButton = $('#SubmitLogin > span');
  }

  public async insertUserEmail(userEmail): Promise<void> {
    await this.userEmailTextBox.sendKeys(userEmail);
  }
  public async insertUserPasswd(userPasswd): Promise<void> {
    await this.userPasswdTextBox.sendKeys(userPasswd);
  }
  public async goToAddresStep(): Promise<void> {
    await this.submitLogInButton.click();
  }

}
