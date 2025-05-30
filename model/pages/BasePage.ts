import { Page, Locator } from "@playwright/test";
import { LoginPage, HomePage } from "model/pages";
/* import LoginPage from "./LoginPage";
import HomePage from "./HomePage"; */
/* import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";

import ContactUsPage from "./ContactUsPage";
import TestCasesPage from "./TestCasesPage";
import ApiPage from "./ApiPage";
import VideoTutorialsPage from "./VideoTutorialsPage"; */

export default abstract class BasePage {
  protected page: Page;
  protected navHome: Locator;
  protected navProducts: Locator;
  protected navCart: Locator;
  protected navSignupLogin: Locator;
  protected navContactUs: Locator;
  protected navTestCases: Locator;
  protected navApiTesting: Locator;
  protected navVideoTutorials: Locator;
  protected navLogout: Locator;
  protected navDeleteAccount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navHome = page.locator('a[href="/"]');
    this.navProducts = page.locator('a[href="/products"]');
    this.navCart = page.locator('a[href="/view_cart"]');
    this.navSignupLogin = page.locator('a[href="/login"]');
    this.navContactUs = page.locator('a[href="/contact_us"]');
    this.navTestCases = page.locator('a[href="/test_cases"]');
    this.navApiTesting = page.locator('a[href="/api_list"]');
    this.navVideoTutorials = page.locator('a[href="/video_tutorials"]');
    this.navLogout = page.locator('a[href="/logout"]');
    this.navDeleteAccount = page.locator('a[href="/delete_account"]');
  }

  abstract init(): Promise<this>;

  async navigateToHome(): Promise<HomePage> {
    await this.navHome.click();
    return await new HomePage(this.page).init();
  }

  async navigateToSignupLogin(): Promise<LoginPage> {
    await this.navSignupLogin.click();
    return await new LoginPage(this.page).init();
  }

  /* async navigateToProducts(): Promise<ProductsPage> {
    await this.navProducts.click();
    return await new ProductsPage(this.page).init();
  }

  async navigateToCart(): Promise<CartPage> {
    await this.navCart.click();
    return await new CartPage(this.page).init();
  }



  async navigateToContactUs(): Promise<ContactUsPage> {
    await this.navContactUs.click();
    return await new ContactUsPage(this.page).init();
  }

  async navigateToTestCases(): Promise<TestCasesPage> {
    await this.navTestCases.click();
    return await new TestCasesPage(this.page).init();
  }

  async navigateToApiTesting(): Promise<ApiPage> {
    await this.navApiTesting.click();
    return await new ApiPage(this.page).init();
  }

  async navigateToVideoTutorials(): Promise<VideoTutorialsPage> {
    await this.navVideoTutorials.click();
    return await new VideoTutorialsPage(this.page).init();
  }

  async logoutIfVisible(): Promise<void> {
    if (await this.navLogout.isVisible()) {
      await this.navLogout.click();
    }
  }

  async deleteAccountIfVisible(): Promise<void> {
    if (await this.navDeleteAccount.isVisible()) {
      await this.navDeleteAccount.click();
    }
  } */
}
