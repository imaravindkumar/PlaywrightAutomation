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

export {
	gotoURL,
	clickonElement,
	sendValuesToField,
};