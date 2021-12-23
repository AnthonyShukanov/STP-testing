const Page = require('./page');

class SearchResultPage extends Page {
    nothingFound = $('div.gs-snippet')
    
    get resultTitles() {
        return $$('div.gs-title:not(.gsc-thumbnail-left) > a:not([data-attr])')
    }

}

module.exports = SearchResultPage;