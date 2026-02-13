import * as _ from '@Index';

export class FileUpload {
    readonly page: _.Page;
    readonly FileUploadLink: _.Locator;
    readonly FileUploadField: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.FileUploadLink = page.locator("//a[text()='File Upload']");
        this.FileUploadField = page.locator("//input[@id='file-upload']");
    }

    async ClickFileUploadLink() {
        await this.FileUploadLink.click();
    }

    // async EnterFileUploadField(){
    //     await this.FileUploadField.setInputFiles("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUhKRLGwTNsnrejbf0xhvsf86M-Ekq_AfIs6gHcJzDRu7vh6F");
    // }

    async EnterFileUploadField() {
        const response = await this.page.request.get(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUhKRLGwTNsnrejbf0xhvsf86M-Ekq_AfIs6gHcJzDRu7vh6F'
        );

        await this.FileUploadField.setInputFiles({
            name: 'image.png',
            mimeType: 'image/png',
            buffer: await response.body(),
        });
    }


}