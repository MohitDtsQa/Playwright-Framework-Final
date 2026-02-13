import * as _ from '@Index';

export class Exitintent {
    readonly page: _.Page;
    readonly ExitIntentLink: _.Locator;
    readonly CloseButton: _.Locator;
    readonly ModalWindow: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.ExitIntentLink = page.locator("//a[text()='Exit Intent']");
        this.CloseButton = page.locator("//p[text()='Close']");
        this.ModalWindow = page.locator("//div[@class='modal-title']");
    }

    async ClickExitIntentLink() {
        await this.ExitIntentLink.click();
    }

    async MoveMouseToOutOfViewPort(){
        await this.page.mouse.click(10, 10);
        await this.page.mouse.move(10, 40);
        await this.page.mouse.move(-50, -50);
    }

    async CloseEntryAdModal() {
        await _.expect(this.ModalWindow).toBeVisible();
        await this.CloseButton.click();
        await _.expect(this.ModalWindow).toBeHidden();
    }
}