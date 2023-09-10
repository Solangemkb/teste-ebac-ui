/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') Foi retirado uma parte e colocado no arquivo cypress.config, pois repete nos 3 arquivosw
        cy.visit('minha-conta/')

    });

    // Sem variáveis
    //it('Deve completar o pré cadastro com sucesso', () => {
        //cy.get('#reg_email').type(faker.internet.email())
        //cy.get('#reg_password').type('teste@teste.com')
        //cy.get(':nth-child(4) > .button').click()

        //cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        //cy.get('#account_first_name').type(faker.name.firstName())
        //cy.get('#account_last_name').type(faker.name.lastName())
        //cy.get('.woocommerce-Button').click()

        //cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    //});

    // Com variáveis
    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        //let emailFaker = faker.internet.email()        // para criar o e-mail com o primro nome diferente
        let emailFaker = faker.internet.email(nomeFaker) // para criar o e-mail com o primeiro nome igual
       // let emailFaker = faker.internet.email(nomeFaker+sobrenomeFaker) // para criar o e-mail com o primeiro nome igual + o úiltimo nomeclear
        
      
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

});