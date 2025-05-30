import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  private welcomeBanner: Locator = this.page.locator("section#slider");

  async init(): Promise<this> {
    return this;
  }

  getWelcomeBanner(): Locator {
    return this.welcomeBanner;
  }

  getLoggedInUserLabel(username: string): Locator {
    return this.page.locator("a", { hasText: `Logged in as ${username}` });
  }
}
