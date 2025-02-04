const { $ } = require('@wdio/globals')
const Page = require('./page');

class SantanderPage extends Page {

    // Definicion de elementos

    get inputyear() {
        return $('#year'); //año
    }

    get inputmodel() {
        return $('#search > div > div > div.ng-input > input[type=text]'); //Modelo (busqueda de vehiculo)
    }

    get btnContinueOne() { //Botón continuar
        return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > div.row.justify-content-center > div.button-cotiza.row.col-12 > div:nth-child(2) > button');
    }
    //get selectInsuranceType(){ //Tipo de seguro
    //  return $('/html/body/app-root/block-ui/div/div/ac-home/section/div[2]/div[2]/ac-vehicle-data/section/div/div[1]/div[2]/div/ng-select/div/div/div[3]');
    //}
    // get selectCarCondition(){ //condición de automóvil
    //  return $('#carCondition > div > div > div.ng-input');
    //}
    //get inputInvoiceValue(){//Valor factura
    //    return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > ac-multiyear-data > section > form');
    //}
    //get selectFinancial (){ //Institución financiera
    //  return $('#financialInstitution > div > div > div.ng-input');

    //}
    //get selectStartDate(){ //Fecha de inicio de poliza
    //  return $('#policyStartDate');
    //}
    //get selectPolicyTerm(){ //Vigencia del seguro
    //  return $('#policyTerm > div > div > div.ng-input')
    //}
    // get btnContinueTwo(){
    //   return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > ac-multiyear-data > section > form > div.button-cotiza.d-flex.justify-content-center > button');
    //}
    get btnGender() { //Género masculino
        return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > ac-quotation-data > section > form > div > div:nth-child(2) > div.btn-group.btn-group-toggle.radio-btn-sex > label.btn.gen.active-button.active');

    }
    get inputBornDate() {
        return $('#date');
    }
    get inputName() {
        return $('#name');
    }
    get inputCp() {
        return $('#cp');
    }
    get inputEmail() {
        return $('#email');
    }
    get inputPhone() {
        return $('#phone');
    }
    get btnCotizar() {
        return $('body > app-root > block-ui > div > div > ac-home > section > div.row.homeImgPanel > div:nth-child(2) > ac-vehicle-data > section > div > ac-quotation-data > section > div > div.button-show-cotiza.d-flex.justify-content-center > button');
    }
    get btnFirstOption() { //Ultima seccion, comparador aseguradoras
        return $('body > app-root > block-ui > div > div > ac-quotation > section.quotation > div:nth-child(5) > div.col-sm-12.col-md-12.col-lg-9.px-0.d-sm-flex.justify-content-sm-center.d-md-flex.justify-content-md-center > div.md-row.sm-row > div:nth-child(1) > div > div.row.position-top-main > div.col-md-2.col-sm-6.col-lg-4 > div > div > div');
    }
    get btnSecondOption() {
        return $('body > app-root > block-ui > div > div > ac-quotation > section.quotation > div:nth-child(5) > div.col-sm-12.col-md-12.col-lg-9.px-0.d-sm-flex.justify-content-sm-center.d-md-flex.justify-content-md-center > div.md-row.sm-row > div:nth-child(2) > div > div.row.position-top-main > div.col-md-2.col-sm-6.col-lg-4 > div > div > div');
    }
    get btnThirdOption() {
        return $('body > app-root > block-ui > div > div > ac-quotation > section.quotation > div:nth-child(5) > div.col-sm-12.col-md-12.col-lg-9.px-0.d-sm-flex.justify-content-sm-center.d-md-flex.justify-content-md-center > div.md-row.sm-row > div:nth-child(3) > div > div.row.position-top-main > div.col-md-2.col-sm-6.col-lg-4 > div > div > div');
    }
    get btnCompare() {
        return $('body > app-root > block-ui > div > div > ac-quotation > section.compare > div > div.col-sm-5.col-md-4.position-button-mobile.align-center-button > button');
    }

    //Definicion de comportamientos


    /* async fillInsuranceType (text){ //Tipo seguro
       await this.selectInsuranceType.waitForExist({ timeout: 5000 });
       await this.selectInsuranceType.selectByVisibleText(text);    
       
   } 
   async fillCarCondition(condition){ //condición de automóvil
       await this.selectCarCondition.selectByVisibleText(condition);
   } */

    // async fillDataYear(year, validationClass = 'ng-valid', maxAttempts = 3, debug = false) {
    //     const inputYear = await this.inputyear;
    //     let attempts = 0;

    //     // Función para simular delay humano más realista
    //     const humanDelay = async (min = 100, max = 300) => {
    //         const randomDelay = Math.floor(Math.random() * (max - min) + min);
    //         await browser.pause(randomDelay);
    //     };

    //     // Función mejorada para simular movimiento natural del mouse
    //     const moveMouseNaturally = async (element) => {
    //         await element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    //         await humanDelay(800, 1200); // Pausa más larga para el scroll

    //         // Simular movimiento del mouse con pequeñas pausas
    //         await browser.execute(() => {
    //             const events = ['mouseover', 'mouseenter'];
    //             events.forEach(eventType => {
    //                 const event = new MouseEvent(eventType, {
    //                     bubbles: true,
    //                     cancelable: true,
    //                     view: window,
    //                     clientX: Math.random() * window.innerWidth,
    //                     clientY: Math.random() * window.innerHeight
    //                 });
    //                 document.elementFromPoint(event.clientX, event.clientY)?.dispatchEvent(event);
    //             });
    //         });
    //         await humanDelay(200, 400);
    //     };

    //     // Función mejorada para simular escritura humana
    //     const typeHumanLike = async (element, text) => {
    //         await element.click();
    //         await humanDelay(200, 400);

    //         // Simular selección del contenido existente
    //         await browser.keys(['Control', 'a']);
    //         await humanDelay(100, 200);
    //         await browser.keys(['Delete']);
    //         await humanDelay(200, 400);

    //         // Escribir con variaciones realistas en la velocidad
    //         for (let digit of text.toString()) {
    //             await element.addValue(digit);
    //             // Variar el delay entre teclas (más rápido entre dígitos del mismo grupo)
    //             await humanDelay(80, 200);
    //         }

    //         // Pequeña pausa después de terminar de escribir
    //         await humanDelay(300, 500);
    //     };

    //     while (attempts < maxAttempts) {
    //         try {
    //             if (debug) console.log(`=== Intento ${attempts + 1}/${maxAttempts} ===`);

    //             // Simular comportamiento más natural del mouse
    //             await moveMouseNaturally(inputYear);

    //             // Simular escritura humana
    //             await typeHumanLike(inputYear, year);

    //             // Simular interacción más natural con el campo
    //             await browser.execute((el) => {
    //                 const events = [
    //                     'focus', 'keydown', 'keypress', 'input', 
    //                     'keyup', 'change', 'blur'
    //                 ];

    //                 events.forEach(eventType => {
    //                     const event = new Event(eventType, {
    //                         bubbles: true,
    //                         cancelable: true,
    //                         composed: true
    //                     });

    //                     // Agregar propiedades específicas para eventos de teclado
    //                     if (eventType.startsWith('key')) {
    //                         Object.defineProperties(event, {
    //                             key: { value: 'Tab' },
    //                             code: { value: 'Tab' },
    //                             keyCode: { value: 9 },
    //                             which: { value: 9 },
    //                             isTrusted: { value: true }
    //                         });
    //                     }

    //                     el.dispatchEvent(event);
    //                 });

    //                 // Agregar metadata adicional
    //                 el.dataset.lastInteraction = new Date().toISOString();
    //                 el.dataset.interactionType = 'keyboard';
    //                 el.dataset.userModified = 'true';
    //             }, inputYear);

    //             // Esperar la validación con retry pattern mejorado
    //             await browser.waitUntil(async () => {
    //                 const classes = await inputYear.getAttribute('class');
    //                 const value = await inputYear.getValue();
    //                 const isValid = classes.includes(validationClass) && value === year.toString();

    //                 if (debug && !isValid) {
    //                     console.log('Estado validación:', {
    //                         classes,
    //                         value,
    //                         isValid,
    //                         timestamp: new Date().toISOString()
    //                     });
    //                 }

    //                 return isValid;
    //             }, {
    //                 timeout: 10000,  // Timeout más largo
    //                 interval: 500,   // Chequeos más frecuentes
    //                 timeoutMsg: `Validación fallida para el año: ${year}`
    //             });

    //             if (debug) console.log('✓ Validación exitosa');
    //             return true;

    //         } catch (error) {
    //             attempts++;

    //             if (debug) {
    //                 console.error('Error en el intento:', {
    //                     attempt: attempts,
    //                     error: error.message,
    //                     stack: error.stack,
    //                     timestamp: new Date().toISOString()
    //                 });
    //             }

    //             if (attempts === maxAttempts) {
    //                 throw new Error(`Falló la validación después de ${maxAttempts} intentos: ${error.message}`);
    //             }

    //             // Pausa más larga y variable entre intentos
    //             await humanDelay(2000, 3000);
    //         }
    //     }
    // }

    //----------------------------------------------------------------------


    async fillDataYear() {
        const yearField = await $('#year'); // Selecciona el campo de año

        // Usa execute para inyectar JavaScript y establecer el valor correctamente
        await browser.execute((element, value) => {
            element.value = value;

            // Dispara eventos para que Angular detecte el cambio
            element.dispatchEvent(new Event('input', { bubbles: true }));
            element.dispatchEvent(new Event('change', { bubbles: true }));
            element.dispatchEvent(new Event('blur', { bubbles: true }));
        }, yearField, '2024');

        // Espera a que Angular procese el cambio y valide el campo
        await browser.waitUntil(async () => {
            const classAttr = await yearField.getAttribute('class');
            return classAttr.includes('ng-valid'); // Verifica que el campo sea válido
        }, {
            timeout: 5000,
            timeoutMsg: 'El campo año no cambió a válido'
        });
    }

    // async fillDataBrand(brand){
    //     await this.inputmodel.waitForExist({ timeout: 5000 });
    //     await this.inputmodel.click();
    //     await this.inputmodel.setValue(brand);
    //     await this.inputmodel.addValue('\uE007');
    // }

    async fillDataBrand() {
    const selectBox = await $('/html/body/app-root/block-ui/div/div/ac-home/section/div[2]/div[1]/div[2]/ac-vehicle-data/section/div/div[3]/div[3]/ng-select'); // Localiza el select
    await selectBox.waitForDisplayed({ timeout: 5000 }); // Espera a que el select esté visible
    await selectBox.click(); // Abre el dropdown
    
    // Espera a que las opciones se carguen
    await browser.waitUntil(async () => {
        const opciones = await $$('ng-dropdown-panel .ng-option');
        return opciones.length > 0;
    }, {
        timeout: 5000,
        timeoutMsg: 'Las opciones del selector no se cargaron'
    });

    // Seleccionar la primera opción disponible
    const opciones = await $$('ng-dropdown-panel .ng-option');
    await opciones[0].click();
    }
    


    // CODIGO FRANK

    // async fillDataYear(year) {
    //     const inputYear = await this.inputyear;

    //     // Haz clic para enfocar el campo
    //     await inputYear.click();

    //     // Limpia el campo asegurándote de que esté vacío
    //     await inputYear.clearValue();

    //     // Ingresa el valor del año
    //     await inputYear.setValue(year);
    //     await inputYear.addValue('\uE007');

    //     // Dispara eventos manualmente
    //     await browser.execute((el) => {
    //         el.dispatchEvent(new Event('input', { bubbles: true }));
    //         el.dispatchEvent(new Event('change', { bubbles: true }));
    //     }, inputYear);

    //     // Espera que el campo pase a un estado válido
    //     await browser.waitUntil(async () => {
    //         const classes = await inputYear.getAttribute('class');
    //         return classes.includes('ng-valid'); // Ajusta según la clase que indica validez

    //     }, {
    //         timeout: 5000,
    //         timeoutMsg: 'El campo del año no pasó a un estado válido',
    //     });
    // }



    /* async fillDataBrand(model) { //Modelo (busqueda de vehiculo)
        await this.inputmodel.setValue(model);
        await this.btnContinueOne.click();
    }
    async fillInvoiceValue(value){ //Valor factura
        await this.inputInvoiceValue.setValue(value);    
        
    }
    async selectFinancial(name){ //Institucion Fianciera
        await this.selectFinancial.waitForExist({ timeout: 5000 });
        await this.selectFinancial.setValue(name);    
        
    }
    async selectStartDate(date){ //Fecha de inicio de poliza
        await this.selectStartDate.waitForExist({ timeout: 5000 });
        await this.selectStartDate.selectByVisibleText(date);    
        
    }
    async selectPolicyTermByVisibleText(months){ //vigencia del seguro
        await this.selectPolicyTerm.waitForExist({ timeout: 5000 });
        await this.selectPolicyTerm.selectByVisibleText(months);  
        await this.btnContinueTwo.click();  
        
    } */
    async fillPersonalInfo() {
        await this.btnGender.waitForExist({ timeout: 5000 });
        await this.btnGender.click();
        await this.inputBornDate.waitForExist({ timeout: 5000 });
        await this.inputBornDate.setValue('06/01/1977');
        await this.inputName.waitForExist({ timeout: 5000 });
        await this.inputName.setValue('Jonathan');
        await this.inputCp.setValue('06140');
        await this.inputEmail.setValue('webscraping@gmail.com');
        await this.inputPhone.setValue('5555555555');
        await this.btnCotizar.click();

    }
    async selectOptions() { //comparar
        await this.btnFirstOption.waitForExist({ timeout: 5000 });
        await this.btnFirstOption.click();
        await this.btnSecondOption.waitForExist({ timeout: 5000 });
        await this.btnSecondOption.click();
        await this.btnThirdOption.waitForExist({ timeout: 5000 });
        await this.btnThirdOption.click();
        await this.btnCompare.waitForExist({ timeout: 5000 });
        await this.btnCompare.click();
    }



    // async fillDataBrand() {
    //     await browser.execute(() => {
    //         const selectInput = document.querySelector('#search > div > div > div.ng-input > input[type=text]');
    //         if (selectInput) {
    //             selectInput.dispatchEvent(new Event('input', { bubbles: true }));
    //             selectInput.dispatchEvent(new Event('change', { bubbles: true }));
    //         }
    //     });
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



    open() {
        return super.openAutocompara();
    }
}

module.exports = new SantanderPage();