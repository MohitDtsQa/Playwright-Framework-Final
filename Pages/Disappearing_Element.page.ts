import * as _ from '@Index';

export class DisappearingElement {
    readonly page: _.Page;
    readonly DisappearingElementLink: _.Locator;
    readonly GalleryButton: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.DisappearingElementLink = page.locator("//a[text()='Disappearing Elements']");
        this.GalleryButton = page.locator("//a[text()='Gallery']/parent::li");
    }

    async ClickDisappearingElementLink() {
        await this.DisappearingElementLink.click();
    }

    async ClickGalleryButton() {
        do {
            await this.page.reload();
        } while (!(await this.GalleryButton.isVisible()));

        await this.GalleryButton.click();
    }

}