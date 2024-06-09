const { test, expect } = require('@playwright/test');
//const { Imglyeditorpage } = require ('../pages/page.js');

test('clicking on image asset library', async ({ page }) => {
    //const imglyeditorPage = new Imglyeditorpage();
    const load_locator = page.locator('div > div > div.UBQ_Theme-module__block--sJF92.UBQ_GlobalStyles-module__block--zGWhl > div > div > div > div > div > div:nth-child(2) > h2');
    const image_library = page.locator('div > div > div.UBQ_Theme-module__block--sJF92.UBQ_GlobalStyles-module__block--zGWhl > div > div.UBQ_Editor-module__body--Pwi6o > div.UBQ_Dock-module__block--yQhta.UBQ_AssetLibraryDock-module__block--Cgfpm.UBQ_Editor-module__dock--DOhMf.UBQ_Dock-module__big--oyiIY > div:nth-child(2) > button:nth-child(3)');
    const searchbox = page.locator('#ubq-portal-container_panelLeft > div > div > div > div > div.UBQ_AssetLibrarySearch-module__block--mcAtt > div > input')
    const image = page.locator('#ubq-portal-container_panelLeft > div > div > div > div > div.UBQ_AssetLibraryContent-module__block--SroUk > div > div > div:nth-child(2) > div > div.UBQ_AssetLibrarySection-module__paginationContainer--4-kTI');
    const images_box = page.locator('#ubq-portal-container_panelLeft > div > div > div > div > div.UBQ_AssetLibraryContent-module__block--SroUk > div > div > div:nth-child(2) > div > div.UBQ_AssetLibrarySection-module__paginationContainer--4-kTI > div');
    const image_in_editor = page.locator('div > div > div.UBQ_Theme-module__block--sJF92.UBQ_GlobalStyles-module__block--zGWhl > div > div.UBQ_Editor-module__body--Pwi6o > div.UBQ_Editor-module__canvasViewport--URkpK > div.UBQ_Editor-module__canvasContainer--oG4y4 > div.UBQ_ShortcutScope-module__block---dZny.UBQ_Canvas-module__block--Es62A > div.UBQ_box-module__block--n0qcC.UBQ_box-module__nonPageBoxShadow--LmEpP');
    //await Imglyeditorpage.goto();
    await page.goto('https://ubique.img.ly/main/apps/cesdk_web/web/index.html');
    await expect(load_locator).toBeHidden();
    await page.getByText('Images').click();
    await expect(searchbox).toBeVisible();
    await expect(image_library).toBeVisible();
    await expect(images_box).toBeVisible();
    await page.locator('#ubq-portal-container_panelLeft > div > div > div > div > div.UBQ_AssetLibraryContent-module__block--SroUk > div > div > div:nth-child(2) > div > div.UBQ_AssetLibrarySection-module__paginationContainer--4-kTI > div > div > div:nth-child(2)').click();
    //await page.waitForTimeout(2000);
    await expect(image_in_editor).toBeVisible();
});