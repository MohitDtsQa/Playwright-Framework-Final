import * as _ from '@Index';
import { DropDown } from '@DropDown.page';

_.test.describe('Drop Down @ui', () => {
_.test('Drop Down', async({page})=>{
    const basePage = new _.BasePage(page);
    const dropDown = new DropDown(page);

    await basePage.goToUrl();
    await dropDown.ClickDropDownLink();
    await dropDown.ClickDropDownField();
});
});
