import * as _ from '@Index';

export class KeyPresses {
    readonly page: _.Page;
    readonly KeyPressesLink: _.Locator;
    readonly InputField: _.Locator;
    readonly ResultText: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.KeyPressesLink = page.locator("//a[text()='Key Presses']");
        this.InputField = page.locator("//input[@type='text']");
        this.ResultText = page.locator("//p[starts-with(text(),'You entered: ')]");
    }

    async ClickKeyPressesLink() {
        await this.KeyPressesLink.scrollIntoViewIfNeeded();
        await this.KeyPressesLink.click();
    }

    async EnterTabPress(KeyToPress: string) {
        await this.InputField.click();
        await this.page.keyboard.press(KeyToPress);
    }

    async EnterCharcterPress(CharacterToPress: string) {
        await this.InputField.click();
        await this.page.keyboard.type(CharacterToPress);
    }

}