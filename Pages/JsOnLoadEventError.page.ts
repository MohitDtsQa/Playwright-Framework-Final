import * as _ from '@Index';

export class JsOnLoadEventError {

    readonly page: _.Page;
    readonly JsOnLoadEventErrorLink: _.Locator;
    readonly JsOnLoadEventError: _.Locator;

    constructor(page: _.Page) {
        this.page = page;
        this.JsOnLoadEventErrorLink = page.locator("//a[text()='JavaScript onload event error']");
        this.JsOnLoadEventError = page.locator("//*[@onload='loadError()']");
    }

    async ClickJsOnLoadEventErrorLink() {
        await this.JsOnLoadEventErrorLink.scrollIntoViewIfNeeded();
        await this.JsOnLoadEventErrorLink.click();
    }

    async VerifyJsOnLoadEventError() {
        const CountJsOnLoadEventError = await this.JsOnLoadEventError.count();

        console.log("Total Load Event Errors: ", CountJsOnLoadEventError);

        if (CountJsOnLoadEventError !== 0) {
            console.log("\nListing Load Event Errors: ");
            for (let i = 0; i < CountJsOnLoadEventError; i++) {
                const JsOnLoadEventErrorElement = this.JsOnLoadEventError.nth(i);
                console.log(JsOnLoadEventErrorElement);
            }
        }
        else {
            console.log("\nNo Load Event Errors found.");
        }
    }
}