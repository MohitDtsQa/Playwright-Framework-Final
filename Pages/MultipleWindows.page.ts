import * as _ from '@Index';

export class MultipleWindows {
    readonly page: _.Page;
    readonly MultipleWindowsLink: _.Locator;
    readonly ClickHereLink: _.Locator;
    readonly NewWindowText: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.MultipleWindowsLink = page.locator("//a[text()='Multiple Windows']");
        this.ClickHereLink = page.locator("//a[text()='Click Here']");
        this.NewWindowText = page.locator("//h3[text()='New Window']");
    }

    async ClickMultipleWindowsLink() {
        await this.MultipleWindowsLink.scrollIntoViewIfNeeded();
        await this.MultipleWindowsLink.click();
    }

    async ClickHereToOpenNewWindow() {
        await this.ClickHereLink.click();
    }

    async GetNewWindowText() {
        return await this.NewWindowText.textContent();
    }

}