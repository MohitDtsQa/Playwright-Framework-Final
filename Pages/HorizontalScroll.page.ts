import * as _ from '@Index';

export class HorizontalScroll {
    readonly page: _.Page;
    readonly HorizontalScrollLink: _.Locator;
    readonly Range: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.HorizontalScrollLink = page.locator("//a[text()='Horizontal Slider']");
        this.Range = page.locator("//input[@type='range']");
    }

    async ClickHorizontalScrollLink() {
        await this.HorizontalScrollLink.click();
    }

    async SetRange() {
        await this.Range.focus();

        for (let i = 0; i < 2; i++) {
            await this.page.keyboard.press('ArrowRight');
        }
    }


}