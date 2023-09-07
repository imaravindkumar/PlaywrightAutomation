const insuranceselection = "//span[text()='Care Supreme']"; 
const insurancepolicyfor = "//span[text()='You']";
const yourAge = "//input[@name='age']";
const ageMandatory = "//p[@id='text-input-age-helper-text']";
const pincodeXpath = "//input[@name='pincode']";
const pincodeMandatory = "//p[@id='text-input-pincode-helper-text']";
const coverAmount = "//div[contains(@class,'rec rec-carousel-item rec-carousel-item')]/div/div";
const policyBrochure = "//span[text()='Policy brochure']";

const oneYearPremium = "(//p[contains(text(),'Premium')]/span)[1]";
const twoYearPremium = "(//p[contains(text(),'Premium')]/span)[2]";
const threeYearPremium = "(//p[contains(text(),'Premium')]/span)[3]";
const coverAmountOfthePolicy = "(//p[@class='MuiTypography-root MuiTypography-body1 MuiTypography-colorTextPrimary']/span)[3]";
const premiumAmount = "(//p[@class='MuiTypography-root MuiTypography-body1 MuiTypography-colorTextPrimary']/span)[4]";
const premiumYear = "(//p[@class='MuiTypography-root MuiTypography-body1 MuiTypography-colorTextPrimary']/span)[5]";
const totalPremiumAmount = "(//p[@class='MuiTypography-root MuiTypography-body2 MuiTypography-alignRight'])[1]";
const premiumListXpath = "//div[contains(@class,'rec rec-item-wrapper')]/div";
const alertMessage = "//h6[text()='Alert']";
const getalertMessageText = "//p[contains(text(),'If the')]";

//Supreme Add-ons
const cumulativeBonusCheckBoxXpath = "//input[@name='Cumulative Bonus Super']";
const annualHealthCheckBoxXpath = "//input[@name='Annual Health Checkup']";
const instantCoverCheckBoxXpath = "//input[@name='Instant Cover']";
const claimShieldCheckBoxXpath = "//input[@name='Claim Shield']";
const reductioninPedCheckBoxXpath = "//input[@name='Reduction in PED']";

const cumulativeAlert = "//h6[text()='Alert']/../p";



const fieldVerification = async(page, firstString, secondString, fieldName) => {
    if(String(firstString).matchAll(String(secondString))){
        console.log("The KYC Person " ,fieldName, " and The Proposal", fieldName ,"is Correct.")
       }
       else{
        console.log("The KYC Person" ,fieldName, "and The Proposal", fieldName ,"is Incorrect.")
       }
  }



export {
	insuranceselection,insurancepolicyfor,yourAge,ageMandatory,pincodeXpath,pincodeMandatory,coverAmount,premiumListXpath,alertMessage,getalertMessageText,
	policyBrochure,oneYearPremium,twoYearPremium,threeYearPremium,coverAmountOfthePolicy,premiumAmount,premiumYear,totalPremiumAmount,
    cumulativeBonusCheckBoxXpath,annualHealthCheckBoxXpath,instantCoverCheckBoxXpath,claimShieldCheckBoxXpath,reductioninPedCheckBoxXpath,fieldVerification,
    
};