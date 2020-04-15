/// <reference types="cypress" />

describe('Given I am on goole search page', () => {
  it('Visits the google site', () => {
    cy.visit('http://www.google.co.uk')
  })

  describe('When I search for 1GBP to USD', () => {
    it('Search for GBP to USD', () => {
      cy.get('form').within(($form) => {
        // you have access to the found form via
        // the jQuery object $form if you need it

        // cy.get() will only search for elements within form,
        // not within the entire document
        cy.get('input[title="Search"]').type('1 GBP to USD')
        cy.root().submit()
      })
    })
  })


  describe('Then I can see search result for GBP to USD', () => {
    it('Assert search result contain conversation rate', () => {
      cy.get('div#knowledge-currency__updatable-data-column')
        .within(() => {
          cy.get('tr:nth-child(1) input')
            .should('have.value', '1')
          cy.get('tr:nth-child(3) input')
            .should('have.not.value', '0')

          cy.get('tr:nth-child(3) input')
            .invoke('attr', 'value')
            .then(parseFloat)
            .should('be.gt', 0)
        })
    })
    it('Assert search result contain conversation rate more than 0', () => {
      cy.get('#knowledge-currency__updatable-data-column span.DFlfde.SwHCTb')
        .invoke('text')
        .then(parseFloat)
        .should('be.gt', 0)
    })
  })
})
