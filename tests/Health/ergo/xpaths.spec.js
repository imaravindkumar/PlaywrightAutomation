const continueButton = "text=Continue";
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
const buyThisButton = "//button//span[contains(text(),'Buy This')]";
const popUpPremiumXpath =
	"(//div[@class='MuiGrid-root MuiGrid-container']//div//p[contains(text(), 'Premium')]/..//span[contains(text(), '₹')])[2]";
const confirmAndBuyButton =
	"//button//span[contains(text(),'Confirm and buy')]";
const dontWorrySpamMsg =
	"//span[contains(text(), 'Don’t worry, we will never spam you')]";
const sendOtpButton = "//button//span[contains(text(),'Send')]";
const inputOTP = "#text-input-otp";
const otpIsRequired = "//p[contains(text(), 'otp is a required field')]";
const secondSummaryPremiumXpath =
	"//span[contains(text(), '/ 1 year')]/..//span[contains(text(), '₹')]";

export {
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
};
