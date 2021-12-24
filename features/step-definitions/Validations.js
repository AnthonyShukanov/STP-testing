const { Then } = require('@wdio/cucumber-framework');
const { searchResultPage, scientificActivityPage } = require('../../po/PageMap');

Then(/^Страница должна быть: "(.+)"$/, async (url) => {
    await expect(await browser.getUrl()).toEqual(url);
});

Then(/^Результатов поиска должно быть "(\d+)"$/, async (number) => {
    await expect((await searchResultPage.resultTitles).length).toEqual(number)
})

Then(/^Должен видеть результат: Ничего не найдено$/, async () => {
    await searchResultPage.checkForVisibility() 
})

Then(/^Вижу, что заголовок страницы "(.+)"$/, async(title) => {
    expect(await scientificActivityPage.getPageTitle()).toEqual(title)
})