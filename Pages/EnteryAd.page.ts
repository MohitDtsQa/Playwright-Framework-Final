import * as _ from '@Index';

export class EntryAd {
      readonly page: _.Page;
      readonly EntryAdLink: _.Locator;
      readonly CloseButton: _.Locator;
      readonly ModalWindow: _.Locator;


      constructor(page: _.Page) {
            this.page = page;
            this.EntryAdLink = page.locator("//a[text()='Entry Ad']");
            this.CloseButton = page.locator("//p[text()='Close']");
            this.ModalWindow = page.locator("//div[@class='modal-title']");
      }

      async ClickEntryAdLink() {
            await this.EntryAdLink.click();
      }

      async CloseEntryAdModal() {
            await _.expect(this.ModalWindow).toBeVisible();
            await this.CloseButton.click();
            await _.expect(this.ModalWindow).toBeHidden();
      }

}
