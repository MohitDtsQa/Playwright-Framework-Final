import * as _ from '@Index';

export class JQueryUiMenus {
    readonly page: _.Page;
    readonly JQueryUiMenusLink: _.Locator;
    readonly EnabledMenuItem: _.Locator;
    readonly DownloadMenuItem: _.Locator;
    readonly PDFMenuButton: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.JQueryUiMenusLink = page.locator("//a[text()='JQuery UI Menus']");
        this.EnabledMenuItem = page.locator("//a[text()='Enabled']");
        this.DownloadMenuItem = page.locator("//a[text()='Downloads']");
        this.PDFMenuButton = page.locator("//a[text()='PDF']");
    }

    async ClickJQueryUiMenusLink() {
        await this.JQueryUiMenusLink.scrollIntoViewIfNeeded();
        await this.JQueryUiMenusLink.click();
    }

    async HoverEnabledMenuItem() {
        await this.EnabledMenuItem.hover();
    }

    async HoverDownloadMenuItem() {
        await this.DownloadMenuItem.hover();
    }

    async ClickPDFMenuButton() {
        await this.PDFMenuButton.click();
    }
}
