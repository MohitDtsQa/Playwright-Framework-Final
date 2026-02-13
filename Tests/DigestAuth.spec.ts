import { DigestAuth } from "@DigestAuth.page";
import * as _ from '@Index';

_.test.describe('Digest Auth @ui', () => {
    _.test('Digest Auth', async ({ browser }) => {
        const Login = _.useData('Login');

        const context = await browser.newContext({
            httpCredentials: {
                username: Login.username,
                password: Login.password,
            },
        });
        const page = await context.newPage();

        const basePage = new _.BasePage(page);
        const digestAuth = new DigestAuth(page);

        await basePage.goToUrl();
        await digestAuth.GetIdPass();
        await digestAuth.ClickDigestAuthLink();

    });
});