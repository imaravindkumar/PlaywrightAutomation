import { test, expect } from "@playwright/test";

test("test", async ({ page, browser }) => {
	const newPage = await page.goto("https://test-bliss.joinditto.in");
	//await newPage.goto("https://test-bliss.joinditto.in");

	const uploadedFile = await page.setInputFiles(
		"testsPolicyDump_072023 (35).xlsx",
	);
	console.log(uploadedFile.json()===
});
