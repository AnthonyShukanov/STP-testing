const Page = require('../page');

class MainPage extends Page {
    searchField = $("input.search_input")

    async open(path) {
        await browser.url(path)
    }
    async typeToSearchField(text) {
        await this.searchField.setValue(text);
    }
    async clickEnterButton() {
        await browser.keys('Enter')
    }
}
module.exports = MainPage;