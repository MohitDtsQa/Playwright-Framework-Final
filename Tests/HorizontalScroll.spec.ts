import * as _ from '@Index';
import { HorizontalScroll } from '@HorizontalScroll.page';

_.test.describe('Horizontal Scroll @ui', () => {
    _.test('Horizontal Scroll', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const horizontalScroll = new HorizontalScroll(page);

        await basePage.goToUrl();
        await horizontalScroll.ClickHorizontalScrollLink();
        await horizontalScroll.SetRange();
    });
});