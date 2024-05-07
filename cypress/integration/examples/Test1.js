/// <reference types="Cypress" />
//cypress - Spec (Any TestCase in JavaScript Called as Spec)

describe('my first Test Suite',function(){
    it('My First test Case',function(){
          cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
          cy.get('.search-keyword').type('ca')
          cy.wait(2000)
          cy.get('.product:visible').should('have.length',4)
          cy.get('.products').find('.product').should('have.length',4)

          //eq method is used to retrieve one of the elements in multiple elements 
          cy.get('.products').find('.product').eq(2).contains('ADD to CART',{matchCase: false}).click()
          cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
          })

          cy.get('.products').find('.product').each(($ele, index, $list) =>
          {
            const vegText = $ele.find('h4.product-name').text()
            if(vegText.includes('Cauliflower - 1 Kg'))
            {
                cy.wrap($ele).find('button').click()
            }
          })
          

    })
})