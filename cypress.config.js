const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  //  baseUrl:'https://www.saucedemo.com/', //(comando do e2e-pedido.cy.js)
      baseUrl:'http://lojaebac.ebaconline.art.br/minha-conta',
    chromeWebSecurity: false
  },
});
