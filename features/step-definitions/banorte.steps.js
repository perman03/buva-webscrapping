// banorte.steps.js

// CONST y REQUIRE en lugar de IMPORT
import {Given, When, Then} from '@wdio/cucumber-framework';
import {expect, $, browser} from '@wdio/globals';
import fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';

import CotizadorPage from '../pageobjects/cotizador.page.js';
console.log('Loaded step definitions');

const pages = {
    cotizador: CotizadorPage
}

Given('I am on the banorte quoter home page', async()=>{
    await pages.cotizador.open();
});

When('I select my car type', async()=>{
    await CotizadorPage.selectAutoCarType();
}); 

When('I select my car year', async()=>{
    await CotizadorPage.selectAutoYearByVisibleText('2019');
});

When ('I select my car brand', async()=>{
    await CotizadorPage.selectingAutoBrand('HONDA CIVIC');
    await browser.pause(5000);
});

When('I select my car version', async()=>{
    await browser.pause(5000);
    await CotizadorPage.selectAutoModelByVisibleText('CIVIC EX SEDAN CA CE | STD | 4 puertas | 4 cilindros | 5 pasajeros');
    
});

When('I introduce my cp code for continue with the second phase', async()=>{
    await CotizadorPage.inputCp.setValue('53660');
    await browser.pause(5000);
    await CotizadorPage.btnContinue.click();
}); 

Then('I can see the personal data form', async() => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe('https://www.segurosbanorte.com.mx/cotizacion-autos/datos-personales');
})

When ('I fill the personal data form', async() =>{
    await CotizadorPage.fillPersonalInfo();
    await browser.pause(10000);
});

Then('I can see the quoter results' , async() => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe('https://www.segurosbanorte.com.mx/cotizacion-autos/elige-paquete-y-cobertura');
}); 

When('I view my car info and extract it', async()=>{
    await browser.pause(5000);
    await CotizadorPage.btnViewCarInfo.click();
    await browser.pause(5000);

    const carTypeInfo = await $('//*[@id="collapseOne"]/div/div[1]/div[2]')
    const carTypeText = await carTypeInfo.getText();
    const carYearInfo = await $('//*[@id="collapseOne"]/div/div[2]/div[2]'); 
    const carYearText = await carYearInfo.getText();
    const carBrandInfo = await $('//*[@id="collapseOne"]/div/div[3]/div[2]');
    const carBrandText = await carBrandInfo.getText();
    const userCpInfo = await $('//*[@id="collapseOne"]/div/div[4]/div[1]/div[2]');
    const userCpText = await userCpInfo.getText();
    const firstCoberExchange = await $('/html/body/app-root/app-cotizador-step-three/div/div/div[2]/div/div[2]/app-tabla-coberturas/div/div[1]/table/thead/tr/th[2]/div/div[1]/p[2]/span[2]');
    const firstCoberExchangeText = await firstCoberExchange.getText();
    
    const firstCoberInfo = await $('/html/body/app-root/app-cotizador-step-three/div/div/div[2]/div/div[2]/app-tabla-coberturas/div/div[1]/table/thead/tr/th[2]/div/div[1]/p[1]');
    const firstCoberText = await firstCoberInfo.getText();
    const firstCoberPriceInfo = await $('/html/body/app-root/app-cotizador-step-three/div/div/div[2]/div/div[2]/app-tabla-coberturas/div/div[1]/table/thead/tr/th[2]/div/div[1]/p[2]/span[1]');
    const firstCoberPriceText = await firstCoberPriceInfo.getText();
    const secondCoberInfo = await $('/html/body/app-root/app-cotizador-step-three/div/div/div[2]/div/div[2]/app-tabla-coberturas/div/div[1]/table/thead/tr/th[3]/div/div[1]/p[1]');
    const secondCoberText = await secondCoberInfo.getText();
    const secondCoberPriceInfo = await $('/html/body/app-root/app-cotizador-step-three/div/div/div[2]/div/div[2]/app-tabla-coberturas/div/div[1]/table/thead/tr/th[3]/div/div[1]/p[2]/span[1]');
    const secondCoberPriceText = await secondCoberPriceInfo.getText(); 
    const thirdCoberInfo = await $('/html/body/app-root/app-cotizador-step-three/div/div/div[2]/div/div[2]/app-tabla-coberturas/div/div[1]/table/thead/tr/th[4]/div/div[1]/p[1]');
    const thirdCoberText = await thirdCoberInfo.getText();
    const thirdCoberPriceInfo = await $('/html/body/app-root/app-cotizador-step-three/div/div/div[2]/div/div[2]/app-tabla-coberturas/div/div[1]/table/thead/tr/th[4]/div/div[1]/p[2]/span[1]');
    const thirdCoberPriceText = await thirdCoberPriceInfo.getText();
    const fourthCoberInfo = await $('/html/body/app-root/app-cotizador-step-three/div/div/div[2]/div/div[2]/app-tabla-coberturas/div/div[1]/table/thead/tr/th[5]/div/div[1]/p[1]');
    const fourthCoberText = await fourthCoberInfo.getText();
    const fourthCoberPriceInfo = await $('/html/body/app-root/app-cotizador-step-three/div/div/div[2]/div/div[2]/app-tabla-coberturas/div/div[1]/table/thead/tr/th[5]/div/div[1]/p[2]/span[1]');
    const fourthCoberPriceText = await fourthCoberPriceInfo.getText();



    const csvWriter = createObjectCsvWriter({
        path: 'secureCar.csv',
        header: [
            {id: 'carInfo', title: 'Car Info'},
            {id: 'carYear', title: 'Car Year'},
            {id: 'carBrand', title: 'Car Brand'},
            {id: 'userCp', title: 'User Cp'},
            {id: 'firstCoberExchange', title: 'Divisa de Coberturas'},
            {id: 'firstCoberText', title: 'Primera Cobertura'},
            {id: 'firstCoberPrice', title: 'Precio Primera Cobertura'},
            {id: 'secondCoberText', title: 'Segunda Cobertura'},
            {id: 'secondCoberPrice', title: 'Precio Segunda Cobertura'},
            {id: 'thirdCoberText', title: 'Tercera Cobertura'},
            {id: 'thirdCoberPrice', title: 'Precio Tercera Cobertura'},
            {id: 'fourthCoberText', title: 'Cuarta Cobertura'},
            {id: 'fourthCoberPrice', title: 'Precio Cuarta Cobertura'}

        ]
    });

    const records = [
        {carInfo: carTypeText, 
        carYear: carYearText,
        carBrand: carBrandText,
        userCp: userCpText,
        firstCoberExchange: firstCoberExchangeText,
        firstCoberText: firstCoberText,
        firstCoberPrice: firstCoberPriceText,
        secondCoberText: secondCoberText,
        secondCoberPrice: secondCoberPriceText,
        thirdCoberText: thirdCoberText,
        thirdCoberPrice: thirdCoberPriceText,
        fourthCoberText: fourthCoberText,
        fourthCoberPrice: fourthCoberPriceText}
    ];

    await csvWriter.writeRecords(records);
    console.log('Car info extracted');

});