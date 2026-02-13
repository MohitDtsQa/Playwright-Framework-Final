import * as _ from '@Index';

export class JavaScriptAlerts {
    readonly page: _.Page;
    readonly JSAlertsLink: _.Locator;
    readonly ClickJsAlertButton: _.Locator;
    readonly ClickJsConfirmButton: _.Locator;
    readonly ClickJsPromptButton: _.Locator;
    readonly ResultText: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.JSAlertsLink = page.locator("//a[text()='JavaScript Alerts']");
        this.ClickJsAlertButton = page.locator("//button[text()='Click for JS Alert']");
        this.ClickJsConfirmButton = page.locator("//button[text()='Click for JS Confirm']");
        this.ClickJsPromptButton = page.locator("//button[text()='Click for JS Prompt']");
        this.ResultText = page.locator("//p[@id='result']");
    }


    async ClickJSAlertsLink() {
        await this.JSAlertsLink.scrollIntoViewIfNeeded();
        await this.JSAlertsLink.click();
    }

    async ClickClickJsAlertButton() {
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
        await this.ClickJsAlertButton.click();
    }

    async ClickClickJsConfirmButton() {
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
        await this.ClickJsConfirmButton.click();
        // ----------------
        this.page.once('dialog', async dialog => {
            await dialog.dismiss();
        });
        await this.ClickJsConfirmButton.click();
    }

    async ClickClickJsPromptButton(PromptText: string) {
        this.page.once('dialog', async dialog => {
            await dialog.accept(PromptText);
        });
        await this.ClickJsPromptButton.click();

    }

}