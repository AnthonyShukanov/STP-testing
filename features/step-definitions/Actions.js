const { Given, When, Then } = require('@wdio/cucumber-framework');
const { mainPage, scientificActivityPage } = require('../../po/PageMap');


Given(/^Я открыл "(.+)" страницу$/, async (page) => {
    await mainPage.open(page)
});

When(/^Я пишу "(.+)" в поле поиска$/, async (text) => {
    await mainPage.typeToSearchField(text)
})

When(/^Я нажимаю Enter$/, async () => {
    await mainPage.clickEnterButton()
})

When(/^Я перевожу курсор на вкладку "Сотрудникам" и далее "Аспирантура и докторантура"$/, async() => {
    await scientificActivityPage.moveToForEmployeesButton()
    await scientificActivityPage.moveToPostGraduateButton()
})
When(/^Я перевожу курсор на вкладку "Сотрудникам" и далее "Советы по защите диссертаций"$/, async() => {
    await scientificActivityPage.moveToForEmployeesButton()
    await scientificActivityPage.moveToThesisAdviceButton()
})
When(/^Я перевожу курсор на вкладку "Сотрудникам" и далее "Научные мероприятия"$/, async() => {
    await scientificActivityPage.moveToForEmployeesButton()
    await scientificActivityPage.moveToScientificEventsButton()
})
When(/^Я перевожу курсор на вкладку "Сотрудникам" и далее "Экспертные комиссии"$/, async() => {
    await scientificActivityPage.moveToForEmployeesButton()
    await scientificActivityPage.moveToExpertCommisionsButton()
})



/**
 * This action required only for debugging
 * NOTE:
 * Don't use it in classic tests
 */
Then(/^Жду (\d+) секунд$/, async (time) => {
    await browser.pause(time*1000)
})

/**
 * .touchAction([
        'press',
        { action: 'wait', options: { ms: 500} },
        { action: 'moveTo', element: this.postGraduateButton },
        { action: 'wait', options: { ms: 500} },
        'release'
    ])
 */
