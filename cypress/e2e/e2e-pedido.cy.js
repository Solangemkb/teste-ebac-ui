/// <reference types="cypress" />

describe('Teste de ponta a ponta em Saucelabs', () => {
    beforeEach( () =>{
        cy.visit('/')

    });

    it('Deve fazer o pedido de ponta a ponta', () => {
        // Teste end to end
        // Login
        cy.login('standard_user', 'secret_sauce')
        
        // Adicionar produto
        cy.adicionarProduto('Sauce Labs Backpack')
        cy.adicionarProduto('Sauce Labs Bike Light')

        // Clicar no carrrinho
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()

        // cadastro
        cy.cadastro('Ana', 'Lucia', '040302-000')

        cy.get('[data-test="finish"]').click()
       
        cy.get('.complete-header').should('contain', 'Thank you for your order!')
        
    });

});