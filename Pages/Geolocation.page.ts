import * as _ from '@Index';

export class Geolocation {
    readonly page: _.Page;
    readonly GeoLocationLink: _.Locator;
    readonly WhereAmIButton: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.GeoLocationLink = page.locator("//a[text()='Geolocation']");
        this.WhereAmIButton = page.locator("//button[text()='Where am I?']");
    }

    async ClickGeoLocationLink() {
        await this.GeoLocationLink.scrollIntoViewIfNeeded();
        await this.GeoLocationLink.click()
    }

    async ClickWhereAmIButton() {
        await this.WhereAmIButton.click();
    }

}