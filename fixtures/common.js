import { stagingOne } from "../uitlities/mainData";
import { clickOTPText, inputOTP, medicalQuestionDate, medicalQuestionErrorXpath, mobileNumberField, mobileNumberRequired, nameField, nameRequired, otpIsRequired, sendOtpButton, submitButton } from "./commonXpaths";

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


//Care Functions
//URL Navigation
const urlNavigation = async (page) => {
	await page.goto(stagingOne);
};

//Clicking on Element
const clickOnElement = async (page, locatorValue) => {
    await page.locator(locatorValue).click();
};

//Getting the text from UI
const getText = async(page, locatorValue) => {
	const textValue  = await page.locator(locatorValue).textContent();
	return textValue;
}

//Validating the Actual and Expected Value
const validateText = async(page, locator, expectedValue) => {
	const element = await page.locator(locator);
    // Use expect.toHaveText() to validate the text content
    await expect.soft(element).toHaveText(expectedValue);
}

//Send Values to the Input field
const sendValues = async(page, locator, textValue) =>{
	await page.locator(locator).fill(textValue);
}

//Generate Random Number within Range
const randomNumber = async (min, max) => {
	const randomValue = Math.floor(Math.random() * (max - min) + min);
    return String(randomValue);
}
 
const premiumValidation = async (page, yearPremium,premiumAmount,premiumYear,year) => {
   await clickOnElement(page,yearPremium);
   let yearPremiumValue = await getText(page,yearPremium);
   //Card Premium
   let cardPremium = await getText(page,premiumAmount);
   let cardPremiumYear = await getText(page, premiumYear);

   let premiumwithYear = yearPremiumValue.concat(" ",year);
   let cardpremiumwithYear = cardPremium.concat(cardPremiumYear);

   console.log("Premium From the Cover Amount :: ",premiumwithYear);
   console.log("Premium From the Pricing Card :: ",cardpremiumwithYear);

   if(String(premiumwithYear).localeCompare(String(cardpremiumwithYear))){
	console.log("Premiums Are Correct");
   }
   else{
	console.log("Premiums Are InCorrect");
   }
  
}

const otpValidation = async(page, nameString, phoneNumberString, otpString) => {

	await clickOnElement(page,sendOtpButton);
	await validateText(page, nameRequired,"Required");
	await validateText(page, mobileNumberRequired,"Required");

	await sendValues(page,nameField,nameString);
	await sendValues(page,mobileNumberField,phoneNumberString);

	await clickOnElement(page,sendOtpButton);
	await clickOnElement(page,inputOTP);
	await clickOnElement(page,clickOTPText);

	await validateText(page,otpIsRequired,"otp is a required field");
	await sendValues(page,inputOTP,"12");
	await clickOnElement(page,clickOTPText);
	await validateText(page,otpIsRequired,"Must be exactly 6 digits");
	await sendValues(page,inputOTP,"");

	await sendValues(page,inputOTP,otpString);

	await clickOnElement(page,submitButton);

}
 
const getAttributeValues = async(page,locator,attValue) => {
	const inputElement = page.locator(locator);
	const attributeValue = await inputElement.getAttribute(attValue);

	return String(attributeValue);
}

const randomListClick =async (page, locator) =>{
  // Find all the list items within the container
  const listItems = await page.locator(locator); // Adjust the selector as needed
  console.log(listItems);
  // Generate a random index within the range of available list items
  const randomIndex = Math.floor(Math.random() * listItems.length);
  console.log(randomIndex);
  // Click on the randomly chosen list item
  await listItems[randomIndex].click();
  }

  const checkElementIsDisabled = async(page,locator, fieldName) => {
	const value = await page.locator(locator).isDisabled();
	expect.soft(value).toBeTruthy();
	if(value){
		console.log("The ",fieldName, " is disabled");
	}
	else{
		console.log("The ",fieldName, " is not disabled");
	}
  }

//Get List Values From The Dropdown
const getListValue = async(page, locator) => {
  const options = await page.$$(locator);
   let optionValue = [];
   for(let option of options)
   {
    const value = await option.textContent();
    optionValue.push(value);
   }
   console.log("The Array Value :: ", optionValue);
   return [optionValue];

}

const clickonCheckBoxList = async(page, locator) => {
	const options = await page.$$(locator);
	console.log(options);
	const clickdays = "//label[text()='Onset date (approximate)']";
	
	 for(let option of options)
	 {
	   await option.click();
	   await sendValues(page,medicalQuestionDate,"01/1920");
	   await clickOnElement(page,clickdays);
	   await validateText(page,medicalQuestionErrorXpath,"onset should not be older than date of birth.");
	   await sendValues(page,medicalQuestionDate,"");
	   await sendValues(page,medicalQuestionDate,"12/2023");
	   await validateText(page,medicalQuestionErrorXpath,"Future dates not allowed");
	   await sendValues(page,medicalQuestionDate,"");
	   await sendValues(page,medicalQuestionDate,getCurrentDate());

//	   await sendValues(page,medicalQuestionDate,"");
//	   await sendValues(page,medicalQuestionDate,"08/2023");
		await option.click();
		
	 }
  }

const getCurrentDate = () => {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, "0");
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentMonth}/${currentYear}`;
    return String(currentDate);
}

const comapareList = async (page, actualList, expectedList, fieldName) => {
	expect.soft(actualList).toMatch(expectedList);
	if(JSON.stringify(actualList) === JSON.stringify(expectedList)){
		console.log("The List are equal :: ",expectedList, " from the  Field ",fieldName);
	}
	else{
		console.log("The List are not equal :: ",expectedList, " from the  Field ",fieldName);
	}
}

  //Select Value From The Dropdown
  const selectValueFromDropDown = async(page, locator, dropDownValue) => {
	const options = await page.$$(locator);
	 for(let option of options)
	 {
	  const value = await option.textContent();
	 if(value.includes(dropDownValue)){
		await option.click();
		break;
	 }
	 }  
  }

const randomEmailGenerator = async (page) => {
	var chars = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var emailString = '';
	for (var i = 0; i < 15; i++) {
		emailString += chars[Math.floor(Math.random() * chars.length)];
	}
	emailString = emailString.concat('@gmail.com');

	return String(emailString);
  }

  const randomTextGenerator = async () => {
	var chars = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var randomString = '';
	for (var i = 0; i < 40; i++) {
		randomString += randomString[Math.floor(Math.random() * chars.length)];
	}
	return String(randomString);
  }
  
  const splitString = async (page,locator) => {
	let splitStringValue = await getText(page,locator);
	const myArrayValue = splitStringValue.split("-");

	return String(myArrayValue[1]);
  }

  const stringSlice = async(page, stringValue) =>{
    stringValue = stringValue.slice(0, string.length - 4);
	return String(stringValue);
  }

export {
	fillAgeAndPincode,fillPhoneNumberAndName,enterOtpAndSubmit,openFlow,urlNavigation,
	clickOnElement,getText,validateText,sendValues,randomNumber,randomListClick,premiumValidation,otpValidation,getAttributeValues,
	checkElementIsDisabled,getListValue,comapareList,selectValueFromDropDown,randomEmailGenerator,splitString,getCurrentDate,clickonCheckBoxList,
	stringSlice,randomTextGenerator,
};
