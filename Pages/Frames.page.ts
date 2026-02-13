import * as _ from '@Index';

export class Frames {
    readonly page: _.Page;
    readonly FramesLink: _.Locator;
    readonly NestedFramesLink: _.Locator;


    readonly TopFrame = 'frame[name="frame-top"]';
    readonly BottomFrame = 'frame[name="frame-bottom"]';
    readonly LeftFrame = 'frame[name="frame-left"]';
    readonly MiddleFrame = 'frame[name="frame-middle"]';
    readonly RightFrame = 'frame[name="frame-right"]';


    readonly BodyText = '//body';

    constructor(page: _.Page) {
        this.page = page;
        this.FramesLink = page.locator("//a[text()='Frames']");
        this.NestedFramesLink = page.locator("//a[text()='Nested Frames']");
    }

    async ClickFramesLink() {
        await this.FramesLink.click();
    }

    async ClickNestedFramesLink() {
        await this.NestedFramesLink.click();
    }

    async getLeftFrameText() {
        return this.page.frameLocator(this.TopFrame).frameLocator(this.LeftFrame).locator(this.BodyText).textContent();
    }

    async getMiddleFrameText() {
        return this.page.frameLocator(this.TopFrame).frameLocator(this.MiddleFrame).locator(this.BodyText).textContent();
    }

    async getRightFrameText() {
        return this.page.frameLocator(this.TopFrame).frameLocator(this.RightFrame).locator(this.BodyText).textContent();
    }

    async getBottomFrameText() {
        return this.page.frameLocator(this.BottomFrame).locator(this.BodyText).textContent();
    }
}
