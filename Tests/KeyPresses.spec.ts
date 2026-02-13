import * as _ from '@Index';
import { KeyPresses } from '@KeyPresses.page';

_.test.describe('Key Presses @ui', () => {
    _.test('Key Presses', async ({ page }) => {

        const basePage = new _.BasePage(page);
        const keyPresses = new KeyPresses(page);

        await basePage.goToUrl();
        await keyPresses.ClickKeyPressesLink();
        await keyPresses.EnterTabPress('Tab');
        await _.expect(keyPresses.ResultText).toHaveText(/You entered: TAB/);
        await keyPresses.EnterCharcterPress('M');
        await _.expect(keyPresses.ResultText).toHaveText(/You entered: M/);
    });
});
