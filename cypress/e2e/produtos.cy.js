/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
       // cy.visit('http://lojaebac.ebaconline.art.br/produtos/') foi retirado a parte que repete nos 3 arqs e colcoado no cypress.config
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da Lista', () => {
        // Lista e variáveis - aula 11
        // quando for uma classe, colocar ponto (.), se for id colocar jogo da velha (#)
        // irá pegar o primeiro item da lista 
        //cy.get('.product-block.grid')
        cy.get('[class="product-block grid"]')
            //.first()                                  // Para pegar o primeirto item da lista
            //.last()                                   // Para pegar o último item da lista 
            //.eq(3)                                    // Para pegar o quarto item da lista
            .contains('Ariel Roll Sleeve Sweatshirt')   // Para pegar um determinado produto
            .click()
        
    });

    // Sem variáveis
    //it.only('Deve adicionar um produto ap carrinho', () => {
    //cy.get('[class="product-block grid"]')
    //  .contains('Abominable Hoodie').click()
    //cy.get('.button-variable-item-M').click()
    //cy.get('.button-variable-item-Green').click()
    //cy.get('.input-text').clear().type(2)
    //cy.get('.single_add_to_cart_button').click()

    //cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)  // Resultado esperado
    //cy.get('.woocommerce-message').should('contain', '2 × “Abominable Hoodie” foram adicionados no seu carrinho.')  // Resultado esperado
    //});

    //  Colocando variáveis
    // it('Deve adicionar um produto ao carrinho', () => {
    it.only('Deve adicionar um produto ao carrinho', () => {    // para rodar somente esse teste, utilizar it.only
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)  // Resultado esperado, substituiu pela variável
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')  // Resultado esperado, conctenou

    });

});