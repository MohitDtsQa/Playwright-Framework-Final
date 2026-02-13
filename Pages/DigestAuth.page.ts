import * as _ from '@Index';

export class DigestAuth {
    readonly page: _.Page;
    readonly DigestAuthLink: _.Locator;
    readonly getIdPass: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.DigestAuthLink = page.locator("//a[text()='Digest Authentication']");
        this.getIdPass = page.locator("//a[text()='Digest Authentication']/parent::li");
    }

    async GetIdPass() {
        const idPass = await this.getIdPass.textContent();
        console.log("IdPass:", idPass);
        const match = idPass?.match(/Basic Auth \(user and pass:\s*(.+?)\)/);
        const id = match?.[1];
        console.log("Extracted:", id);
    }
    
    async ClickDigestAuthLink(){
        await this.DigestAuthLink.click();
    }
}