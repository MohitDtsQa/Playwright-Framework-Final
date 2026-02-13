import * as _ from '@Index';
import { Download } from '@playwright/test';

export class Downloadings {
  readonly page: _.Page;
  readonly downloadPromise: Promise<Download>;

  constructor(page: _.Page, downloadPromise: Promise<Download>) {
    this.page = page;
    this.downloadPromise = downloadPromise;
  }

  async Downloadings() {
    const download = await this.downloadPromise;
    const configuredFolder = process.env.DOWNLOAD_URL?.trim();
    const folder = configuredFolder
      ? (_.path.isAbsolute(configuredFolder)
        ? configuredFolder
        : _.path.resolve(process.cwd(), configuredFolder))
      : _.path.resolve(process.cwd(), 'DownloadedFiles');

    await _.fs.promises.mkdir(folder, { recursive: true });

    const filePath = _.path.join(folder, download.suggestedFilename());
    await download.saveAs(filePath);
    console.log(`Downloaded file saved: ${filePath}`);
  }
}
