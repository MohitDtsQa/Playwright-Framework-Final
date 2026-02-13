import * as _ from '@Index';
import { DisappearingElement } from '@Disappearing_Element.page';

_.test.describe('Disappearing Elements @ui', () => {
    _.test('Disappearing Elements', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const disappearingEle = new DisappearingElement(page);

        await basePage.goToUrl();
        await disappearingEle.ClickDisappearingElementLink();
        await page.reload();
        await disappearingEle.ClickGalleryButton();
        await page.goBack();

    });
});