import { Page } from '@playwright/test';
export class Imglyeditorpage {

    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('#ubq-portal-container_panelLeft > div > div > div > div > div.UBQ_AssetLibrarySearch-module__block--mcAtt > div > input');
    }

    static async goto() {
        await this.page.goto('https://ubique.img.ly/main/apps/cesdk_web/web/index.html');
    }
}