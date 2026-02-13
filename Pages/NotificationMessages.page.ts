import * as _ from '@Index';

export class NotificationMessages {
    readonly page: _.Page;
    readonly NotificationMessagesLink: _.Locator;
    readonly ClickHereLink: _.Locator;
    readonly SuccessText: _.Locator;
    readonly CloseButton: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.NotificationMessagesLink = page.locator("//a[text()='Notification Messages']");
        this.ClickHereLink = page.locator("//a[text()='Click here']");
        this.SuccessText = page.locator("//div[contains(text(),'Action successful')]");
        this.CloseButton = page.locator("//a[text()='×']");
    }

    async ClickNotificationMessagesLink() {
        await this.NotificationMessagesLink.scrollIntoViewIfNeeded();
        await this.NotificationMessagesLink.click();
    }

    async ClickHereToShowMessages() {
        do {
            await this.ClickHereLink.click();
        } while (!(await this.SuccessText.isVisible()));

        await this.SuccessText.hover();
        await this.page.addStyleTag({
            content: "img[alt='Fork me on GitHub'] { pointer-events: none !important; }",
        });
        await this.CloseButton.click();

    }

}