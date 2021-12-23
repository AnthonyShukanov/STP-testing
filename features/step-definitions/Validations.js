const { Then } = require('@wdio/cucumber-framework');
const { searchResultPage } = require('../../po/PageMap');

Then(/^Страница должна быть: "(.+)"$/, async (url) => {
    expect(await browser.getUrl()).toEqual(url);
});

Then(/^Результатов поиска должно быть "(\d+)"$/, async (number) => {
    expect(searchResultPage.resultTitles.length).toEqual(number)
})

Then(/^Должен видеть $/, async () => {

})