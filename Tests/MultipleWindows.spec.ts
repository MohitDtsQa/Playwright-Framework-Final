import * as _ from '@Index';
import { MultipleWindows } from '@MultipleWindows.page';

_.test.describe('Multiple Windows Handle @ui', () => {
    _.test('Handle Multiple Windows', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const multipleWindows = new MultipleWindows(page);

        await basePage.goToUrl();
        await multipleWindows.ClickMultipleWindowsLink();

        const [newTab] = await Promise.all([
            page.context().waitForEvent('page'),
            multipleWindows.ClickHereToOpenNewWindow()
        ]);

        await newTab.waitForLoadState();
        await newTab.close();
        await page.bringToFront();
    });
});
