const {Given, When, Then} = require('@wdio/cucumber-framework'); 
const {expect, $, browser} = require('@wdio/globals'); 
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer'); 

const MapfrePage = require ('../pageobjects/mapfre.page.js'); 
console.log('Loaded step definitions');

const pages = {
    mapfre: MapfrePage
}

Given('I am on the mapfre quoter home page', async()=>{
    await pages.mapfre.open();
});

When('I select my car brand', async()=>{
    await MapfrePage.selectCarBrandBy("SUZUKI");
    await browser.pause(5000);
}); 

Then('I select my car year', async()=>{
    await MapfrePage.selectCarYearBy();
    await browser.pause(5000);
});
Then('I select my car model', async()=>{
    await MapfrePage.selectCarModelBy("SWIFT 1.2 GLX TA");
    await browser.pause(5000);
});
When('I fill the personal data form', async()=>{
    await MapfrePage.fillPersonalInfo();
    
});

Then('I can see the quoter results', async()=>{
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe('https://mapfreauto.rastreator.mx/resultados');
});
When('I view my car info and extract it', async()=>{
    await browser.pause(5000);
    await MapfrePage.btnDetails.click();
    
    const carBrandInfo = await $('/html/body/app/app-quote-base/div/app-container/div/div/div/div/p/strong[1]')
    const carBrandText = await carBrandInfo.getText();
    const carModelInfo = await $('/html/body/app/app-quote-base/div/app-container/div/div/div/div/p/strong[2]'); 
    const carModelText = await carModelInfo.getText();

    const firstOptionInfo = await $('//*[@id="Amplia_1"]/ul/li[1]/div[1]/div');
    const firstOptionText = await firstOptionInfo.getText();
    const firstPriceInfo = await $('//*[@id="Amplia_1"]/ul/li[1]/div[2]/strong');
    const firstPriceText = await firstPriceInfo.getText();
    const firstDeductibleHeistInfo = await $('//*[@id="Amplia Premium 2_2"]/ul/li[2]/div/div/p[3]/span/span');
    const firstHeistText = await firstDeductibleHeistInfo.getText();
    const firstDamageInfo = await $('//*[@id="Amplia_1"]/ul/li[2]/div/div/p[4]/span/span');
    const firstDamageInfoText = await firstDamageInfo.getText();

    const secondOptionInfo = await $('//*[@id="Amplia Premium_4"]/ul/li[1]/div[1]/div');
    const secondOptionText = await secondOptionInfo.getText();
    const secondPriceInfo = await $('//*[@id="Amplia Premium_4"]/ul/li[1]/div[2]/strong');
    const secondPriceText = await secondPriceInfo.getText();
    const secondDeductibleHeistInfo = await $('//*[@id="Amplia Premium_4"]/ul/li[2]/div/div/p[3]/span/span');
    const secondHeistText = await secondDeductibleHeistInfo.getText();
    const secondDamageInfo = await $('//*[@id="Amplia Premium_4"]/ul/li[2]/div/div/p[4]/span/span');
    const secondDamageText = await secondDamageInfo.getText();

    
    const csvWriter = createObjectCsvWriter({
        path: 'secureCarMapfre.csv',
        header: [
            {id: 'carBrand', title: 'Marca Auto'},
            {id: 'carModel', title: 'Modelo Auto'},
            {id: 'firstOption', title: 'Primera Cobertura'},
            {id: 'firstPrice', title: 'Precio Anual 1'},
            {id: 'firstHeistDeductible', title: 'Deducible robo total 1'},
            {id: 'firstDamgeDeductible', title: 'Deducible daños 1'},
            {id: 'secondOption', title: 'Segunda Cobertura'},
            {id: 'secondPrice', title: 'Precio Anual 2'},
            {id: 'secondHeistDeductible', title: 'Deducible robo total 2'},
            {id: 'secondDamageDeductible', title: 'Deducible daños 2'}
            

        ]
    });

    const records = [
        {carBrand: carBrandText, 
        carModel: carModelText,
        firstOption: firstOptionText,
        firstPrice: firstPriceText,
        firstHeistDeductible: firstHeistText,
        firstDamgeDeductible: firstDamageInfoText,
        secondOption: secondOptionText,
        secondPrice: secondPriceText,
        secondHeistDeductible: secondHeistText,
        secondDamageDeductible: secondDamageText}
        
    ];

    await csvWriter.writeRecords(records);
    console.log('Car info extracted');

});