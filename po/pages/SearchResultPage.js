const Page = require('../page');

class SearchResultPage extends Page {
    nothingFound = $('div.gs-snippet:not(.gs-bidi-start-align)')
    notRobotButton = $('div.recaptcha-checkbox-border')

    get resultTitles() {
        return $$('div.gs-title:not(.gsc-thumbnail-left) > a:not([data-attr])')
    }

    async checkForVisibility() {
        await this.nothingFound.waitForDisplayed()
    }

    async checkRobotButton() {
        if(this.notRobotButton.isDisplayed) {
            this.notRobotButton.click()
        } 
    }

}

module.exports = SearchResultPage;