import * as _ from '@Index';
import { FormAuthentication } from '@FormAuthentication.page';

_.test.describe('Form Authentication @ui', () => {
    _.test('Form Authentication', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const formAuth = new FormAuthentication(page);

        await basePage.goToUrl();
        await formAuth.ClickFormAuthLink();
        await formAuth.EnterUsernameTxtField();
        await formAuth.EnterPasswordTxtField();
        await formAuth.ClickLoginButton();
        await _.expect(formAuth.LoginSuccessText).toContainText("You logged into a secure area!");
        await formAuth.ClickLogOutButton();
    });
});
