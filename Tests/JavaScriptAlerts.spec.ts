import * as _ from '@Index';
import { JavaScriptAlerts } from '@JavaScriptAlerts.page';

_.test.describe('Javascript Alert @ui', () => {
  _.test('JavaScript Alert', async ({ page }) => {

    const basePage = new _.BasePage(page);
    const jsAlerts = new JavaScriptAlerts(page);

    await basePage.goToUrl();
    await jsAlerts.ClickJSAlertsLink();
    await jsAlerts.ClickClickJsAlertButton();
    await _.expect(jsAlerts.ResultText).toHaveText(/You successfully clicked an alert/);
    await jsAlerts.ClickClickJsConfirmButton();
    await _.expect(jsAlerts.ResultText).toHaveText(/You clicked: (Ok|Cancel)/);
    await jsAlerts.ClickClickJsPromptButton('Playwright automation testing');
    await _.expect(jsAlerts.ResultText).toHaveText(/You entered: Playwright automation testing/);

  });
});
