// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
	testDir: "./tests",
	expect:{
		timeout: 10000,
	},
	/* Run tests in files in parallel */
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	fullyParallel: false,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [
		["html"],
		['./myallurereport.js'],
		['allure-playwright', {outputFolder: 'allure-results'}],
		// [
		// 	"allure-playwright",
		// 	{
		// 		detail: true,
		// 		outputFolder: "allure-reports",
		// 		suiteTitle: false,
		// 	},
		// ],

		//reporter: [['json', { outputFile: 'results.json' }]],
	],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		// baseURL: 'http://127.0.0.1:3000',

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		viewport : null,
		trace: "on-first-retry",
		screenshot: "on",
		video: "retain-on-failure",
		headless: false,
		browserName : "chromium",
		launchOptions : {args: ["--start-maximized"] },
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: "chromium",
			//use: { ...devices["Desktop Chrome"], viewport: {width: 1536, height: 864} },
		},
		
		// name: 'Google Chrome',
        //     use: {
        //         channel: 'chrome',
        //     },
		// }	
		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 5'] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 12'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   url: 'http://127.0.0.1:3000',
	//   reuseExistingServer: !process.env.CI,
	// },
});
