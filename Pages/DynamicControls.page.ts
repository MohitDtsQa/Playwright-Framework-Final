import * as _ from '@Index';

export class DynamicControls{
      readonly page: _.Page;
      readonly DynamicControlsLink: _.Locator;
      readonly CheckBox: _.Locator;
      readonly RemoveAddButton: _.Locator;
      readonly MessageText: _.Locator;
      readonly LoadingBar: _.Locator;
      readonly TextField: _.Locator;
      readonly EnableDisableButton: _.Locator;

      constructor(page: _.Page){
            this.page = page;
            this.DynamicControlsLink = page.locator("//a[text()='Dynamic Controls']");
            this.CheckBox = page.locator("//input[@type='checkbox']");
            this.RemoveAddButton = page.locator("//h4[text()='Enable/disable']/preceding::button[@type='button']");
            this.MessageText = page.locator("//p[@id='message']");
            this.LoadingBar = page.locator("//div[@id='loading']");
            this.TextField = page.locator("//input[@type='text']");
            this.EnableDisableButton = page.locator("//h4[text()='Enable/disable']/following::button[@type='button']");
      }

      async ClickDynamicControlsLink(){
            await this.DynamicControlsLink.click();
      }

      async ClickCheckBox(){
            await this.CheckBox.check();
      }

      async ClickRemoveButton(){
            await this.RemoveAddButton.click();
      }

      async ClickAddButton(){
            await this.RemoveAddButton.click();
            
      }

      async ClickEnableButton(){
            if(this.TextField.isDisabled!){
                  await this.EnableDisableButton.click();
            }
      }

      async EnterTextField(Text: string){
            await this.TextField.fill(Text);
      }

      async ClickDisableButton(){
            await this.EnableDisableButton.click();
      }


}