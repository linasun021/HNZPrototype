import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [["list"], ["allure-playwright"]],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: "https://www.automationexercise.com",
    trace: "on-first-retry",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
