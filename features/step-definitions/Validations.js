const { Then } = require('@wdio/cucumber-framework');

Then(/^Страница должна быть: "(.+)"$/, async (url) => {
    expect(await browser.getUrl()).toEqual(url);
});

Then(/^$/, async () => {
    
})