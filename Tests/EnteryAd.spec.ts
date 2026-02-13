import * as _ from '@Index';
import { EntryAd } from '@EnteryAd.page';

_.test.describe('Entry Ad @ui', () => {
      _.test('Entry Ad', async ({ page }) => {
            const basePage = new _.BasePage(page);
            const entryAd = new EntryAd(page);

            await basePage.goToUrl();
            await entryAd.ClickEntryAdLink();
            await entryAd.CloseEntryAdModal();
      });
});