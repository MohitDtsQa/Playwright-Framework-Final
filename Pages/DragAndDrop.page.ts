import * as _ from '@Index';

export class DragAndDrop{
    readonly page: _.Page;
    readonly DragAndDropLink: _.Locator;
    readonly ContainerA: _.Locator;
    readonly ContainerB: _.Locator;


    constructor(page: _.Page){
        this.page = page;
        this.DragAndDropLink = page.locator("//a[text()='Drag and Drop']");
        this.ContainerA = page.locator("//div[@id='column-a']");
        this.ContainerB = page.locator("//div[@id='column-b']");

    }

    async ClickDragAndDropLink(){
        await this.DragAndDropLink.click();
    }

    async DragAndDrop(){
        await this.ContainerA.dragTo(this.ContainerB);
    }
}