import * as _ from '@Index';

export class DynamicLoading{
      readonly page: _.Page;
      readonly DynamicLoadingLink: _.Locator;
      readonly LoadingExLink1: _.Locator;
      readonly StartButton: _.Locator;
      readonly LoadingBar: _.Locator;
      readonly TextAfterLoading: _.Locator;
      readonly LoadingExLink2: _.Locator;


      constructor(page: _.Page){
            this.page = page;
            this.DynamicLoadingLink = page.locator("//a[text()='Dynamic Loading']");
            this.LoadingExLink1 = page.locator("//a[@href='/dynamic_loading/1']");
            this.StartButton = page.locator("//button[text()='Start']");
            this.LoadingBar = page.locator("//div[@id='loading']");
            this.TextAfterLoading = page.locator("//h4[text()='Hello World!']");
            this.LoadingExLink2 = page.locator("//a[@href='/dynamic_loading/2']");
      }

      async ClickDynamicLoadingLink(){
            await this.DynamicLoadingLink.click();
      }

      async ClickLoadingExLink1(){
            await this.LoadingExLink1.click();
      }
      
      async ClickStartButton(){
            await this.StartButton.click();
      }

      async ClickLoadingExLink2(){
            await this.LoadingExLink2.click();
      }

}