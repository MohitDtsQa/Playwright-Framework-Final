import * as _ from '@Index';

export class InfiniteScroll {
    readonly page: _.Page;
    readonly InfiniteScrollLink: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.InfiniteScrollLink = page.locator("//a[text()='Infinite Scroll']");
    }

    async ClickInfiniteScrollLink() {
        await this.InfiniteScrollLink.scrollIntoViewIfNeeded();
        await this.InfiniteScrollLink.click();
    }

    async PageDownScroll() {
        let prevHeight = 0;

        // while (this.page.locator("//small[text()='Loading...']").isVisible()) {
        for (let i = 0; i < 5; i++) {
            console.log('Scrolling down the page');
            const currHeight = await this.page.evaluate(() => document.body.scrollHeight);
            if (currHeight === prevHeight) break;

            prevHeight = currHeight;
            await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
            await this.page.waitForTimeout(800);

        }

    }


}