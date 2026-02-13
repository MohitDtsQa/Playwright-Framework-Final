import * as _ from '@Index';
import { BrokenImages } from '@BrokenImages.page';

_.test.describe('Broken Images @ui', () => {
  _.test('Broken Images', async ({ page }) => {
    const basePage = new _.BasePage(page);
    const brokenImage = new BrokenImages(page);

    await basePage.goToUrl();
    await brokenImage.ClickBrokenImagesLink();
    await brokenImage.CheckBrokenImages();
    await brokenImage.OpenBrokenImageLinks();

  });
});