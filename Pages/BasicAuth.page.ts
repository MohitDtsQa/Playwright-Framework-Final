import * as _ from '@Index';
import { highlight } from '@Index';

export class BasicAuth {
    readonly page: _.Page;
    readonly BasicAuthLink: _.Locator;
    readonly getIdPass: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.BasicAuthLink = page.locator("//a[text()='Basic Auth']");
        this.getIdPass = page.locator("//a[text()='Basic Auth']/parent::li");
    }

    async ClickBasicAuthLink() {
        await this.BasicAuthLink.click();
    }

    async GetIdPass() {
        const IdPass = await this.getIdPass.textContent();
        const Id = IdPass?.match(/Basic Auth (user and pass: (.+?))/);
        console.log(IdPass);
        console.log(Id);
    }

}