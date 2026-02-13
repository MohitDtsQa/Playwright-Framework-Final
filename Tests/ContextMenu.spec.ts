import { ContextMenu } from '@ContextMenu.page';
import * as _ from '@Index';

_.test.describe('Context Menu @ui', () => {
    _.test('Context Menu', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const contextMenu = new ContextMenu(page);

        await basePage.goToUrl();
        await contextMenu.ClickContextMenuLink();
        page.once('dialog', dialog => {
            console.log(`Dialog: ${dialog.type()} - ${dialog.message()}`);
            dialog.accept();  // Accept the dialog
        });
        await contextMenu.RightClickDottedBox();

    });
});