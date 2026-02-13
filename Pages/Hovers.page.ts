import * as _ from '@Index';

export class Hovers {
    readonly page: _.Page;
    readonly HoversLink: _.Locator;
    readonly blankImages: _.Locator;
    readonly userNameGet: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.HoversLink = page.locator("//a[text()='Hovers']");
        this.blankImages = page.locator("//img[@src='/img/avatar-blank.jpg']");
        this.userNameGet = page.locator("//h5[starts-with(text(),'name: ')]");
    }

    async ClickHoversLink() {
        await this.HoversLink.scrollIntoViewIfNeeded();
        await this.HoversLink.click();
    }

    async HoverBlankImages() {
        var TotalBlankImages = await this.blankImages.count();
        console.log(TotalBlankImages);

        for (var i = 0; i < TotalBlankImages; i++) {
            await this.blankImages.nth(i).hover();

            console.log(await this.userNameGet.nth(i).textContent());
        }
    }

}