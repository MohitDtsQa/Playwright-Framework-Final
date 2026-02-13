import * as _ from '@Index';
import { DynamicContent } from '@DynamicContent.page';

_.test.describe('Dynamic Content @ui', () => {
    _.test('Dynamic Content', async ({ page, testDirectories }) => {
        const basePage = new _.BasePage(page);
        const dynamicContent = new DynamicContent(page);

        await basePage.goToUrl();
        await dynamicContent.ClickDynamicContentLink();
        await dynamicContent.CheckImages();
        await page.captureScreenshot('Check Images_1');
    });
});