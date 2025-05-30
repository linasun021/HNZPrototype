// tests/login.spec.ts
import { test, expect } from "./BaseTests";
import { LoginPage, HomePage } from "../model/pages";

const validEmail = "testuser@example.com";
const validPassword = "test1234";

// Basic login test
// Make sure the test user exists beforehand in the syste

/* test("User can log in with valid credentials", async ({ open }) => {
  const userLabel = await open(LoginPage)
    .then((_) => _.navigateToSignupLogin())
    .then((_) => _.login(validEmail, validPassword))
    .then((homePage) => homePage.getLoggedInUserLabel("testuser"));
  //await expect(userLabel).toBeVisible();
}); */
