import * as _ from '@Index';
import { RedirectLink } from '@RedirectLink.page';

_.test.describe('Notification Messages @ui', () => {
    _.test('Notification Messages', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const redirectLink = new RedirectLink(page);

        await basePage.goToUrl();
        await redirectLink.ClickRedirectLinkLink();
        await redirectLink.ClickHereToRedirect();
        await _.expect(redirectLink.PageTitle).toHaveText('Redirection');
    });
});
