const { $ } = require ('@wdio/globals')
const Page = require ('./page.js');

class InterPage extends Page {
    get selectVehicle() {
        return $('Label-f3sa2ys');
    }
    get btnQuote() {
        return $('Label-f3sa2ys');
    }
    get selectCarYear(){
        return $('#Container-gv8cs7h');
    }
    get selectCarModel(){
        return $('#Typeahead-cXosDd > div > div.css-1d8n9bt > div.css-ackcql'); //SUZUKI SWIFT
    }
    get selectCarVersion(){
        return $('#Label-576mnq');
    }
    get selectCarUse(){
        return $('#Label-0XnKMz');
    }
    get selectDriver(){
        return $('#Simpleradio-tMNVvd');
    }
    get selectGender(){
        return $('#Label-eM8Qui');
    }
    get inputYear(){
        return $('#Telephone-TN9ghX'); //10/01/1977
    }
    get inputCP(){
        return $('#Telephone-2sDPw8');
    }
    get btnContinue(){
        return $('#Button-48TBHz');
    }
    get inputName(){
        return $('#Input-TN9ghT'); //Pedro
    }
    get inputEmail(){
        return $('#Email-wskm9e'); //prueba@gmail.com
    }
    get inputPhone(){
        return $('#Telephone-mlHxui'); //55 6454 5559
    }
    get btnContinueTwo(){
        return $('#Button-Dz43uZ');
    }