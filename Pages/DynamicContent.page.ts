import * as _ from '@Index';

export class DynamicContent {
    readonly page: _.Page
    readonly DynamicContentLink: _.Locator;
    readonly ImagesLink: _.Locator;


    constructor(page: _.Page) {
        this.page = page
        this.DynamicContentLink = page.locator("//a[text()='Dynamic Content']");
        this.ImagesLink = page.locator("//img[starts-with(@src,'/img/avatars/Original-Facebook-Geek-Profile-Avatar')]");
    }

    async ClickDynamicContentLink() {
        await this.DynamicContentLink.click();
    }

    async CheckImages() {
        const images = this.ImagesLink;
        const count = await images.count();

        for (let i = 0; i < count; i++) {
            const src = await images.nth(i).getAttribute('src');
            console.log(src);
            const ImageSrc = this.page.locator(`//img[starts-with(@src,'${src!}')]`);
            await ImageSrc.waitFor();
            await ImageSrc.click();
        }
    }

}