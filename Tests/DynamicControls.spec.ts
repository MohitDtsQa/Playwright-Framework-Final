import * as _ from '@Index';
import { DynamicControls } from '@DynamicControls.page';

_.test.describe('Dynamic Controls @ui', () => {
      _.test('Dynamic Controls', async ({ page }) => {
            const basePage = new _.BasePage(page);
            const dynamicControls = new DynamicControls(page);

            await basePage.goToUrl();
            await dynamicControls.ClickDynamicControlsLink();
            // CheckBox
            await dynamicControls.ClickCheckBox();
            await dynamicControls.ClickRemoveButton();
            await _.expect(dynamicControls.LoadingBar).toBeHidden();
            await dynamicControls.ClickAddButton();
            await _.expect(dynamicControls.MessageText).toHaveText("It's back!");
            await dynamicControls.ClickCheckBox();
            await dynamicControls.ClickRemoveButton();
            // TextField
            await page.reload();
            await dynamicControls.ClickEnableButton();
            await _.expect(dynamicControls.MessageText).toHaveText("It's enabled!");
            await dynamicControls.EnterTextField("Text");
            await dynamicControls.ClickDisableButton();
            await _.expect(dynamicControls.MessageText).toHaveText("It's disabled!");

      });
});