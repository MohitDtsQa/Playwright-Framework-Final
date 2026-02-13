import * as _ from '@Index';
import { Downloadings } from '@Fixtures/Downloadings';

export class FileDownload {
    readonly page: _.Page;
    readonly FileDownloadLink: _.Locator;
    readonly StartDownloadLink: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.FileDownloadLink = page.locator("//a[text()='File Download']");
        this.StartDownloadLink = page.locator("//a[starts-with(@href,'download/')]");
    }

    async ClickFileDownloadLink() {
        await this.FileDownloadLink.click();
    }

    async ClickStartDownloadLinks() {
        for (let i = 0; i <= 3; i++) {
            await this.StartDownloadLink.nth(i).scrollIntoViewIfNeeded();
            await this.StartDownloadLink.nth(i).highlight();
            const downloadPromise = this.page.waitForEvent('download');

            await this.StartDownloadLink.nth(i).click();

            const downloading = new Downloadings(this.page, downloadPromise);
            await downloading.Downloadings();
        }
    }

}
