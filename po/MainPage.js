const Page = require('./page');
class MainPage extends Page {
    get searchField() { return $('input.search_input')}
    
    async open(path) {
        await browser.url(path)
    }

    async typeToSearchField(text) {
        await this.searchField.setValue(text);
    }

    async 

}
module.exports = MainPage;