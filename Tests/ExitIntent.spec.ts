import * as _ from '@Index';
import { Exitintent } from '@ExitIntent.page';

_.test.describe('Exit Intent @ui', () => {
    _.test('Exit Intent', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const exitIntent = new Exitintent(page);

        await basePage.goToUrl();
        await exitIntent.ClickExitIntentLink();
        await exitIntent.MoveMouseToOutOfViewPort();
        await exitIntent.CloseEntryAdModal();
    });
});
