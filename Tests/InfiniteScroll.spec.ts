import * as _ from '@Index';
import { InfiniteScroll } from '@InfiniteScroll.page';

_.test.describe('Infinite Scroll @ui', () => {
_.test('Infinite Scroll', async({page})=>{
    const basePage = new _.BasePage(page);
    const infiniteScroll = new InfiniteScroll(page);

    await basePage.goToUrl();
    await infiniteScroll.ClickInfiniteScrollLink();
    await infiniteScroll.PageDownScroll();
});
});
