const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')
const {createObjectCsvWriter} = require('csv-writer');

const SantanderPage = require('../pageobjects/santander.page');
//const securePage = require('../pageobjects/secure.page');

const pages = {
    santander: SantanderPage
}

Given('I am on the Santander Landing Page', async() => {
    await pages['santander'].openAutocompara();
});

When('I fill the vehicle year', async() => {
    await browser.pause(10000);
    await SantanderPage.fillDataYear('2020');
    await browser.pause(5000);
});

When('I fill the vehicle brand', async() => {
    await browser.pause(10000);
    await SantanderPage.fillDataBrand('JETTA GLI DSG 2.0L 4CIL 4PTAS');
    await browser.pause(5000);
});