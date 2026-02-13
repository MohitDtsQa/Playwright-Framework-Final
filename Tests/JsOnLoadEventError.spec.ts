import * as _ from '@Index';
import { JsOnLoadEventError } from '@JsOnLoadEventError.page';

_.test.describe('JS Onload Event Error @ui', () => {
    _.test('JavaScript Onload Event Error', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const jsOnLoadEventError = new JsOnLoadEventError(page);

        await basePage.goToUrl();
        await jsOnLoadEventError.ClickJsOnLoadEventErrorLink();
        await jsOnLoadEventError.VerifyJsOnLoadEventError();

    });
});
