import * as _ from '@Index';

export class BrokenImages {
    readonly page: _.Page;
    readonly BrokenImagesLink: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.BrokenImagesLink = page.locator("//a[text()='Broken Images']");
    }

    async ClickBrokenImagesLink() {
        await this.BrokenImagesLink.click();
    }

    async CheckBrokenImages() {
        await this.page.waitForFunction(() =>
            Array.from(document.images).every(img => img.complete)
        );

        const brokenImages = await this.page.$$eval('img', images => images
            .filter(img => img.complete && img.naturalWidth === 0)
            .map(img => img.src)
        );

        return brokenImages;
    }

    async OpenBrokenImageLinks(): Promise<void> {
        const brokenImages = await this.CheckBrokenImages();
        console.log(`Broken images count: ${brokenImages.length}`);

        for (const src of brokenImages) {
            const imgName = src.replace("https://the-internet.herokuapp.com/", "");

            await this.page.locator(`//img[@src="${imgName}"]`).hover();
        }
    }

}