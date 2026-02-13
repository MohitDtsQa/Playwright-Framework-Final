import * as _ from '@Index';
import { DynamicLoading } from '@DynamicLoading.page';

_.test.describe('Dynamic Loading @ui', () => {
      _.test('Dynamic Loading', async ({ page }) => {
            const basePage = new _.BasePage(page);
            const dynamicLoading = new DynamicLoading(page);

            await basePage.goToUrl();
            // Example 1
            await dynamicLoading.ClickDynamicLoadingLink();
            await dynamicLoading.ClickLoadingExLink1();
            await dynamicLoading.ClickStartButton();

            await dynamicLoading.LoadingBar.waitFor({ state: 'visible' });
            await _.expect(dynamicLoading.LoadingBar).toHaveText('Loading...');
            await dynamicLoading.TextAfterLoading.waitFor({ state: 'visible' });
            await page.waitForTimeout(3000);

            // Example 2
            await page.goBack();
            await dynamicLoading.ClickLoadingExLink2();
            await dynamicLoading.ClickStartButton();
            await dynamicLoading.LoadingBar.waitFor({ state: 'visible' });
            await _.expect(dynamicLoading.LoadingBar).toHaveText('Loading...');
            await dynamicLoading.TextAfterLoading.waitFor({ state: 'visible' });
            await page.waitForTimeout(3000);

      });
});
