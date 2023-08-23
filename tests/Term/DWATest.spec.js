const { test, expect } = require('@playwright/test');
const { gotoURL,
	clickonElement,
	sendValuesToField, } = require('../../commonFunctionalLibrary/functionalLibrary');

var DWAURL = 'https://stag-app.joinditto.in/fq';

test.describe('Test', async () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

test('DWA Title Verification', async () => {

    await gotoURL(page);
  
    // Expect a title "to contain" a substring.
    const pageTitle = page.title();
    console.log('Page Title is', pageTitle);

    await expect(page).toHaveTitle('Ditto | Insurance made simple');

    //Validate URL
    const pageURL = page.url();
    console.log('Page URL is', pageURL);
    await expect(page).toHaveURL(DWAURL);

  });

  test('ICICI Term FLow: Tell us about you', async () => {
   // await page.goto(DWAURL);
  //  await gotoURL(page);
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

    await page.click("//span[contains(text(),'Next')]");

    await page.click("//span[contains(text(),'No')]");

    await page.click("//span[contains(text(),'Next')]");

    await page.click("//span[contains(text(),'Next')]");

    await page.click("//div[text()='Regular Pay']");

    await page.click("//span[contains(text(),'Next')]"); 

    const addonZero = await page.locator("(//span[text()='Life stage benefit'])[1]").textContent();
    console.log("The Add On is :: "+addonZero);

    await page.click("//span[contains(text(),'Next')]");

    const addonOne = await page.locator("(//span[text()='Terminal illness'])[1]").textContent();
    console.log("The Add On is :: "+addonOne);
    await page.click("//span[contains(text(),'Next')]");

    const addoTwo = await page.locator("(//span[text()='Waiver of premium'])[1]").textContent();
    console.log("The Add On is :: "+addoTwo);

    await page.click("//span[contains(text(),'Next')]");

    const addoThree = await page.locator("//span[text()='Accidental cover']").textContent();
    console.log("The Add On is :: "+addoThree);

    await page.click("//span[contains(text(),'Next')]");

    
    const addonFour = await page.locator("//span[text()='Critical illness']").textContent();
    console.log("The Add On is :: "+addonFour);

    await page.click("//span[contains(text(),'Next')]");

    await page.click("//span[text()='Buy this']"); 

    await page.click("//span[text()='Confirm and buy']"); 
    
    await page.fill("//input[@name='fullName']","Test Policy");

    await page.fill("//input[@name='mobile']","9999999991");

    await page.click("//span[text()='Send OTP']");
    
    // await page.fill("//input[@name='otp']","123456");

    // await page.click("//span[text()='Submit']");

    
  });
 /* test('Proposal Form', async () => {

    await page.click("//span[text()='Start']");

    // await textArea.focus();
    // await screen.keyboard.press("Meta+A");
    // await screen.keyboard.press("Backspace");

    page.locator("//input[@name='firstName']").selecttext();
    page.keyboard().press("Backspace");

    page.locator("//input[@name='firstName']").fill("TestPolicy PolicyPolicy");
    page.locator("//input[@name='lastName']").fill("PolicyPolicy");

    const editableDob = page.locator("//input[@name='dob']").isEditable();
    console.log("The Dob editable value :: "+editableDob);
    if(editableDob){
      console.log("The DOB is Not Editable it is Correct");
    }
    else{
      console.log("The DOB is Editable it is Incorrect");
    }

    page.locator("//input[@name='email']").fill("PolicyPolicy1234@gmail.com");

    page.click("//div[@id='select-education']");

    page.click("");

  }); */

});
  
