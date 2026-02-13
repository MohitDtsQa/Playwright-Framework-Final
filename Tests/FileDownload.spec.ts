import * as _ from '@Index';
import { FileDownload } from '@FileDownload.page';

_.test.describe('File Download @ui', () => {
    _.test('File Download', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const fileDownload = new FileDownload(page);

        await basePage.goToUrl();
        await fileDownload.ClickFileDownloadLink();
        await fileDownload.ClickStartDownloadLinks();
    });
});
