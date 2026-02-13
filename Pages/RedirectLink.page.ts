import * as _ from '@Index';

export class RedirectLink {
    readonly page: _.Page;
    readonly RedirectLinkLink: _.Locator;
    readonly ClickHereLink: _.Locator;
    readonly PageTitle: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.RedirectLinkLink = page.locator("//a[text()='Redirect Link']");
        this.ClickHereLink = page.locator("//a[text()='here']");
        this.PageTitle = page.locator("//div[@class='example']/h3");
    }

    async ClickRedirectLinkLink() {
        await this.RedirectLinkLink.scrollIntoViewIfNeeded();
        await this.RedirectLinkLink.click();
    }

    async ClickHereToRedirect() {
        await this.ClickHereLink.click();
        await this.page.waitForLoadState('load');
        await this.page.goBack();
    }

}