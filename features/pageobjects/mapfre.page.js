const { $ } = require ('@wdio/globals')
const Page = require ('./page.js');

class MapfrePage extends Page{

    get selectCarBrand() {
        return $('#VehicleMake_Control');
    }
    get selectCarYear() {
        return $('//*[@id="VehicleYear_Control"]');
    }
    get selectCarModel() {
        return $('#VehicleModel_Control'); //opción 30
    }
    /* get selectCarVersion() {
        return $('#VehicleVersion_Control');
    } */
    //Info Personal
    get selectBornDay() {
        return $('#DriverBirthDate_Day');
    }
    get selectBornMonth() {
        return $('#DriverBirthDate_Month');
    }
    get selectBornYear() {
        return $('#DriverBirthDate_Year');
    }
    get selectGender() {
        return $('#DriverGender_Control');
    }
    get inputCp() {
        return $('#driverzipcode');
    }
    get inputName() {
        return $('#Name');
    }
    get inputMail() {
        return $('#EmailId');
    }
    get inputNumber() {
        return $('#Telephone');
    }
    //Terminos y condiciones
    get selectTerm() {
        return $('#TermAndCondition');
    }
   
    get btnContinue() {
        return $('#btnSubmitForm');
    }
    get btnDetails(){
        return $('#CoverLink1_QP_MapfreDirectoLimited');
    }

     //Comportamiento
    async selectCarBrandBy(text) {
        await this.selectCarBrand.waitForExist({ timeout: 5000 });
        await this.selectCarBrand.selectByVisibleText(text);
    }
    
    /*  async selectCarYearBy(year) {
        await this.selectCarYear.waitForExist({ timeout: 5000 });
        await this.selectCarYear.selectByVisibleText(year);
    }  */
         async selectCarYearBy() {
            // Esperar a que el selector sea visible
            await this.selectCarYear.waitForDisplayed({ timeout: 5000 });
        
            // Obtener todas las opciones del select utilizando $$ (todos los elementos <option>)
            const options = await this.selectCarYear.$$('option');
        
            // Comprobar si hay opciones disponibles
            if (options.length > 0) {
                // Seleccionar la primera opción de la lista
                await options[0].click(); // Click en la primera opción
                await browser.pause(3000);
            } else {
                throw new Error('No hay opciones disponibles en el selector de año.');
            }
        }
        
       
        async selectCarModelBy() {
            // Esperar a que el selector del modelo de coche sea visible
            await this.selectCarModel.waitForDisplayed({ timeout: 5000 });
        
            // Usar el selector CSS para seleccionar la opción 30
            const option30 = await $('#VehicleModel_Control > option:nth-child(30)');
        
            // Verificar si el elemento se encontró y hacer clic en él
            if (await option30.isDisplayed()) {
                await option30.click();  // Hacer clic en la opción 30
                await browser.pause(2000);  // Pausa para asegurarse de que se muestre la selección
            } else {
                throw new Error('La opción 30 no está visible en el selector de modelos.');
            }
        }
        
        
    async fillPersonalInfo(day, month, year, gender) {
        await this.selectBornDay.waitForExist({ timeout: 5000 });
        await this.selectBornDay.selectByVisibleText('10');
        await this.selectBornMonth.selectByVisibleText('enero');
        await this.selectBornMonth.selectByVisibleText('1977');
        await this.selectGender.waitForExist({ timeout: 5000 });
        await this.selectGender.selectByVisibleText('conductor');
        await this.inputCp.setValue('06140');
        await this.inputName.setValue('Jose');
        await this.inputMail.setValue('prueba@gmail.com');
        await this.inputNumber.setValue('555555554');
        await this.btnContinue.click();

    }
    async acceptTerm() {
        await this.selectTerm.waitForExist({ timeout: 5000 });
        await this.selectTerm.click();
        await this.btnContinue.click();

    }
    open() {
        return super.openMapfre();
    }

}

module.exports =new MapfrePage();