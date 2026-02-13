import * as _ from '@Index';

export class DropDown{
    readonly page: _.Page;
    readonly DropDownLink: _.Locator;
    readonly DropDownField: _.Locator;

    constructor(page: _.Page){
        this.page = page;
        this.DropDownLink = page.locator("//a[text()='Dropdown']");
        this.DropDownField = page.locator("//select[@id='dropdown']");
    }

    async ClickDropDownLink(){
        await this.DropDownLink.click();
    }

    async ClickDropDownField(){
        await this.DropDownField.selectOption("Option 1");
        await this.DropDownField.selectOption("Option 2");
    }

}