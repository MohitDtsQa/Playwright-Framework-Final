import * as _ from '@Index';
import { NotificationMessages } from '@NotificationMessages.page';

_.test.describe('Notification Messages @ui', () => {
    _.test('Notification Messages', async ({ page }) => {
        const basePage = new _.BasePage(page);
        const notificationMessages = new NotificationMessages(page);

        await basePage.goToUrl();
        await notificationMessages.ClickNotificationMessagesLink();
        await notificationMessages.ClickHereToShowMessages();
    });
});
