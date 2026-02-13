import * as _ from '@Index';
import { Geolocation } from '@Geolocation.page';

_.test.describe('Geolocation @ui', () => {
    _.test('Geolocation', async ({ browser }) => {
        const context = await browser.newContext({
            permissions: ['geolocation'],
            geolocation: { latitude: 0, longitude: 0 }
        });
        const page = await context.newPage();

        const basePage = new _.BasePage(page);
        const geoLocation = new Geolocation(page);

        await basePage.goToUrl();
        await geoLocation.ClickGeoLocationLink();
        await geoLocation.ClickWhereAmIButton();
    });
});
