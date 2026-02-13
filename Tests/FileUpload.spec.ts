import * as _ from '@Index';
import { FileUpload } from '@FileUpload.page';

_.test.describe('File Upload @ui', () => {
    _.test('File Upload', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const fileUpload = new FileUpload(page);

        await basePage.goToUrl();
        await fileUpload.ClickFileUploadLink();
        await fileUpload.EnterFileUploadField();

    });
});