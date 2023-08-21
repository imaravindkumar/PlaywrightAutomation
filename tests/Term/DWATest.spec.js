const { test, expect } = require('@playwright/test');
//import { FunctionalLibrary } from '../commonFunctionalLibrary/FunctionalLibrary';
//const functionmethod = new FunctionalLibrary(page);


var DWAURL = 'https://stag-app.joinditto.in/fq';

test('DWA Title Verification', async ({ page }) => {
    await page.goto(DWAURL);
  
    // Expect a title "to contain" a substring.
    const pageTitle = page.title();
    console.log('Page Title is', pageTitle);

    await expect(page).toHaveTitle('Ditto | Insurance made simple');

    //Validate URL
    const pageURL = page.url();
    console.log('Page URL is', pageURL);

    await expect(page).toHaveURL(DWAURL);

  });
  test('ICICI Term FLow: Tell us about you', async ({ page }) => {
    await page.goto(DWAURL);
    await page.locator("//span[contains(text(),'ICICI iProtect Smart')]").click();
  
    await page.click("//span[contains(text(),'Next')]");

    const genderFieldMandatory = await page.locator("(//p[@class='MuiFormHelperText-root Mui-error'][normalize-space()='Required'])[1]");
    await expect(genderFieldMandatory).toBeVisible();
    console.log("Gender is Mandatory");

    const dobFieldMandatory = await page.locator("//p[@id='date-picker-dialog-dob-helper-text']");
    await expect(dobFieldMandatory).toBeVisible();
    console.log("DOB is Mandatory");


    const smokeFieldMandatory = await page.locator("(//p[@class='MuiFormHelperText-root Mui-error'][normalize-space()='Required'])[2]");
    await expect(smokeFieldMandatory).toBeVisible();
    console.log("Smoke Field is Mandatory");

    const genderlistValue = await page.$$("(//span[@class='MuiButton-startIcon MuiButton-iconSizeLarge']/..)");

   for(const value of genderlistValue ){
        const genderValues = await value.textContent();
        console.log(genderValues);

        if(genderValues.match("Others")){
            await value.click();
        }
   }

    await page.click("//span[normalize-space()='Male']");

    await page.fill("//input[@id='date-picker-dialog-dob']","01/01/2000");

    await page.click("//span[contains(text(),'No')]");

    await page.click("//span[contains(text(),'Next')]");


    // await functionmethod.clickonElement("//span[contains(text(),'ICICI iProtect Smart')]");
    // await functionmethod.clickonElement("//span[contains(text(),'Male')]");
    // await functionmethod.sendValuesToField("//input[@name='dob']","01/01/2000");
    // await functionmethod.clickonElement("//span[contains(text(),'No')]");
    // await functionmethod.clickonElement("//span[contains(text(),'Next')]");


    await page.click("//span[contains(text(),'Next')]");

    const pincodeMandatory = await page.locator("//p[@id='text-input-pincode-helper-text']");
    await expect(pincodeMandatory).toBeVisible();
    console.log("Pincode is Mandatory");

    const annualIncomeMandatory = await page.locator("//p[@id='text-input-annInc-helper-text']");
    await expect(annualIncomeMandatory).toBeVisible();
    console.log("Annual Income is Mandatory");


    const monthlyExpensesMandatory = await page.locator("//p[@id='text-input-mExpenses-helper-text']");
    await expect(monthlyExpensesMandatory).toBeVisible();
    console.log("Monthly Expenses Field is Mandatory");

    const diabetesFieldMandatory = await page.locator("//p[@class='MuiFormHelperText-root Mui-error']");
    await expect(diabetesFieldMandatory).toBeVisible();
    console.log("Diabetes Field is Mandatory");

    await page.fill("//input[@id='text-input-pincode']","560001");

    await page.fill("//input[@id='text-input-annInc']","1000000");

    await page.fill("//input[@id='text-input-mExpenses']","25000");

    await page.click("//span[contains(text(),'No')]");

    await page.click("//span[contains(text(),'Next')]");

    await page.click("//span[contains(text(),'Next')]");

    

  });

  
