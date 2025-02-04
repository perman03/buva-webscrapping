const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')
const {createObjectCsvWriter} = require('csv-writer');
const SantanderPage = require('../pageobjects/santander.page.js');
//const securePage = require('../pageobjects/secure.page');

const pages = {
    santander: SantanderPage
}

Given('I am on the santander quoter home page', async() => {
    await pages.santander.openAutocompara();
});

When('I select the type of car', async() => {
        await SantanderPage.selectTypeCarOption();
})

When('I fill my car year', async() => {
    await browser.pause(10000);
    await SantanderPage.fillDataYear();
    await browser.pause(10000);
});

When('I select my car brand', async() => {
    await SantanderPage.fillDataBrand();
});


When('I fill the personal data form', async() => {
    await SantanderPage.fillPersonalInfo();
    await browser.pause(5000);
});
Then('I can see the quoter results' , async() => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe('https://www.autocompara.com/cotizacion/comparador');
}); 
When('I view my car info and extract it', async()=>{
    await browser.pause(5000);
    //Información general general
    const carBrandInfo = await $('/html/body/app-root/block-ui/div/div/ac-quotation/section/div[2]/div[1]/div/p[2]/span[2]')
    const carBrandText = await carBrandInfo.getText();
    const carYearInfo = await $('/html/body/app-root/block-ui/div/div/ac-quotation/section/div[2]/div[1]/div/p[2]/span[3]'); 
    const carYearText = await carYearInfo.getText();
    const userPolicyTermInfo = await $('/html/body/app-root/block-ui/div/div/ac-quotation/section/div[2]/div[1]/div/p[2]/span[4]');
    const userPolicyTermText = await userPolicyTermInfo.getText();
   
   //Información de tipo de cobertura
    const TypeCoberInfo = await $('/html/body/app-root/block-ui/div/div/ac-quotation/section/div[4]/div[1]/div[1]/div[2]/div[2]/label');
    const TypeCoberText = await TypeCoberInfo.getText();
    const damageDeductibleInfo = await $('/html/body/app-root/block-ui/div/div/ac-quotation/section/div[4]/div[1]/div[1]/div[3]/p[2]');
    const damageDeductibleText = await damageDeductibleInfo.getText();
    const theftDeductibleInfo = await $('/html/body/app-root/block-ui/div/div/ac-quotation/section/div[4]/div[1]/div[1]/div[4]/p[2]');
    const theftDeductibleText = await theftDeductibleInfo.getText();
    const paymentInfo = await $('/html/body/app-root/block-ui/div/div/ac-quotation/section/div[4]/div[1]/div[1]/div[5]/ng-select/div/div/div[3]');
    const paymentText = await paymentInfo.getText();

    //Comparador
        await browser.pause(5000);
        await SantanderPage.selectOptions.click();
        await browser.pause(5000);

    const firstOptionName = await $('/html/body/ngb-modal-window/div/div/ac-modal-table-comparator/div[2]/div[1]/div[1]/div[2]/div/div[1]/div/ng-select/div/div/div[3]');
    const firstNameText = await firstOptionName.getText(); 
    const firstOptionPrice= await $('/html/body/ngb-modal-window/div/div/ac-modal-table-comparator/div[2]/div[1]/div[1]/div[1]/div[2]/div/p[3]');
    const firstPriceText = await firstOptionPrice.getText(); 

    const SecondOptionName = await $('/html/body/ngb-modal-window/div/div/ac-modal-table-comparator/div[2]/div[1]/div[2]/div[2]/div/div[1]/div/ng-select/div/div/div[3]');
    const SecondNameText = await SecondOptionName.getText(); 
    const SecondOptionPrice= await $('/html/body/ngb-modal-window/div/div/ac-modal-table-comparator/div[2]/div[1]/div[2]/div[1]/div[2]/div/p[2]');
    const SecondPriceText = await SecondOptionPrice.getText(); 

    const ThirdOptionName = await $('/html/body/ngb-modal-window/div/div/ac-modal-table-comparator/div[2]/div[1]/div[3]/div[2]/div/div[1]/div/ng-select/div/div/div[3]');
    const ThirdNameText = await ThirdOptionName.getText(); 
    const ThirdOptionPrice= await $('/html/body/ngb-modal-window/div/div/ac-modal-table-comparator/div[2]/div[1]/div[3]/div[1]/div[2]/div/p[2]');
    const ThirdPriceText = await ThirdOptionPrice.getText(); 
   
   
    const csvWriter = createObjectCsvWriter({
        path: 'secureCarAutocompara.csv',
        header: [
            {id: 'carBrand', title: 'Automovil'},
            {id: 'carYear', title: 'Año'},
            {id: 'policyTerm', title: 'Vigencia de poliza'},
            {id: 'typeCober', title: 'Tipo de cobertura'},
            {id: 'damageDeductible', title: 'Deducible daños materiales'},
            {id: 'theftDeductible', title: 'Deducible robo total'},
            {id: 'typePaymentInfo', title: 'Forma de pago'},
            {id: 'firstCoberName', title: 'Primera aseguradora'},
            {id: 'firstCoberPrice', title: '1. Pago único anual '},
            {id: 'secondCoberName', title: 'Segunda aseguradora'},
            {id: 'secondCoberPrice', title: '2. Pago único anual '},
            {id: 'thirdCoberName', title: 'Tercera aseguradora'},
            {id: 'thirdCoberPrice', title: '3. Pago único anual '},

        ]
    });

    const records = [
        {carBrand: carBrandText,
        carYear: carYearText,
        policyTerm: userPolicyTermText,
        typeCober: TypeCoberText,
        damageDeductible: damageDeductibleText,
        theftDeductible: theftDeductibleText,
        typePaymentInfo: paymentText,
        firstCoberName: firstNameText,
        firstCoberPrice: firstPriceText,
        secondCoberName: SecondNameText,
        secondCoberPrice: SecondPriceText,
        thirdCoberName:ThirdNameText,
        thirdCoberPrice:ThirdPriceText}
    ];

    await csvWriter.writeRecords(records);
    console.log('Car info extracted');

    
});