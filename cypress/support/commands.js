// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// cypress.command.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// comandos da pasta e2e-pedido.cy.js (saucedemo)
//Cypress.Commands.add('login', (usuario, senha) => { 
//    cy.get('[data-test="username"]').type(usuario)
//    cy.get('[data-test="password"]').type(senha)
//    cy.get('[data-test="login-button"]').click()
//})

Cypress.Commands.add('adicionarProduto', (produto) => {
    cy.contains(produto).click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
})

Cypress.Commands.add('cadastro', (nome, sobrenome, cep) => {
    cy.get('[data-test="firstName"]').type(nome)
    cy.get('[data-test="lastName"]').type(sobrenome)
    cy.get('[data-test="postalCode"]').type(cep)
    cy.get('[data-test="continue"]').click()

})

// comandos da pasta e2e (login.cy.js)
Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
})
// (pre-cadastro.cy.js)
Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
})

// (produtos.cy.js)
Cypress.Commands.add('addProdutos', (produto, tamanho, cor, quantidade) => {
    cy.get('[class="product-block grid"]')
        .contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

})