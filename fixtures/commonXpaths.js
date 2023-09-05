const continueButton = "//span[text()='Continue']";
const buyThisButton = "//button//span[contains(text(),'Buy This')]";
const okayButton = "//span[text()='Okay']";
const editButton = "//span[text()='Edit']"
const cancelButton = "//span[text()='Cancel']";
const submitButton = "//span[text()='Submit']";
const importantNoteMessage = "//p[text()='Are you sure you want to start from the beginning?']";
const startButton = "//span[text()='Start']";
const nextButton = "//span[text()='Next']";
const confirmButton = "//span[text()='Confirm']";
const listElementsFromDropDown = "//ul[@role='listbox']/li";

const heading = "h4";
const calculatePremiumButton = "text=Calculate Premium";
const ageIsRequiredText = "#text-input-age-helper-text";
const pincodeIsRequired = "#text-input-pincode-helper-text";
const defaultCoverAmount = "//span[contains(text(),'L')]";
const oneYearPremiumXpath =
	"(//p[contains(text(),'Premium')]//span[contains(text(), '₹')])[1]";
const twoYearPremiumXpath =
	"(//p[contains(text(),'Premium')]//span[contains(text(), '₹')])[2]";
const firstSummaryCardPremiumXpath =
	"(//span[contains(text(), '/ 1 year')])/../../p/span[contains(text(),'₹')]";
const totalPremiumXpath =
	"//p[contains(text(), 'Total premium')]/../../div/p[contains(text(), '₹')]";
const protectorRider =
	"(//p[contains(text(), 'Protector Rider')]/../../div//span)[2]";

//Confirm Details Page
const popUpPremiumXpath =
	"(//div[@class='MuiGrid-root MuiGrid-container']//div//p[contains(text(), 'Premium')]/..//span[contains(text(), '₹')])[2]";
const popUpYearXpath = "(//div[@class='MuiGrid-root MuiGrid-container']//div//p[contains(text(), 'Premium')]/..//span[contains(text(), 'year')])[2]";
const confirmAndBuyButton =
	"//button//span[contains(text(),'Confirm and buy')]";


//Send OTP Page
const dontWorrySpamMsg =
	"//span[contains(text(), 'Don’t worry, we will never spam you')]";
const sendOtpButton = "//button//span[contains(text(),'Send')]";
const nameRequired ="//p[@id='text-input-fullName-helper-text']";
const mobileNumberRequired = "//p[@id='text-input-mobile-helper-text']";
const nameField = "//input[@id='text-input-fullName']";
const mobileNumberField = "//input[@id='text-input-mobile']";
const inputOTP = "#text-input-otp";
const otpIsRequired = "//p[@id='text-input-otp-helper-text']";
const clickOTPText = "//label[text()='OTP']";
const secondSummaryPremiumXpath =
	"//span[contains(text(), '/ 1 year')]/..//span[contains(text(), '₹')]";

//KYC Details
const panXpath = "//input[@name='pan']";
const dobXpath = "//input[@name='dob']";
const fetchButton = "//span[text()='Fetch KYC details']";
const clickonYesDetails = "//span[text()='Yes, these are correct']";
const kycPersonNameXpath ="(//span[contains(@class,'MuiBox-root jss')])[2]";
const kycPersonEmailXpath = "(//span[contains(@class,'MuiBox-root jss')])[3]";
const kycPersonDOBXpath = "(//span[contains(@class,'MuiBox-root jss')])[5]";
const kycPersonPanXpath = "(//span[contains(@class,'MuiBox-root jss')])[4]";
const kycPersonAddressXpath = "(//span[contains(@class,'MuiBox-root jss')])[6]";
const kycPersonAddressTwoXpath = "(//span[contains(@class,'MuiBox-root jss')])[7]";

//Proposal Form
const resumeButton = "//span[text()='Resume']";
const proposalFullNameXpath = "//input[@name='proposer.full_name']";
const proposaldobXpath = "//input[@name='proposer.dob']";
const proposalGenderXpath = "//div[@id='select-proposer.gender']";
const proposalPANXpath = "//input[@name='proposer.pan']";
const proposalPhoneNumberXpath = "//input[@name='proposer.mobile']";
const proposalEmailAddressXpath = "//input[@name='proposer.email']";
const proposalEmailLabel = "//label[text()='Email ID']";
const proposalEmailAddressValidFormatXpath = "//p[@id='text-input-proposer.email-helper-text']";
const proposalAddressOneXpath = "//input[@name='proposer.address.line1']";
const proposalAddressTwoXpath = "//input[@name='proposer.address.line2']";
const proposalPincodeXpath = "//input[@name='proposer.address.pincode']";
const proposalStateXpath = "//input[@id='auto-complete-proposer.address.state']";
const proposalCityXpath = "//input[@id='auto-complete-proposer.address.city']";
const proposalChangeinPreXpath = "//h6[text()='Change in premiums']";
const proposalChangeinPreTextXpath = "//p[contains(text(),'Your premium')]";
const proposalPreSameTextXpath = "//h6[contains(text(),'Your premium')]";

//Insured Member Details
const insuredFullNameXpath = "//input[@name='insured_basic[0].full_name']";
const insuredDOBXpath = "//input[@name='insured_basic[0].dob']";
const insuredHeightXpath = "//div[@id='select-insured_basic[0].height_ft-insured_basic[0].height_in']";
const insuredWeightsXpath = "//input[@id='text-input-insured_basic[0].weight']";
const insuredWeightTextXpath = "//label[text()='Weight (kgs)']";
const insuredWeightMandatoryXpath = "//p[@id='text-input-insured_basic[0].weight-helper-text']";

//Medical History
const medicalQuestionOneXpath = "(//p[contains(text(),'Does any person')])[1]";
const medicalQuestionOneMandatoryXpath = "(//p[@class='MuiFormHelperText-root Mui-error'])[1]";
const medicalQuestionOneFullNameXpath = "(//span[contains(@class,'MuiButton-label')])[2]";//"(//span[text()='Self']/..)[1]";
const medicalQuestionTwoXpath = "(//p[contains(text(),'Does any person')])[2]";
const medicalQuestionTwoMandatoryXpath = "(//p[@class='MuiFormHelperText-root Mui-error'])[2]";
const medicalQuestionTwoFullNameXpath = "(//span[contains(@class,'MuiButton-label')])[4]";
const medicalQuestionOneCheckBoxListXpath = "//span[@class='MuiIconButton-label']";
const medicalQuestionOneQueListXpath = "//div[contains(@class,'MuiBox-root')]//p[@class='MuiTypography-root MuiTypography-body2']/span";
const medicalQuestionDate = "//div[contains(@class,'MuiFormControl-root MuiTextField-root jss')]//input";
const medicalQuestionErrorXpath = "//p[@class='MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled']";
const medicalQueOneNoneXpath = "(//span[text()='None'])[1]";
const medicalQueTwoNoneXpath = "(//span[text()='None'])[2]";

//LifeStyle Question
const lifeDateFieldXpath = "//input[@name='insured_lifestyle[0].onset']";
const lifeOtherDetailsXpath = "//textarea[@name='insured_lifestyle[0].description']";

//Nominee Details
const nomineeFullnameXpath = "//input[@name='nominee.full_name']";
const nomineeFullnameMandatoryXpath = "//p[@id='text-input-nominee.full_name-helper-text']";
const nomineeRelationshipXpath = "//div[@id='select-nominee.relationship']";

//Summary Page
const summaryDeclarationxpath = "//input[@name='cofirm']";
const applicationNumberXpath = "//span[contains(text(),'Your application number')]";

export {
	continueButton,heading,calculatePremiumButton,ageIsRequiredText,pincodeIsRequired,defaultCoverAmount,oneYearPremiumXpath,
	twoYearPremiumXpath,firstSummaryCardPremiumXpath,totalPremiumXpath,protectorRider,buyThisButton,popUpPremiumXpath,confirmAndBuyButton,
	dontWorrySpamMsg,sendOtpButton,inputOTP,otpIsRequired,secondSummaryPremiumXpath,editButton,cancelButton,nextButton,importantNoteMessage,
    popUpYearXpath,nameRequired,mobileNumberRequired,nameField,mobileNumberField,okayButton,submitButton,clickOTPText,startButton,confirmButton,panXpath,dobXpath,
    fetchButton,clickonYesDetails,kycPersonNameXpath,kycPersonEmailXpath,kycPersonDOBXpath,kycPersonPanXpath,kycPersonAddressXpath,resumeButton,
    proposalFullNameXpath,proposaldobXpath,proposalGenderXpath,proposalPANXpath,listElementsFromDropDown,proposalPhoneNumberXpath,proposalEmailAddressXpath,
    proposalAddressOneXpath,proposalAddressTwoXpath,kycPersonAddressTwoXpath,proposalEmailAddressValidFormatXpath,proposalPincodeXpath,proposalStateXpath,
    proposalCityXpath,proposalEmailLabel,proposalChangeinPreXpath,proposalChangeinPreTextXpath,proposalPreSameTextXpath,insuredFullNameXpath,insuredDOBXpath,
    insuredHeightXpath,insuredWeightsXpath,insuredWeightTextXpath,insuredWeightMandatoryXpath,medicalQuestionOneXpath,medicalQuestionTwoXpath,
    medicalQuestionOneMandatoryXpath,medicalQuestionTwoMandatoryXpath,medicalQuestionOneFullNameXpath,medicalQuestionTwoFullNameXpath,
    medicalQuestionOneCheckBoxListXpath,medicalQuestionOneQueListXpath,medicalQuestionDate,medicalQuestionErrorXpath,medicalQueOneNoneXpath,
    medicalQueTwoNoneXpath,lifeDateFieldXpath,lifeOtherDetailsXpath,nomineeFullnameXpath,nomineeRelationshipXpath,summaryDeclarationxpath,
    applicationNumberXpath,nomineeFullnameMandatoryXpath,
};
