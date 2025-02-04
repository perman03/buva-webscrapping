const { $ } = require('@wdio/globals')
const Page = require('./page');

class SantanderPage extends Page {

    // Definicion de elementos

    get selectTypeCar() {
        return $('/html/body/app-root/block-ui/div/div/ac-home/section/div[2]/div[1]/div[2]/ac-vehicle-data/section/div/div[3]/div[1]/ng-select')
    }

    get inputyear() {
        return $('#year');
    }

    get inputmodel() {
        return $('#search > div > div > div.ng-input > input[type=text]');
    }

    get divmodel() {
        return $('#search > div > div > div.ng-input')
    }

    get btnContinueOne() {
        return $('/html/body/app-root/block-ui/div/div/ac-home/section/div[2]/div[2]/ac-vehicle-data/section/div/div[3]/div[6]/div[2]/button');
    }

    //Definicion de comportamientos

    async fillDataYear(year) {
        await this.inputyear.setValue(year);
        await browser.keys('\uE007');
        await this.btnContinueOne.click();
    }

    open() {
        return super.open('santander');
    }
}

module.exports = new SantanderPage();