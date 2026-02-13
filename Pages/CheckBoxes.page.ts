import * as _ from '@Index';

export class CheckBoxes {
    readonly page: _.Page;
    readonly CheckBoxesLink: _.Locator;
    readonly CheckBox1: _.Locator;
    readonly CheckBox2: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.CheckBoxesLink = page.locator("//a[text()='Checkboxes']");
        this.CheckBox1 = page.locator("(//input[@type='checkbox'])[1]");
        this.CheckBox2 = page.locator("(//input[@type='checkbox'])[2]");
    }

    async ClickCheckBoxesLink() {
        await this.CheckBoxesLink.click();
    }

    async CheckCheckBox() {
        // for(var i=1; i<=2; i++){
        //     await this.page.locator(`(//input[@type='checkbox'])[${i}]`).click();
        // }
        await this.CheckBox1.check();
    }

    async UncheckCheckBox() {
        await this.CheckBox2.uncheck();
    }

}
