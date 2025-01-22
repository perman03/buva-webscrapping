const { $ } = require('@wdio/globals')
const Page = require('./page');

class SantanderPage extends Page {

    // Definicion de elementos

    get inputyear() {
        return $('#year');
    }

    get inputmodel() {
        return $('#search > div > div > div.ng-input > input[type=text]');
    }

    get divmodel(){
        return $('#search > div > div > div.ng-input')
    }

    get btnContinueOne() {
        return $('/html/body/app-root/block-ui/div/div/ac-home/section/div[2]/div[2]/ac-vehicle-data/section/div/div[3]/div[6]/div[2]/button');
    }

    //Definicion de comportamientos

    
    async fillDataYear(year) {
        const inputYear = await this.inputyear;
    
        // Haz clic para enfocar el campo
        await inputYear.click();
    
        // Limpia el campo asegurándote de que esté vacío
        await inputYear.clearValue();
    
        // Ingresa el valor del año
        await inputYear.setValue(year);
        await inputYear.addValue('\uE007');
    
        // Dispara eventos manualmente
        await browser.execute((el) => {
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        }, inputYear);
    
        // Espera que el campo pase a un estado válido
        await browser.waitUntil(async () => {
            const classes = await inputYear.getAttribute('class');
            return classes.includes('ng-valid'); // Ajusta según la clase que indica validez
            
        }, {
            timeout: 5000,
            timeoutMsg: 'El campo del año no pasó a un estado válido',
        });
    }

    // async fillDataBrand(model) {
    //     const comboBox = await this.divmodel;
    //     const inputField = await this.inputmodel;
    
    //     // Espera que el campo esté interactuable
    //     await inputField.waitForClickable({ timeout: 5000 });
    
    //     // Haz clic en el combobox para desplegar opciones
    //     await comboBox.click();
    
    //     // Ingresa el nombre de la marca
    //     await inputField.setValue(model);
    
    //     // Dispara eventos adicionales si es necesario
    //     await browser.execute((el) => {
    //         el.dispatchEvent(new Event('input', { bubbles: true }));
    //         el.dispatchEvent(new Event('focus', { bubbles: true }));
    //     }, inputField);
    
    //     // Espera que las opciones estén visibles
    //     const dropdownOptions = await $(`#${await inputField.getAttribute('aria-controls')}`);
    //     await browser.waitUntil(async () => {
    //         return await dropdownOptions.isDisplayed();
    //     }, {
    //         timeout: 5000,
    //         timeoutMsg: 'Las opciones del combobox no cargaron.',
    //     });
    
    //     // Selecciona la opción deseada
    //     const optionToSelect = await dropdownOptions.$(`li*=${model}`);
    //     await optionToSelect.click();
    // }

    // async fillDataBrand(version) {
    //      // Selecciona el contenedor principal del ng-select
    // const ngSelect = await $('ng-select#search');
    // const inputField = await ngSelect.$('div.ng-input input'); // Encuentra el input

    // // Asegúrate de que el ng-select esté visible y clickeable
    // await ngSelect.waitForClickable({ timeout: 5000 });

    // // Haz clic para desplegar las opciones
    // await ngSelect.click();

    // // Escribe el texto de la versión del auto
    // await inputField.setValue(version);

    // // Dispara eventos necesarios para que carguen las opciones
    // await browser.execute((el) => {
    //     el.dispatchEvent(new Event('input', { bubbles: true }));
    //     el.dispatchEvent(new Event('focus', { bubbles: true }));
    // }, inputField);

    // // Verifica si el dropdown se despliega
    // await browser.waitUntil(async () => {
    //     const ariaExpanded = await ngSelect.$('div[role="combobox"]').getAttribute('aria-expanded');
    //     return ariaExpanded === 'true';
    // }, {
    //     timeout: 5000,
    //     timeoutMsg: 'El menú desplegable no se abrió.',
    // });

    // // Busca y selecciona la opción correcta
    // const dropdownOptions = await ngSelect.$$('div.ng-dropdown-panel div.ng-option');
    // for (const option of dropdownOptions) {
    //     const optionText = await option.getText();
    //     if (optionText.includes(version)) {
    //         await option.click(); // Haz clic en la opción
    //         return;
    //     }
    // }

    // throw new Error(`La versión "${version}" no se encontró en las opciones desplegables.`);
    // }

    // async fillDataYear(year) {
    //     await this.inputyear.setValue(year);
    //     await browser.keys('\uE007');
    //     await this.btnContinueOne.click();
    // }

    async fillDataBrand(model) {
        await this.inputmodel.setValue(model);
        await this.btnContinueOne.click();
    }

    open () {
        return super.open('santander');
    }
}

module.exports = new SantanderPage();