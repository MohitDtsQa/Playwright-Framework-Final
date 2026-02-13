import * as _ from '@Index';
import { BasicAuth } from '@BasicAuth.page';

_.test.describe('Basic Auth @ui', () => {
_.test('Basic Auth', async ({ browser }) => {
    const Login = _.useData('Login');

    const context = await browser.newContext({
        httpCredentials: {
            username: process.env.AUTH_USERNAME!,
            password: process.env.AUTH_PASSWORD!,
        },
    });
    const page = await context.newPage();

    const basePage = new _.BasePage(page);
    const basicAuth = new BasicAuth(page);

    await basePage.goToUrl();
    await basicAuth.GetIdPass();
    await basicAuth.ClickBasicAuthLink();

});
});