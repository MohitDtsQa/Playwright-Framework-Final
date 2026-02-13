import { ChallengingDom } from "@ChallengingDom.page";
import * as _ from '@Index';

_.test.describe('Challenging Dom @ui', () => {
_.test('Challenging Dom', async({page})=>{
    const basePage = new _.BasePage(page);
    const challengingDom = new ChallengingDom(page);

    await basePage.goToUrl();
    await challengingDom.ClickChallengeDomLink();
    await challengingDom.ClickBazButton();
    await challengingDom.ClickBarButton();
    await challengingDom.ClickFooButton();

});
});