import * as _ from '@Index';
import { CheckBoxes } from '@CheckBoxes.page';

_.test.describe('CheckBoxes @ui', () => {
    _.test('CheckBoxes', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const checkBoxes = new CheckBoxes(page);

        await basePage.goToUrl();
        await checkBoxes.ClickCheckBoxesLink();
        await checkBoxes.CheckCheckBox();
        await checkBoxes.UncheckCheckBox();

    });
});