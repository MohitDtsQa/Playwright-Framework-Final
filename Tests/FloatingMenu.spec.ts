import * as _ from '@Index';
import { FloatingMenu } from '@FloatingMenu.page';

_.test.describe('Floating Menu @ui', () => {
    _.test('Floating Menu', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const floatingMenu = new FloatingMenu(page);

        await basePage.goToUrl();
        await floatingMenu.ClickFloatingMenuLink();
        await floatingMenu.ClickHomeButton();

    });
});
