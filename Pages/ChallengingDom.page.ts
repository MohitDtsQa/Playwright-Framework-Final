import * as _ from '@Index';

export class ChallengingDom {
    readonly page: _.Page;
    readonly ChallengeDomLink: _.Locator;
    readonly BazButton: _.Locator;
    readonly BarButton: _.Locator;
    readonly FooButton: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.ChallengeDomLink = page.locator("//a[text()='Challenging DOM']");
        this.BazButton = page.locator("//a[@class='button']");
        this.BarButton = page.locator("//a[@class='button alert']");
        this.FooButton = page.locator("//a[@class='button success']");
    }

    async ClickChallengeDomLink() {
        await this.ChallengeDomLink.click();
    }

    async ClickBazButton() {
        await this.BazButton.click();
    }

    async ClickBarButton() {
        await this.BarButton.click();
    }

    async ClickFooButton() {
        await this.FooButton.click();
    }

}