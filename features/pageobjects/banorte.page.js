// PASAR LO QUE HAY EN COTIZADOR.PAGE.JS (SEGUROS)
const { $ } = require ('@wdio/globals')
const Page = require ('./page.js');

class BanortePage extends Page {
    get inputNombre() {
        return $('#nombre');
    }

    get inputEdad() {
        return $('#edad');
    }

    get inputEmail() {
        return $('#email');
    }

    get inputTelefono() {
        return $('#telefono');
    }

    get btnCotizar() {
        return $('button[type="submit"]');
    }

    get selectAutoTypeCar() {
        return $('/html/body/app-root/app-cotizador-step-one/div/div/form/div[1]/div[2]/div[2]/label[1]')    
    }

    get selectAutoYear() {
        return $('body > app-root > app-cotizador-step-one > div > div > form > div:nth-child(1) > div.row > div.col-md-4.mt-2.mb-3 > select');
    }

    get selectAutoBrand() {
        return $('/html/body/app-root/app-cotizador-step-one/div/div/form/div[1]/div[3]/div[2]/div[2]/input'); 
    }

    get selectAutoModel() {
        return $('body > app-root > app-cotizador-step-one > div > div > form > div:nth-child(1) > div.row > div:nth-child(4) > div.input-group.mb-3 > select')
    }

    // get autoModelOption() {
    //     return $('button[id="ngb-typeahead-2-0"]')
    // }

    get inputCp() {
        return $('/html/body/app-root/app-cotizador-step-one/div/div/form/div[1]/div[3]/div[5]/input')
    }

    get btnContinue() {
        return $('body > app-root > app-cotizador-step-one > div > div > form > div:nth-child(3) > div > div.col-md-3.order-0.order-md-1 > button')
    }

    get btnGender() {
        return $('/html/body/app-root/app-cotizador-step-two/div/div/form/div[1]/div/div[1]/div[2]/div[1]/div/div[1]/label')
    }

    get inputName() {
        return $('input[formcontrolname="nameUser"]');
    }

    get inputPhone() {
        return $('input[formcontrolname="mobileUser"]');    
    }

    get inputEmail() {
        return $('input[formcontrolname="emailUser"]');
    }

    get btnContinueQuote() {
        return $('body > app-root > app-cotizador-step-two > div > div > form > div:nth-child(4) > div > div:nth-child(3) > button');
    }

    get btnViewCarInfo() {
        return $('//*[@id="headingOne"]/div/button')
    }

    async cotizar(nombre, edad, email, telefono) {
        await this.inputNombre.setValue(nombre);
        await this.inputEdad.setValue(edad);
        await this.inputEmail.setValue(email);
        await this.inputTelefono.setValue(telefono);
        await this.btnCotizar.click();
    }

    async selectAutoCarType() {
        await this.selectAutoTypeCar.waitForExist({ timeout: 5000 });
        await this.selectAutoTypeCar.click();
    }

    async selectAutoYearByVisibleText(text) {
        await this.selectAutoYear.selectByVisibleText(text);
        
    }

    async selectingAutoBrand(brand) {
        await this.selectAutoBrand.waitForExist({ timeout: 5000 });
        await this.selectAutoBrand.click();
        await this.selectAutoBrand.setValue(brand);
        await this.selectAutoBrand.addValue('\uE007');
        await this.selectAutoBrand.addValue('\uE007');


    }

    async selectAutoModelByVisibleText(text) {
        //await this.selectAutoModel.scrollIntoView();
        await this.selectAutoModel.click();
        await this.selectAutoModel.waitForExist({ timeout: 5000 });
        await this.selectAutoModel.click();
        await this.selectAutoModel.selectByVisibleText(text);
    }

    async introduceCp(cp) {
        await this.inputCp.waitForExist({ timeout: 5000 });
        await this.inputCp.setValue(cp);
        await this.btnContinue.click();
    }

    async fillPersonalInfo() {
        await this.btnGender.waitForExist({ timeout: 5000 });
        await this.btnGender.click();
        await this.inputName.waitForExist({ timeout: 5000 });
        await this.inputName.setValue('Johnnatan Perez');
        await this.inputPhone.setValue('5512345678');
        await this.inputEmail.setValue('frankperman03@gmail.com');
        await this.btnContinueQuote.click();

    }

    async viewCarInfo() {
        await this.btnViewCarInfo.waitForExist({ timeout: 5000 });
        await this.btnViewCarInfo.click();
    }

    open() {
        return super.openBanorte();
    }
    
    secondForm() {
        return super. openSecondFormBanorte();
    }
}

module.exports =new BanortePage();