import * as _ from '@Index';

export class ContextMenu {
    readonly page: _.Page;
    readonly ContextMenuLink: _.Locator;
    readonly DottedBox: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.ContextMenuLink = page.locator("//a[text()='Context Menu']");
        this.DottedBox = page.locator("//div[@id='hot-spot']");
    }

    async ClickContextMenuLink() {
        await this.ContextMenuLink.click();
    }

    async RightClickDottedBox() {
        await this.DottedBox.click({ button: 'right' });
    }

    async AcceptDialogBox(page: _.Page) {
        page.once('dialog', dialog => {
            console.log(`Dialog: ${dialog.type()} - ${dialog.message()}`);
            dialog.accept();  // Accept the dialog
        });
    }
}