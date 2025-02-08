const {Given, When, Then} = require('@wdio/cucumber-framework'); 
const {expect, $, browser} = require('@wdio/globals'); 
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer'); 

const CitiPage = require ('../pageobjects/citi.page.js'); 
console.log('Loaded step definitions');

const pages = {
    citi: CitiPage
}

    Given('I am on the banorte quoter home page', async()=>{
        await pages.citi.open();
    });

    /* When('I select quote online', async()=>{
        await CitiPage.selectQuote();
        await this.selectQuote.waitForExist({ timeout: 5000 });
    }); */
    When('I select my car year', async()=>{
        await CitiPage.selectYear();
        await browser.pause(5000);
    });
    When('I select my car brand', async()=>{
        await CitiPage.selectBrand();
        await browser.pause(5000);
    });
    When('I select my car model', async()=>{
        await CitiPage.selectModel();
        await browser.pause(5000);
    });
    When('I select my car version', async()=>{
        await CitiPage.selectModel();
        await browser.pause(5000);
    });


