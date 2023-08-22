import { stagingOne } from "../uitlities/mainData";

const { test, expect } = require("@playwright/test");

const openFlow = async ({ page }) => {
	await page.goto(stagingOne);
	await page.locator("text=Optima Restore").click();
	await page.locator("//span[contains(text(), 'For self')]").click();
};

const fillAgeAndPincode = async ({ page }) => {
	await page.locator("#text-input-age").fill("48");
	await page.locator("#text-input-pincode").type("500010", { delay: 100 });
};

const fillPhoneNumberAndName = async ({ page }) => {
	await page.locator("#text-input-fullName").fill("Testing Engineer");
	await page.locator("#text-input-mobile").fill("9999999991");
};

const enterOtpAndSubmit = async ({ page }) => {
	await page.locator("#text-input-otp").fill("123456");
	await page.locator("//span[contains(text(), 'Submit')]").click();
};

const commonErgoFlowForIndividual = () => {
	// @ts-check
};

const beforeAllExecution = () => {
	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage(); //Create a new Page instance
	});
}

export {
	fillAgeAndPincode,
	fillPhoneNumberAndName,
	enterOtpAndSubmit,
	openFlow,
	beforeAllExecution,
};
