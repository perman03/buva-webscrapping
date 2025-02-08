const { $ } = require ('@wdio/globals')
const Page = require ('./page.js');

class CitiPage extends Page {
    get btnQuote() {
        return $('#btnOnlineQuote');
    }

    get selectCarYear() { //2023
        return $('/html/body/app-root/div/div[2]/div[1]/app-quote/div/form/app-year/div[1]/div/div[2]/div/chubb-select/div/div/div[3]/div'); 
    }
    get selectCarBrand() { //Kia (meter tiempo de espera en lo que cargan opciones)
        return $('/html/body/app-root/div/div[2]/div[1]/app-quote/div/form/app-brand/div[1]/div[1]/div[2]/chubb-select/div/div/div[6]/div');
    }
    get selectCarModel() { //Rio
        return $('/html/body/app-root/div/div[2]/div[1]/app-quote/div/form/app-model/div[1]/div[1]/div[2]/chubb-select/div/div/div[3]/div');
    }
    /* get selectCarVersion() {
        return $('/html/body/app-root/div/div[2]/div[1]/app-quote/div/form/app-version/div[1]/div[1]/div[2]/chubb-select/div/div/div[1]/div');
    } */
    get btnCotinue() {
        return $('body > app-root > div > div.row.page-container.IE-footer-container > div.col-12.p-0.content-wrap > app-quote > div > form > app-using > div.col-sm-12.offset-sm-0.col-md-10.offset-md-1.col-lg-8.offset-lg-2.space-mobile > form > div > div > div > div:nth-child(4) > div:nth-child(3) > div > button');
    }
    get inputname() {
        return $('#mat-input-0');
    }
    get inputCp(){ //06140
        return $('#mat-input-3');
    }
    get inputNumber(){//55 6456 6556
        return $('#mat-input-1');
    }
    get inputMail(){
        return $('#mat-input-2');
    }
    get selectLegalAccept(){
        return $('#legal-checkbox > label > span.mat-checkbox-inner-container');
    }
    get btnCotinueTwo(){
        return $('body > app-root > div > div.row.page-container.IE-footer-container > div.col-12.p-0.content-wrap > app-quote > div > form > app-data-insured > div > form > div > div.row > div.col-12.col-lg-8.col-md-6.col-xl-7.ps-0.pe-0 > div > div:nth-child(3) > div > div.col-12.col-md-6.order-5.order-md-6.order-lg-6.order-xl-6.mt-5.p-0.d-flex.align-items-center.button-center-sm > button');
    }
    get selectClient(){
        return $('body > app-root > div > div.row.page-container.IE-footer-container > div.col-12.p-0.content-wrap > app-quote > div > form > app-client > div > div > div.col-12.col-lg-8.col-xl-8 > div.row.justify-content-start.mt-5.ng-star-inserted > div:nth-child(2) > div > div > button');
    }

    /* async selectQuote() {
        await this.btnQuote.waitForExist({ timeout: 5000 });
        await this.btnQuote.click();
    } */
        async selectYear() {
            try {
                await this.selectCarYear.waitForExist({ 
                    timeout: 5000,
                    timeoutMsg: 'El elemento año 2023 no existe después de 5 segundos'
                });
                
                // Mover el cursor sobre el elemento antes de hacer click
                await this.selectCarYear.moveTo();
                
                // Pequeña pausa para que se pueda ver el efecto hover (opcional)
                await browser.pause(500);
                
                await this.selectCarYear.click();
                
            } catch (error) {
                console.error('Error al seleccionar el año:', error);
                throw error;
            }
        }
        async selectBrand() {
            try {
                await this.selectCarBrand.waitForExist({ 
                    timeout: 5000,
                    timeoutMsg: 'El elemento no existe después de 5 segundos'
                });
                
                // Mover el cursor sobre el elemento antes de hacer click
                await this.selectCarBrand.moveTo();
                
                // Pequeña pausa para que se pueda ver el efecto hover (opcional)
                await browser.pause(500);
                
                await this.selectCarBrand.click();
                
            } catch (error) {
                console.error('Error al seleccionar la marca:', error);
                throw error;
            }
        }
        async selectModel() {
            try {
                await this.selectCarModel.waitForExist({ 
                    timeout: 5000,
                    timeoutMsg: 'El elemento no existe después de 5 segundos'
                });
                
                // Mover el cursor sobre el elemento antes de hacer click
                await this.selectCarModel.moveTo();
                
                // Pequeña pausa para que se pueda ver el efecto hover (opcional)
                await browser.pause(500);
                
                await this.selectCarModel.click();
                
            } catch (error) {
                console.error('Error al seleccionar el modelo:', error);
                throw error;
            }
        }
        async selectCarVersion() {
            try {
                // Esperar hasta que el contenedor esté visible
                const element = await this.selectCarVersion;
                await element.waitForDisplayed({
                    timeout: 15000, // 15 segundos
                    timeoutMsg: 'El contenedor de opciones no está visible después de 15 segundos'
                });
        
                // Esperar hasta que las opciones estén cargadas (al menos una opción)
                const firstOption = await $('//div[@class="chubb-select-container"]//div[contains(@class, "option-container")][1]//div[contains(@class, "version-opt")]');
                
                await firstOption.waitForDisplayed({
                    timeout: 15000, // Espera de 15 segundos para que las opciones estén disponibles
                    timeoutMsg: 'La primera opción no está visible después de 15 segundos'
                });
        
                // Verificar si la opción existe y hacer clic en ella
                if (await firstOption.isDisplayed()) {
                    await firstOption.click();
                } else {
                    console.log("No se encontró la primera opción.");
                }
        
            } catch (error) {
                console.error('Error al seleccionar la versión:', error.message);
                throw error;
            }
        }
        
 
    
    open() {
        return super.openCiti();
    }
    
    
}

module.exports =new CitiPage();