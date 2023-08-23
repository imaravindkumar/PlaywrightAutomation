import { test, expect } from "@playwright/test";
import {
    openFlow,
    fillAgeAndPincode,
    fillPhoneNumberAndName,
    enterOtpAndSubmit,
} from "../../../pages/common";
import {
    continueButton,
    heading,
    calculatePremiumButton,
    ageIsRequiredText,
    pincodeIsRequired,
    defaultCoverAmount,
    oneYearPremiumXpath,
    twoYearPremiumXpath,
    firstSummaryCardPremiumXpath,
    totalPremiumXpath,
    protectorRider,
    buyThisButton,
    popUpPremiumXpath,
    confirmAndBuyButton,
    dontWorrySpamMsg,
    sendOtpButton,
    inputOTP,
    otpIsRequired,
    secondSummaryPremiumXpath,
} from "../../../pages/Health/ergo/xpaths.spec"; 

test.describe("optimaRestoreFlow", async () => {
    let oneYearPremium;
    let twoYearPremium;
    let totalPremium;
    let firstSummaryCardPremium;
    let page; //create variable with page
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage(); //Create a new Page instance
    });
    test.afterAll(async ({ browser }) => {
        page.close();
    });
    test("Go to app/fq and enter basic details and verify error messages", async () => {
        await openFlow({ page });
        await expect(page.getByText("we are just a click away.")).toHaveText(
            "If there’s anything bothering you, we are just a click away.",
        );

        await page.locator("").screenshot;
        await expect(page.getByText("Talk to us")).toHaveText(
            "Talk to us by pressing the help icon in the top-right corner.",
        );
        await page.locator(continueButton).click();
        await expect(page.locator(heading)).toHaveText("Tell us about you");
        await page.locator(calculatePremiumButton).click();
        await expect(page.locator(ageIsRequiredText)).toHaveText(
            "Your age is a required field",
        );

        expect(page.locator(pincodeIsRequired)).toHaveText("Pin code is required");

        await fillAgeAndPincode({ page });
    });
    test("verify and check the cover amount, premium and continue", async () => {
        expect(await page.locator(defaultCoverAmount)).toContainText("10 L");
        await page.locator("[id='3']").click();
        await page.locator(defaultCoverAmount).waitFor();
        const coverAmountDisplayed = await page
            .locator(defaultCoverAmount)
            .textContent();
        expect(page.locator("[id='3']")).toHaveText(coverAmountDisplayed);
        await page.locator("text=Calculate Premium").click();

        oneYearPremium = await page.locator(oneYearPremiumXpath).textContent();
        twoYearPremium = await page.locator(twoYearPremiumXpath).textContent();
        firstSummaryCardPremium = await page
            .locator(firstSummaryCardPremiumXpath)
            .textContent();

        totalPremium = await page.locator(totalPremiumXpath).textContent();
        await page.locator(protectorRider).click();
        totalPremium = await page.locator(totalPremiumXpath).textContent();
        oneYearPremium = await page.locator(oneYearPremiumXpath).textContent();
        firstSummaryCardPremium = await page
            .locator(firstSummaryCardPremiumXpath)
            .textContent();
        ////div[@class="MuiGrid-root MuiGrid-container"]//div//p[contains(text(), 'Premium')]/..//span[contains(text(), '₹')]
        // page.pause();
        // console.log("totalPremium", totalPremium);
        // console.log("oneYearPremium", oneYearPremium.trim());
        expect(totalPremium).toMatch(oneYearPremium?.trim());
        expect(totalPremium).toMatch(firstSummaryCardPremium?.trim());
        await page.locator(buyThisButton).click();
        let popUpPremium = await page.locator(popUpPremiumXpath).textContent();
        expect(firstSummaryCardPremium).toMatch(popUpPremium);

        await page.locator(confirmAndBuyButton).click();
    });
    test("fill the phone number and enter the otp and continue", async () => {
        await fillPhoneNumberAndName({ page });
        expect(page.locator(dontWorrySpamMsg)).toBeVisible();
        await page.locator(sendOtpButton).click();
        await page.locator(inputOTP).click();
        await page.getByText("OTP", { exact: true }).click();
        expect(page.locator(otpIsRequired)).toBeVisible();
        await enterOtpAndSubmit({ page });
    });

    test("verify the premium on summary page", async () => {
       // expect(page.locator("h4")).toHaveText("You're almost done");
        const secondSummaryPremium = await page
            .locator(secondSummaryPremiumXpath)
            .textContent();
        expect(firstSummaryCardPremium).toMatch(secondSummaryPremium);
    });

    
});