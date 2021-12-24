const MainPage = require('./pages/MainPage');
const ScientificActivityPage = require('./pages/ScientificActivityPage');
const SearchResultPage = require('./pages/SearchResultPage');

module.exports = {
    mainPage: new MainPage(),
    searchResultPage: new SearchResultPage(),
    scientificActivityPage: new ScientificActivityPage()
}