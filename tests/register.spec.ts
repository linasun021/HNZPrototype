import { test, expect } from "./BaseTests";
import { HomePage, AccountCreatedPage, LoginPage, SignupPage } from "../model/pages";
import { allure } from "allure-playwright";
/* import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AccountCreatedPage from "../pages/AccountCreatedPage"; */

const userData = {
  name: "LinaTestUser",
  email: `lina_${Date.now()}@example.com`,
  password: "Test@123",
  birthDay: "1",
  birthMonth: "January",
  birthYear: "1990",
  firstName: "Lina",
  lastName: "Sun",
  company: "TestCompany",
  address1: "123 Main St",
  address2: "Suite 456",
  country: "Canada",
  state: "Auckland",
  city: "Auckland",
  zipcode: "1001",
  mobile: "0211234567",
};

test("User can register account successfully[Fluent style]", async ({ open }) => {
  const accountCreatedPage = await open(LoginPage)
    .then((_) => _.navigateToSignupLogin())
    .then((_) => _.fillSignupForm(userData.name, userData.email))
    .then((_) => _.submitSignup())
    .then((signupPage) => signupPage.fillAccountInformation(userData))
    .then((signupPage) => signupPage.submitAccount());
  await expect(accountCreatedPage.getAccountCreatedMessage()).toBeVisible();
});

test("User can register account successfully[BDD style]", async ({ open }) => {
  let homePage: HomePage;
  let accountCreatedPage: AccountCreatedPage;

  await test.step("Given the user is on the home page", async () => {
    homePage = await open(HomePage);
  });

  await test.step("When the user register a new account", async () => {
    accountCreatedPage = await homePage
      .navigateToSignupLogin()
      .then((loginPage) => loginPage.fillSignupForm("LinaBDD", `lina${Date.now()}@mail.com`))
      .then((loginPage) => loginPage.submitSignup())
      .then((signupPage) => signupPage.fillAccountInformation(userData))
      .then((signupPage) => signupPage.submitAccount());
  });

  await test.step("Then the account has been created successfully", async () => {
    await expect(accountCreatedPage.getAccountCreatedMessage()).toBeVisible();
  });
});
