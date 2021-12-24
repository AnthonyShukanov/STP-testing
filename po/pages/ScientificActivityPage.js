const Page = require('../page');

class ScientificActivityPage extends Page {
    forEmployeesButton = $('ul.main-menu > li:nth-child(1)');
    postGraduateButton = $('=Аспирантура и докторантура');
    thesisAdviceButton = $('=Советы по защите диссертаций');
    scientificEventsButton = $('=Научные мероприятия')
    expertCommisionsButton = $('=Экспертные комиссии')
    scientificActivityTitle = $('h1[align*="center"]');
    
    async getPageTitle() {
        await this.scientificActivityTitle.getText()
    }

    /**
     * Global checkpoints
     */
    async moveToForEmployeesButton() {
        await this.forEmployeesButton.moveTo()
    }


    /**
     * Pop-up methods
     */
    async moveToPostGraduateButton() {
        await this.postGraduateButton.moveTo()
        await this.postGraduateButton.click()
    }

    async moveToThesisAdviceButton() {
        await this.thesisAdviceButton.moveTo()
        await this.thesisAdviceButton.click()
    }
    
    async moveToScientificEventsButton() {
        await this.scientificEventsButton.moveTo()
        await this.scientificEventsButton.click()
    }
    async moveToExpertCommisionsButton() {
        await this.expertCommisionsButton.moveTo()
        await this.expertCommisionsButton.click()
    }
}

module.exports = ScientificActivityPage;