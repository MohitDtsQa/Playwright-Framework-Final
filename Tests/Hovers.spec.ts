import * as _ from '@Index';
import { Hovers } from '@Hovers.page';

_.test.describe('Hovers @ui', () => {
    _.test('Hovers', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const hovers = new Hovers(page);

        await basePage.goToUrl();
        await hovers.ClickHoversLink();
        await hovers.HoverBlankImages();
    });
});
