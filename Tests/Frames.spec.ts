import * as _ from '@Index';
import { Frames } from '@Frames.page';

_.test.describe('Nested Frames @ui', () => {
    _.test('Nested Frames', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const frames = new Frames(page);

        await basePage.goToUrl();
        await frames.ClickFramesLink();
        await frames.ClickNestedFramesLink();

        const left = await frames.getLeftFrameText();
        const middle = await frames.getMiddleFrameText();
        const right = await frames.getRightFrameText();
        const bottom = await frames.getBottomFrameText();

        console.log('LEFT:', left);
        console.log('MIDDLE:', middle);
        console.log('RIGHT:', right);
        console.log('BOTTOM:', bottom);
    });
});
