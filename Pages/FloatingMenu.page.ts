import * as _ from '@Index';

export class FloatingMenu {
    readonly page: _.Page;
    readonly FloatingMenuLink: _.Locator;
    readonly HomeButton: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.FloatingMenuLink = page.locator("//a[text()='Floating Menu']");
        this.HomeButton = page.locator("//a[text()='Home']");
    }

    async ClickFloatingMenuLink() {
        await this.FloatingMenuLink.click();
    }

    async ClickHomeButton() {
        await this.page.mouse.wheel(0, 1000);
        await this.HomeButton.click();
    }


}