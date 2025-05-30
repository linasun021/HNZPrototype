import { Locator } from "@playwright/test";
import BasePage from "./BasePage";
import { AccountCreatedPage } from "model/pages";

export default class SignupPage extends BasePage {
  private titleMr: Locator = this.page.locator("#id_gender1");
  private passwordInput: Locator = this.page.locator("#password");
  private daysDropdown: Locator = this.page.locator("#days");
  private monthsDropdown: Locator = this.page.locator("#months");
  private yearsDropdown: Locator = this.page.locator("#years");
  private newsletterCheckbox: Locator = this.page.locator("#newsletter");
  private offersCheckbox: Locator = this.page.locator("#optin");
  private firstNameInput: Locator = this.page.locator("#first_name");
  private lastNameInput: Locator = this.page.locator("#last_name");
  private companyInput: Locator = this.page.locator("#company");
  private address1Input: Locator = this.page.locator("#address1");
  private address2Input: Locator = this.page.locator("#address2");
  private countryDropdown: Locator = this.page.locator("#country");
  private stateInput: Locator = this.page.locator("#state");
  private cityInput: Locator = this.page.locator("#city");
  private zipcodeInput: Locator = this.page.locator("#zipcode");
  private mobileInput: Locator = this.page.locator("#mobile_number");
  private createAccountButton: Locator = this.page.locator('[data-qa="create-account"]');

  async init(): Promise<this> {
    return this;
  }

  async fillAccountInformation(data: any): Promise<SignupPage> {
    await this.titleMr.check();
    await this.passwordInput.fill(data.password);
    await this.daysDropdown.selectOption(data.birthDay);
    await this.monthsDropdown.selectOption(data.birthMonth);
    await this.yearsDropdown.selectOption(data.birthYear);
    await this.newsletterCheckbox.check();
    await this.offersCheckbox.check();
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.companyInput.fill(data.company);
    await this.address1Input.fill(data.address1);
    await this.address2Input.fill(data.address2);
    await this.countryDropdown.selectOption({ label: data.country });
    await this.stateInput.fill(data.state);
    await this.cityInput.fill(data.city);
    await this.zipcodeInput.fill(data.zipcode);
    await this.mobileInput.fill(data.mobile);
    return this;
  }

  async submitAccount(): Promise<AccountCreatedPage> {
    await this.createAccountButton.click();
    return await new AccountCreatedPage(this.page).init();
  }
}
