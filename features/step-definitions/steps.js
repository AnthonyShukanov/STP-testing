const { Given, When, Then } = require('@wdio/cucumber-framework');
const { mainPage } = require('../../po/PageMap');


Given(/^I am on the "(\w+)" page$/, async (page) => {
    await mainPage.open(page)
});





