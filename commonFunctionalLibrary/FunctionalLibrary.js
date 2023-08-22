const { test, expect } = require("@playwright/test");
import { stagingOne } from "../uitlities/mainData";

const gotoURL = async ( page ) => {
    console.log(stagingOne)
	await page.goto(stagingOne);
};

const clickonElement = async ({ page }, elementLocator ) => {
	await this.page.locator(elementLocator).click();
};

const sendValuesToField = async ({ page }, elementLocator, stringValue ) => {
	await this.page.locator(elementLocator).fill(stringValue);
};

/*
exports.FunctionalLibrary = class FunctionalLibrary{

    constructor(page){
        this.page = page;
    }

    async gotoURL(urlValue){
        await this.page.gotoURL(urlValue);
    }

    async clickonElement(elementLocator){
        await this.page.locator(elementLocator).click();
    }

    async sendValuesToField(elementLocator, stringValue){
        await this.page.locator(elementLocator).fill(stringValue);
    }
}
*/

export {
	gotoURL,
	clickonElement,
	sendValuesToField,
};