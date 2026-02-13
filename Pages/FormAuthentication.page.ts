import * as _ from '@Index';

export class FormAuthentication {
    readonly page: _.Page;
    readonly FormAuthLink: _.Locator;
    readonly UsernameTxtField: _.Locator;
    readonly PasswordTxtField: _.Locator;
    readonly Loginbutton: _.Locator;
    readonly UsernameText: _.Locator;
    readonly PasswordText: _.Locator;
    readonly LoginSuccessText: _.Locator;
    readonly LogOutButton: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.FormAuthLink = page.locator("//a[text()='Form Authentication']");
        this.UsernameTxtField = page.locator("//label[text()='Username']/following-sibling::input");
        this.PasswordTxtField = page.locator("//label[text()='Password']/following-sibling::input");
        this.Loginbutton = page.locator("//button[@type='submit']");
        this.UsernameText = page.locator("(//em)[1]");
        this.PasswordText = page.locator("(//em)[2]");
        this.LoginSuccessText = page.locator("//div[@id='flash']");
        this.LogOutButton = page.locator("//i[text()=' Logout']/parent::a");
    }

    async ClickFormAuthLink() {
        await this.FormAuthLink.click();
    }

    async EnterUsernameTxtField() {
        const Username = await this.UsernameText.textContent();
        await this.UsernameTxtField.fill(Username!);
    }

    async EnterPasswordTxtField() {
        const Password = await this.PasswordText.textContent();
        await this.PasswordTxtField.fill(Password!);
    }

    async ClickLoginButton() {
        await this.Loginbutton.click();
    }

    async ClickLogOutButton() {
        await this.LogOutButton.click();
    }


}