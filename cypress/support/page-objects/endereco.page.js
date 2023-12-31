class EnderecoPage{                      // criar uma classe que pode começar com maiúsculo

    editarEnderecoFaturamento(nome, sobrenome, empresa, país, endereco, numero, cidade, estado, cep, telefone, email) {        // é um método
        //elementos + ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(país).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()
    }
        
    editarEnderecoEntrega(nome, sobrenome, empresa, país, endereco, numero, cidade, estado, cep) {            // é um método
        // elementos + ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name').clear().type(sobrenome)
        cy.get('#shipping_company').clear().type(empresa)
      //  cy.get('#select2-shipping_country-container'),click().type(país).get('aria-haspopup="true"').click()
        cy.get('#select2-shipping_country-container').click().type(país).click()
        cy.get('#shipping_address_1').clear().type(endereco)
        cy.get('#shipping_address_2').clear().type(numero)
        cy.get('#shipping_city').clear().type(cidade)
        cy.get('#select2-shipping_state-container').click().type(estado + '{enter}')
        cy.get('#shipping_postcode').clear().type(cep)
        cy.get('.button').click()
    }

}

export default new EnderecoPage()      // Para que a classe fique exposta para que outros arqs possa enxergar