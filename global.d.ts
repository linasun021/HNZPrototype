import type { AllureReporter } from "allure-playwright";

declare module "@playwright/test" {
  interface TestInfo {
    allure: AllureReporter;
  }
}
