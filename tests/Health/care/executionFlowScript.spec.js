import { test, expect } from "@playwright/test";
import { readExcelFile } from "../../../uitlities/excelread";
import { careSupremeIndiviualFlowFunction } from "./individualFlowCare.spec";

test.describe("Testcase", async () => {
	let page; //create variable with page
	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage(); //Create a new Page instance
	});
   
	const filePath = "test-data/DWATestData.xlsx";

	const numColumnsToExtract = 3; // Change this to the number of columns you want to extract
	const extractedData =  readExcelFile(filePath, numColumnsToExtract);
	console.log(extractedData);

	extractedData.map(async (each) => {
		await careSupremeIndiviualFlowFunction(each.pincode, each.age, each.annual_income);
	});
});
