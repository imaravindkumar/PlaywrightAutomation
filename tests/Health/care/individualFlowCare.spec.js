const { test, expect } = require('@playwright/test');
const { clickOnElement, urlNavigation, getText, validateText, sendValues, randomNumber, randomListClick, premiumValidation, otpValidation, getAttributeValues, checkElementIsDisabled, compareList, getListValue, comapareList, selectValueFromDropDown, randomEmailGenerator, splitString, clickonCheckBoxList, getCurrentDate, randomTextGenerator, pageTitle, pageURL } = require('../../../fixtures/common');
const { insuranceselection, insurancepolicyfor, ageMandatory, pincodeMandatory, coverAmount, pincode, yourAge, oneYearPremium, premiumAmount, premiumYear, twoYearPremium, threeYearPremium, totalPremiumAmount, fieldVerification, cumulativeBonusCheckBoxXpath, pincodeXpath, premiumListXpath, alertMessage } = require('../../../pages/Health/care/careLocators');
const { continueButton, calculatePremiumButton, buyThisButton, editButton, importantNoteMessage, cancelButton, confirmAndBuyButton, popUpPremiumXpath, startButton, panXpath, dobXpath, fetchButton, clickonYesDetails, resumeButton, proposalFullName, kycPersonNameXpath, kycPersonDOBXpath, proposaldob, proposalFullNameXpath, proposaldobXpath, proposalPANXpath, proposalGenderXpath, listElementsFromDropDown, proposalAddressTwo, proposalEmailAddress, proposalAddressOne, kycPersonAddressXpath, proposalEmailAddressXpath, proposalAddressOneXpath, proposalAddressTwoXpath, proposalEmailAddressValidFormatXpath, kycPersonAddressTwoXpath, proposalCityXpath, proposalEmailLabel, nextButton, proposalChangeinPreXpath, proposalChangeinPreTextXpath, okayButton, insuredFullName, insuredDOB, insuredFullNameXpath, insuredDOBXpath, insuredHeightXpath, insuredWeightsXpath, insuredWeightText, insuredWeightTextXpath, insuredWeightMandatoryXpath, medicalQuestionOneMandatoryXpath, medicalQuestionTwoMandatoryXpath, medicalQuestionOneXpath, medicalQuestionTwoXpath, medicalQuestionOneFullNameXpath, medicalQuestionTwoFullNameXpath, medicalQuestionOneQueListXpath, medicalQuestionOneCheckBoxListXpath, medicalQueOneNoneXpath, medicalQueTwoNoneXpath, lifeDateFieldXpath, lifeOtherDetailsXpath, nomineeFullnameXpath, nomineeRelationshipXpath, summaryDeclarationxpath, confirmButton, applicationNumberXpath, nomineeFullnameMandatoryXpath } = require('../../../fixtures/commonXpaths');
const { authPersonName, authmobileNumber, authmobileOTPNumber, stagingURL } = require('../../../uitlities/mainData');

const careSupremeIndiviualFlowFunction = async (pincode, age, annual_income) => {
console.log(pincode, age, annual_income);

let titleOfApplication = "Ditto | Insurance made simple";
let premiumcoverAmount = ['₹5 L', '₹7 L', '₹10 L', '₹15 L'];
let proposalGenderList = [ 'Gender', 'Male', 'Female' ];
test.describe(`Care Supreme - Regression Flow  ${pincode} ${age} `, async () => {
    let page;
    let pan = "BWPPA6961A";
    let dob = "03/12/1998";
    let kycPersonName, kycPersonDOB, kycPersonAddress, kycPersonPan, kycPersonPincode,proposalFullNameValue,proposalDOBValue;
    let pincodeString = String(pincode);
	let ageString = String(age);

    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage();
    });
  
    test.afterAll(async () => {
        page.close();
    });

  test('Care Supreme - Insurance Selection For Page', async () => {
  
    //Navigation to the URL
    await urlNavigation(page);
    
    //Title Verification
    await pageTitle(page, titleOfApplication);

    //Validate URL
    await pageURL(page);

    //Click on Care Supreme
    await clickOnElement(page,insuranceselection);

    //Click on You insurance policy
    await clickOnElement(page,insurancepolicyfor);

    //Click on Continue Button
    await clickOnElement(page,continueButton);

  });
 test('Care Supreme - Indiviual Flow', async () => {
    let ageMandatoryActualText = "Your age is a required field";
    let minageActualText = "Minimum age should be 18";
    let pincodeMandatoryActualText = "Pin code is required";
    let invalidPincodeMandatoryActualText = "Invalid pincode or not allowed by insurer";

    await clickOnElement(page,calculatePremiumButton);
    const ageMandatoryText = await getText(page,ageMandatory);
    console.log(ageMandatoryText);  
    await validateText(page,ageMandatory,ageMandatoryActualText);

    const pinMandatoryText = await getText(page,pincodeMandatory);
    console.log(pinMandatoryText);   
  
    await validateText(page,pincodeMandatory,pincodeMandatoryActualText);

    await validateText(page,coverAmount,premiumcoverAmount);

    await sendValues(page,yourAge,"1");

    await validateText(page,ageMandatory,minageActualText);

    await sendValues(page,yourAge,"");

    //const randomValue = await randomNumber(18,99);
   
    await sendValues(page,yourAge,ageString);

    await sendValues(page,pincode,"583000");

    await clickOnElement(page,calculatePremiumButton);

    await validateText(page,pincodeMandatory,invalidPincodeMandatoryActualText);
  
    await sendValues(page,pincodeXpath,"");

    await sendValues(page,pincodeXpath,pincodeString);

    //Need to check clicking on Random Select
   // await randomListClick(page,coverAmount);

   await clickOnElement(page,calculatePremiumButton);

   if(ageString >45)
   {
    await clickOnElement(page,cumulativeBonusCheckBoxXpath);
   }

   if(ageString<46)
   {
        let addonAlertMessage = "If the eldest member age is below 46 years, Care mandates opting for Cumulative Bonus Super rider.";
        await clickOnElement(page,cumulativeBonusCheckBoxXpath);
        let uncheckAddon = await page.locator(alertMessage).isVisible();
        if (uncheckAddon) {
            await expect.soft(page.locator(getalertMessageText)).toHaveText(addonAlertMessage);
            await clickOnElement(page, okayButton);
        }
        else{
            console.log("Alert Message is not displayed as expected.")
        }
   }

   let premiumListOptions = await page.$$(premiumListXpath);
     for (let premiumOption of premiumListOptions) {
         await premiumOption.click();
         await premiumValidation(page, oneYearPremium, premiumAmount, premiumYear, " / 1 year");

         await premiumValidation(page, twoYearPremium, premiumAmount, premiumYear, " / 2 year");

         await premiumValidation(page, threeYearPremium, premiumAmount, premiumYear, " / 3 year");
     }

   let totalPremiumAmountInPricingCard = await getText(page,totalPremiumAmount);
   Math.ceil(totalPremiumAmountInPricingCard);
   console.log("The total Premium Amount in Pricing Card is :: "+totalPremiumAmountInPricingCard);

   let coverPremium = await getText(page,premiumAmount);
   console.log("The Cover Amount Premium is :: "+coverPremium);

   if(String(totalPremiumAmountInPricingCard).localeCompare(String(coverPremium))){
    console.log("Total Premium is Correct with Cover Amount Premium");
   }
   else{
    console.log("Total Premium is InCorrect with Cover Amount Premium");
   }

   await premiumValidation(page,oneYearPremium,premiumAmount,premiumYear," / 1 year");
   let pricePremium = await getText(page, premiumAmount);

   await clickOnElement(page, buyThisButton);

   await clickOnElement(page, editButton);

   await validateText(page,importantNoteMessage,"Are you sure you want to start from the beginning?");

   await clickOnElement(page,cancelButton);

   await clickOnElement(page, buyThisButton);

   let popUpPremiumAmount =  await getText(page, popUpPremiumXpath)
   expect.soft(pricePremium).toMatch(popUpPremiumAmount);

   await clickOnElement(page,confirmAndBuyButton);
    
   await otpValidation(page,authPersonName,authmobileNumber,authmobileOTPNumber);

 });

test('Care Supreme - Complete your KYC', async () => {

    await clickOnElement(page,startButton);
    await sendValues(page,panXpath,pan);
    await sendValues(page,dobXpath,dob);
    await clickOnElement(page,fetchButton);
    kycPersonName = await getText(page,kycPersonNameXpath);
    kycPersonDOB = await getText(page,kycPersonDOBXpath);
    kycPersonPan = await getText(page,kycPersonDOBXpath);
    kycPersonAddress = await getText(page,kycPersonAddressXpath);
    kycPersonPincode = await splitString(page,kycPersonAddressTwoXpath);

    await clickOnElement(page,clickonYesDetails);

 });

test('Care Supreme - Proposal Form_Proposer Details', async () => {

    await clickOnElement(page, resumeButton);

    proposalFullNameValue = await getAttributeValues(page, proposalFullNameXpath, "value");
    await fieldVerification(page, kycPersonName, proposalFullNameValue, "Full Name");

    //DOB Validation
    await checkElementIsDisabled(page,proposaldobXpath, "Proposal Date of Birth Field");
    proposalDOBValue = await getAttributeValues(page, proposaldobXpath, "value");
    await fieldVerification(page, kycPersonDOB, proposalDOBValue, "Date of Birth");

    //Gender Validation
    await clickOnElement(page, proposalGenderXpath);
    // const optionsList = await page.locator(listElementsFromDropDown);
    // await expect.soft(optionsList).toHaveCount(3);
    let proposalActualGenderListValue = await getListValue(page, listElementsFromDropDown);
    await comapareList(page, proposalActualGenderListValue, proposalGenderList, "Gender Value");
    await selectValueFromDropDown(page, listElementsFromDropDown, "Male");

    //PAN Validation
    await checkElementIsDisabled(page,proposalPANXpath, "Proposal PAN Field");
    const proposalPANValue = await getAttributeValues(page, proposalPANXpath, "value");
    await fieldVerification(page, kycPersonPan, proposalPANValue, "PAN");

    //EmailID 
    await sendValues(page, proposalEmailAddressXpath, "dhka7810");
    await clickOnElement(page, proposalEmailLabel);
    await validateText(page, proposalEmailAddressValidFormatXpath, "Enter a valid email");
    await sendValues(page, proposalEmailAddressXpath, "");
    let emailAddress = await randomEmailGenerator(page);
    await sendValues(page, proposalEmailAddressXpath, emailAddress);

    //Address Line One
    const proposalAddOneValue = await getAttributeValues(page, proposalAddressOneXpath, "value");
    await fieldVerification(page, kycPersonAddress, proposalAddOneValue, "Address Line One");

    //Address Line Two
    await sendValues(page, proposalAddressTwoXpath, "Test ward door street");

    //Pincode
    const proposalActualPincodeValue = await getAttributeValues(page, proposalAddressTwoXpath, "value");
    await fieldVerification(page, kycPersonPincode, proposalActualPincodeValue, "Pincode");

    //City Validation
    await clickOnElement(page, proposalCityXpath);
    await selectValueFromDropDown(page, listElementsFromDropDown, "Bellary");

    await clickOnElement(page, nextButton);

    let changeinPremium = await page.locator(proposalChangeinPreXpath).isVisible();
    if (changeinPremium) {
        let changeinPRemiumText = "Your premium amount might change since pincode changed in the application form. You can continue to see the updated premium.";
        let premiumAmountSameText = "Your premium amount remains same!";
        let premiumAmountChangedText = "Your premium amount is changed!";

        await expect.soft(page.locator(proposalChangeinPreTextXpath)).toHaveText(changeinPRemiumText);
        await clickOnElement(page, continueButton);

        let premiumSameMsg = await page.locator(proposalChangeinPreXpath).isVisible();
        //   await expect.soft(page.locator(premiumAmountSameText) || page.locator(premiumAmountChangedText)).toHaveText((premiumAmountSameText) || (premiumAmountChangedText));
        await clickOnElement(page, okayButton);

    }
    else {
        console.log("No Change in the Premium Amount");
    }

});

test('Care Supreme - Proposal Form_Insured Member Details', async () => {

    await checkElementIsDisabled(page,insuredFullNameXpath, "Insured Full Name");
    let insuredFullNameValue =  await getAttributeValues(page,insuredFullNameXpath,"value");
    await fieldVerification(page,proposalFullNameValue,insuredFullNameValue,"Full Name");
 
    //DOB Validation
    await checkElementIsDisabled(page,insuredDOBXpath, "Insured Date of Birth Field");
    const insuredDOBValue =  await getAttributeValues(page,insuredDOBXpath,"value");
    await fieldVerification(page,proposalDOBValue,insuredDOBValue,"Date of Birth");
 
    //Height Validation
    await clickOnElement(page,insuredHeightXpath);
//   const optionsList = await page.locator(listElementsFromDropDown);
//    await expect.soft(optionsList).toHaveCount(85);
    let proposalActualGenderListValue = await getListValue(page,listElementsFromDropDown);
    await selectValueFromDropDown(page,listElementsFromDropDown,"5 feet 8 inch");

    //Weight Validation
    await sendValues(page,insuredWeightsXpath,"0");
    await clickOnElement(page,insuredWeightTextXpath);
    
    await validateText(page,insuredWeightMandatoryXpath,"Min weight 1");

    await sendValues(page,insuredWeightsXpath,"50000000");
    await clickOnElement(page,insuredWeightTextXpath);
    await validateText(page,insuredWeightMandatoryXpath,"Max weight 500");

    await sendValues(page,insuredWeightsXpath,"");
    const randomValue = await randomNumber(40,120);
    await sendValues(page,insuredWeightsXpath,randomValue);

    await clickOnElement(page,nextButton);

    let changeinPremium = await page.locator(proposalChangeinPreXpath).isVisible();
        if (changeinPremium) {
            let changeinPremiumText = "Your premium amount might change since your age changed in the application form. You can continue to see the updated premium.";
            let premiumAmountSameText = "Your premium amount remains same!";
            let premiumAmountChangedText = "Your premium amount is changed!";

            await expect.soft(page.locator(proposalChangeinPreTextXpath)).toHaveText(changeinPremiumText);
            await clickOnElement(page, continueButton);

            let premiumSameMsg = await page.locator(proposalChangeinPreXpath).isVisible();
         // await expect.soft(page.locator(premiumAmountSameText) || page.locator(premiumAmountChangedText)).toHaveText((premiumAmountSameText) || (premiumAmountChangedText));
            await clickOnElement(page, okayButton);

        }
        else {
            console.log("No Change in the Premium Amount");
        }
});
test('Care Supreme - Proposal Form_Medical History', async () => {
    let medicalQuestionOneText = "Does any person(s) to be insured currently or in past Diagnosed/Suffered/Treated/Taken Medication for any medical condition?";
    let medicalQuestionTwoText = "Does any person(s) to be insured has previous or existing health insurance ?";
    let medicalQuestionActualList = [ 'HIV/ AIDS/ STD? *', 'Cancer', 'Has any of the Proposed to be Insured consulted/taken treatment or recommended to take investigations/medication/surgery other than for childbirth/minor injuries? *','Has any of the Proposed to be Insured been hospitalized or has been under any prolonged treatment for any illness/injury or has undergone surgery other than for childbirth/minor injuries? *',
        'Diabetes Mellitus type 1 or Diabetes on insulin or Diabetes associated with blindness or chronic foot ulcer', 'Any disorders of the endocrine system (including but not limited to Pituitary / Parathyroid / adrenal gland disorders)', 'Any disorders of Blood and / or Immunity (including but not limited to bleeding or clotting disorders, Systemic Lupus Erythematosus, Rheumatoid Arthritis, Crohn’s disease, Ulcerative Colitis).',
        'Any Neuromuscular (muscles or nervous system) disorder or  Psychiatric disorders (including but not limited to Motor Neuron Disease, Muscular dystrophies, Epilepsy, Paralysis, Parkinsonism, multiple sclerosis, stroke, mental illness)',
        'Any Respiratory disease / Disease of Lungs, Pleura and airway (including but not limited to Asthma / Tuberculosis / Pleural effusion / Bronchitis / Emphysema)', 'Hypertension / High Blood Pressure',
        'Pancreatitis or Liver disease (including but not limited to Cirrhosis / Hepatitis B or C / Willson’s disease) or any other digestive track disorder (disorders of esophagus or stomach or intestine or any other) ','Any Kidney / urinary track / reproductive organ Disease ',
        'Any cardiovascular/Heart Disease (including but not limited to Coronary artery disease / Rheumatic heart disease / Heart Attack or Myocardial infarction / Heart failure / Bypass Grafting or CABG / Angioplasty or PTCA / Heart valve diseases / Pacemaker implantation)',
        'Congenital Disorder?','Any other diseases or ailments not mentioned above ?'
      ]
    await clickOnElement(page,nextButton);

    await validateText(page,medicalQuestionOneMandatoryXpath,"Please choose an option");
    await validateText(page,medicalQuestionTwoMandatoryXpath,"Please choose an option");
    await validateText(page,medicalQuestionOneXpath,medicalQuestionOneText);
    await validateText(page,medicalQuestionTwoXpath,medicalQuestionTwoText);

    // let medicalQuestionOneFullNameValue = await getText(page,medicalQuestionOneFullNameXpath);
    // let medicalQuestionTwoFullNameValue = await getText(page,medicalQuestionTwoFullNameXpath);

    // expect.soft(medicalQuestionOneFullNameValue).toMatch(proposalFullNameValue);
    // expect.soft(medicalQuestionTwoFullNameValue).toMatch(proposalFullNameValue);
   
    await clickOnElement(page,medicalQuestionOneFullNameXpath);
    await validateText(page,medicalQuestionOneMandatoryXpath,"Atleast one should be selected from the list");

    let medicalQuestionOneList = await getListValue(page,medicalQuestionOneQueListXpath);
    await comapareList(page,medicalQuestionOneList,medicalQuestionActualList,"Medical Questions");

    await clickonCheckBoxList(page,medicalQuestionOneCheckBoxListXpath);

   // await clickOnElement(page,medicalQueOneNoneXpath);
 //   await clickOnElement(page,medicalQueTwoNoneXpath);

 //   await clickOnElement(page,nextButton);

});
/*
test('Care Supreme - Proposal Form_Lifestyle', async () => {

    await clickOnElement(page,medicalQuestionOneFullNameXpath);

    await sendValues(page,lifeDateFieldXpath, getCurrentDate());
    let detailsString = await randomTextGenerator();
    console.log("The String is :: ",detailsString);
    await sendValues(page,lifeOtherDetailsXpath,detailsString);

    await clickOnElement(page,medicalQueOneNoneXpath);

    await clickOnElement(page,nextButton);

});

test('Care Supreme - Proposal Form_Nominee for this policy', async () => {
    let relationShipList = ['Select','Father','Mother','Spouse','Daughter','Son','Brother','Grand Father','Grand Mother','Brother in law','Mother in law','Sister in law','Sister'];
    await sendValues(page,nomineeFullnameXpath,"TestPolicy");

    //Relationship with proposer Validation
    await clickOnElement(page, nomineeRelationshipXpath);
    const optionsList = await page.locator(listElementsFromDropDown);
    await expect.soft(optionsList).toHaveCount(13);

    let nomineeRelationShipListValue = await getListValue(page,listElementsFromDropDown);
    await comapareList(page,nomineeRelationShipListValue,relationShipList);
    await selectValueFromDropDown(page,listElementsFromDropDown,"Brother");

    await validateText(page,nomineeFullnameMandatoryXpath,"Enter both First and Last names");
    await sendValues(page,nomineeFullnameXpath,"TestPolicy PolicyTest");

    await clickOnElement(page,nextButton);
    
}); 

test('Care Supreme - Proposal Form_Summary', async () => {
   
    await checkElementIsDisabled(page,confirmButton,"Confirm Button"); 
    await clickOnElement(page,summaryDeclarationxpath);
    await clickOnElement(page,confirmButton);

    let applicationNumber = await getText(page,applicationNumberXpath);
    console.log(applicationNumber);

    let getCurrentURL = await page.url();
    console.log(getCurrentURL);


}); */
});
}

export { careSupremeIndiviualFlowFunction,};