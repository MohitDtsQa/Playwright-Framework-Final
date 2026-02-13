import * as _ from '@Index';
import { DragAndDrop } from '@DragAndDrop.page';

_.test.describe('Drag and Drop @ui', () => {
_.test('Drag and Drop', async({page})=>{
    const basePage = new _.BasePage(page);
    const dragAndDrop = new DragAndDrop(page);

    await basePage.goToUrl();
    await dragAndDrop.ClickDragAndDropLink();
    await dragAndDrop.DragAndDrop();
    await dragAndDrop.DragAndDrop();
});
});