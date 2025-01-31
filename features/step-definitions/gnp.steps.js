const {Given, When, Then} = require('@wdio/cucumber-framework'); 
const {expect, $, browser} = require('@wdio/globals'); 
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer'); 

const BanortePage = require ('../pageobjects/gnp.page.js'); 
const gnpPage = require('../pageobjects/gnp.page.js');
console.log('Loaded step definitions');

const pages = {
    gnp: gnpPage
}

Given('I am on the gnp quoter home page', async()=>{
    await pages.gnp.open();
});

When('I select my car type', async()=>{
    await gnpPage.selectVehicleTypeBy("AUTOMOVIL");
}); 

Then('I select my car year', async()=>{
    await gnpPage.selectCarYearBy("2024");
}); 

Then('I select my car brand', async()=>{
    await gnpPage.selectBrandCarBy("SUZUKI");
}); 

Then('I select my car subbrand', async()=>{
    await gnpPage.selectSubBrandCarBy("SUZUKI SWIFT");
}); 

Then('I select my car version', async()=>{
    await gnpPage.selectVersionCarBy("SWIFT BOOSTERJET L3 1.0 STDclear");
}); 

When('I fill the personal data form', async()=>{
    await gnpPage.fillPersonalInfo();
});

Then('I denied contact', async()=>{
    await gnpPage.selectContact("No");
});

Then('I accept the privacy notice', async()=>{
    await gnpPage.selectPrivacyBy();
});

Then('I accept the conditions and terms', async()=>{
    await gnpPage.selectTermnBy();
});

Then('I can see the quoter results' , async() => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe('https://www.gnp.com.mx/content/gnp-pp/mx/es/cotizador-auto/comparativa.html');
});  

When('I view my car info and extract it', async()=>{
    await browser.pause(5000);
    await gnpPage.btnCloseNotice.click();
    await browser.pause(5000);

    const carTypeInfo = await $('//*[@id="spa-root"]/app-main/aem-page/aem-model-provider/aem-responsivegrid/div[2]/aem-responsivegrid/div/app-comparativa/div[2]/div/div[1]/div[1]/div/div[2]/h4')
    const carTypeText = await carTypeInfo.getText();
    const carSumInsuredInfo = await $('//*[@id="spa-root"]/app-main/aem-page/aem-model-provider/aem-responsivegrid/div[2]/aem-responsivegrid/div/app-comparativa/div[2]/div/div[1]/div[1]/div/div[3]/p'); 
    const carSumInsurdText = await carSumInsuredInfo.getText();
    const carFinalPremiumInfo = await $('//*[@id="centrado"]/div[1]/div[1]/span[2]');
    const carFinalPremiumText = await carFinalPremiumInfo.getText();
    const userTotalMaterialDamageInfo = await $('//*[@id="spa-root"]/app-main/aem-page/aem-model-provider/aem-responsivegrid/div[2]/aem-responsivegrid/div/app-comparativa/div[2]/div/div[2]/div/div[1]/div/table/tbody/tr[1]/td[3]/app-detalle-cobertura/div/div/select');
    const userTotalMaterialDamageText = await userTotalMaterialDamageInfo.getText();
    const PartialMaterialDamageInfo = await $('//*[@id="spa-root"]/app-main/aem-page/aem-model-provider/aem-responsivegrid/div[2]/aem-responsivegrid/div/app-comparativa/div[2]/div/div[2]/div/div[1]/div/table/tbody/tr[2]/td[3]/app-detalle-cobertura/div/div/select');
    const PartialMaterialDamageText = await PartialMaterialDamageInfo.getText();    
    const totalTheftInfo = await $('//*[@id="spa-root"]/app-main/aem-page/aem-model-provider/aem-responsivegrid/div[2]/aem-responsivegrid/div/app-comparativa/div[2]/div/div[2]/div/div[1]/div/table/tbody/tr[4]/td[3]/app-detalle-cobertura/div/div/select');
    const totalTheftText = await totalTheftInfo.getText();
    const roadassistanceInfo = await $('//*[@id="spa-root"]/app-main/aem-page/aem-model-provider/aem-responsivegrid/div[2]/aem-responsivegrid/div/app-comparativa/div[2]/div/div[2]/div/div[1]/div/table/tbody/tr[5]/td[3]/app-detalle-cobertura/div');
    const roadassistanceText = await roadassistanceInfo.getText();

      const csvWriter = createObjectCsvWriter({
        path: 'secureCarGNP.csv',
        header: [
            {id: 'carTypeInfo', title: 'Vehículo a asegurar'},
            {id: 'carSumInsuredInfo', title: 'Suma asegurada'},
            {id: 'carFinalPremiumInfo', title: 'Prima Final Cobertura Amplia'},
            {id: 'userTotalMaterialDamageInfo', title: 'Deducible Daño Total'},
            {id: 'PartialMaterialDamageInfo', title: 'Deducible Daño Parcial'},
            {id: 'totalTheftInfo', title: 'Deducible Robo Total'},
            {id: 'roadassistanceInfo', title: 'Cobertura Responsabilidad Civil'},
            

        ]
    });

    const records = [
        {carTypeInfo: carTypeInfo, 
        carSumInsuredInfo: carSumInsuredInfo,
        carFinalPremiumInfo: carFinalPremiumInfo,
        userTotalMaterialDamageInfo: userCpText,
        PartialMaterialDamageInfo: firstCoberExchangeText,
        totalTheftInfo: firstCoberText,
        roadassistanceInfo: firstCoberPriceText}
    ];

    await csvWriter.writeRecords(records);
    console.log('Car info extracted');

});




