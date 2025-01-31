const { $ } = require ('@wdio/globals')
const Page = require ('./page.js');

class GnpPage extends Page {
    get selectVehicleType() {
        return $('//*[@id="divContainer_tipovehiculo"]/div/select');
    }
    get selectCarYear() {
        return $('#divContainer_modelo > div > select');
    }
    get selectBrandCar() {
        return $('#divContainer_clavemarca > div > select');
    }
    get selectSubBrandCar() {
        return $('#divContainer_clavesubmarca > div > select');
    }
    get selectVersionCar() {
        return $('#divContainer_clavedescripcion > div > select');
    }
    
    get inputBornDay() {
        return $('#fechaNacDay")');
    }
    get inputBornMonth() {
        return $('#fechaNacMonth');
    }
    get inputBornYear() {
        return $('#fechaNacYear');
    }
    get inputMail() {
        return $('#mail');
    }
    get selectGender() {
        return $('#divContainer_sexo > div > select');
    }
    get inputNumber() {
        return $('#telefono');
    }
    get inputCp() {
        return $('#telefono');
    }
    get selectContact(){
        return $('#spa-root > app-main > aem-page > aem-model-provider > aem-responsivegrid > div:nth-child(2) > aem-responsivegrid > div:nth-child(2) > app-datosvehiculo > div > div > app-formulario > form > footer > ul.gnp-c-form__inline > li:nth-child(2) > label');
    }
    get selectPrivacy(){
        return $('#spa-root > app-main > aem-page > aem-model-provider > aem-responsivegrid > div:nth-child(2) > aem-responsivegrid > div:nth-child(2) > app-datosvehiculo > div > div > app-formulario > form > footer > ul.gnp-c-form__bottom-edge > li.gnp-o-checkbox.gnp-o-checkbox_row > label');
    } 
    get selectTermn(){
        return $('#spa-root > app-main > aem-page > aem-model-provider > aem-responsivegrid > div:nth-child(2) > aem-responsivegrid > div:nth-child(2) > app-datosvehiculo > div > div > app-formulario > form > footer > ul.gnp-c-form__bottom-edge > li:nth-child(2) > label');
    } 
    get btnContinue(){
        return $('#spa-root > app-main > aem-page > aem-model-provider > aem-responsivegrid > div:nth-child(2) > aem-responsivegrid > div:nth-child(2) > app-datosvehiculo > div > div > app-formulario > form > footer > button');
    } 

    get btnCloseNotice(){
        return $('#centrado > div.gnp-c-datacard__modal.gnp-js-datacardModal > div > button');
    }



    //Comportamiento

    async selectVehicleTypeBy(type) {
        await this.selectVehicleType.waitForExist({ timeout: 5000 });
        await this.selectVehicleType.selectByVisibleText(type);
    }
    async selectCarYearBy(year) {
        const selectElement = await $('#divContainer_modelo > div > select');
        
        await selectElement.waitForExist({ timeout: 5000 });
        await selectElement.waitForDisplayed({ timeout: 5000 });
    
        try {
            // Método directo de WebdriverIO
            await selectElement.selectByAttribute('value', year.toString());
        } catch (error) {
            console.error('Error al seleccionar por valor:', error);
    
            // Intentar selección por JavaScript
            await browser.execute((yearValue) => {
                const select = document.querySelector('#divContainer_modelo > div > select');
                if (select) {
                    select.value = yearValue.toString();
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }, year);
        }
    
        // Breve pausa
        await browser.pause(500);
    
        // Verificación simple
        const currentValue = await selectElement.getValue();
        console.log(`Intenté seleccionar: ${year}, Valor actual: ${currentValue}`);
    
        if (currentValue !== year.toString()) {
            throw new Error(`No se pudo seleccionar el año ${year}`);
        }
    }
    async selectBrandCarBy(brand) {
        await this.selectBrandCar.waitForExist({ timeout: 5000 });
        await this.selectBrandCar.selectByVisibleText(brand);
    } 
    async selectVersionCarBy(version) {
        await this.selectVersionCar.waitForExist({ timeout: 5000 });
        await this.selectVersionCar.selectByVisibleText(version);
    } 
    async selectSubBrandCarBy(subbrand) {
        await this.selectSubBrandCar.waitForExist({ timeout: 5000 });
        await this.selectSubBrandCar.selectByVisibleText(subbrand);
    } 
    async fillPersonalInfo() {
        await this.inputBornDay.waitForExist({ timeout: 5000 });
        await this.inputBornDay.setValue("10");
        await this.inputBornMonth.setValue("01");
        await this.inputBornYear.setValue("1977");
        await this.inputMail.waitForExist({ timeout: 5000 });
        await this.inputMail.setValue("prueba@gmail.com");
        await this.selectGender.waitForExist({ timeout: 5000 });
        await this.selectGender.selectByVisibleText(" MASCULINO ");
        await this.inputNumber.waitForExist({ timeout: 5000 });
        await this.inputNumber.setValue("5555645564");
        await this.inputCp.waitForExist({ timeout: 5000 });
        await this.inputCp.setValue("06140");


    } 
    
    async selectContactBy(text) {
        await this.selectContact.waitForExist({ timeout: 5000 });
        await this.selectContact.selectByVisibleText(text);
    } 

    async selectPrivacyBy(text) {
        await this.selectPrivacy.waitForExist({ timeout: 5000 });
        await this.selectPrivacy.click();
    } 
    async selectTermnBy(text) {
        await this.selectTermn.waitForExist({ timeout: 5000 });
        await this.selectTermn.click();
        await this.btnContinue.click();
    } 
    
    open() {
        return super.openGnp();
    }
}

module.exports =new GnpPage();