const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    openAutocompara() {
        return browser.url('https://www.autocompara.com/')
    }

    openBanorte(){
        return browser.url('https://www.segurosbanorte.com.mx/cotizacion-autos')
    }
    openSecondFormBanorte(){
        return browser.url('https://www.segurosbanorte.com.mx/cotizacion-autos/datos-personales') //segunda página diferente
    }

    openMapfre(){
        return browser.url('https://mapfre.rastreator.mx/')
    }
    openGnp(){
        return browser.url('https://www.gnp.com.mx/content/gnp-pp/mx/es/cotizador-auto/datos-vehiculo.html')
    }

    openInbursa(){
        return browser.url('')
    }

    openAxa(){
        return browser.url('')
    }
    openInter(){
        return browser.url('https://www.inter.mx/landing');
    }
    openCiti(){
        return browser.url('https://www.citibanamexchubb.com/autov/Seguro-de-auto/cotizador/informacion-auto/year?lid=MX%7Cseguros%7Cseguro-de-auto-protegido-TextoTop-Acquisition-IrSeguroDeAuto-ES');
    }



}