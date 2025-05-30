import { Locator } from "@playwright/test";
import BasePage from "./BasePage";
import { HomePage } from "model/pages";

export default class AccountCreatedPage extends BasePage {
  private accountCreatedMsg: Locator = this.page
    .locator("b")
    .filter({ hasText: "ACCOUNT CREATED!" });
  private continueButton: Locator = this.page.locator('[data-qa="continue-button"]');

  async init(): Promise<this> {
    return this;
  }

  getAccountCreatedMessage(): Locator {
    return this.accountCreatedMsg;
  }

  async clickContinue(): Promise<HomePage> {
    await this.continueButton.click();
    return await new HomePage(this.page).init();
  }
}
