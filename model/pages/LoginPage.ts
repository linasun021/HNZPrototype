import { Locator } from "@playwright/test";
import BasePage from "./BasePage";
import { HomePage, SignupPage } from "model/pages";
/* import BasePage from "./BasePage";
import HomePage from "./HomePage"; */

export default class LoginPage extends BasePage {
  private emailInput: Locator = this.page.locator('[data-qa="login-email"]');
  private passwordInput: Locator = this.page.locator('[data-qa="login-password"]');
  private loginButton: Locator = this.page.locator('[data-qa="login-button"]');
  private signupNameInput: Locator = this.page.locator('[data-qa="signup-name"]');
  private signupEmailInput: Locator = this.page.locator('[data-qa="signup-email"]');
  private signupButton: Locator = this.page.locator('[data-qa="signup-button"]');
  private signupHeader: Locator = this.page.locator("h2", { hasText: "New User Signup!" });

  async init(): Promise<this> {
    return this;
  }

  async login(email: string, password: string): Promise<HomePage> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    return await new HomePage(this.page).init();
  }

  async fillSignupForm(name: string, email: string): Promise<LoginPage> {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    return this;
  }

  async submitSignup(): Promise<SignupPage> {
    await this.signupButton.click();
    return await new SignupPage(this.page).init();
  }

  getEmailInput(): Locator {
    return this.emailInput;
  }

  getPasswordInput(): Locator {
    return this.passwordInput;
  }

  getLoginButton(): Locator {
    return this.loginButton;
  }
}
