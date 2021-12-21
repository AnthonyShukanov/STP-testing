const { Given, When, Then } = require('@wdio/cucumber-framework');
const { mainPage } = require('../../po/PageMap');


Given(/^Я открыл "(.+)" страницу$/, async (page) => {
    await mainPage.open(page)
});

When(/^Я пишу "(.+)" в поле поиска$/, async (text) => {
    await mainPage.typeToSearchField(text)
})

When(/^Я нажимаю Enter$/, async () => {
    await mainPage.clickEnterButton()
})



/**
 * This action required only for debugging
 * NOTE:
 * Don't use it in classic tests
 */
Then(/^Жду (\d+) секунд$/, async (time) => {
    await browser.pause(time*1000)
})
