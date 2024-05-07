

import 'cypress-iframe'
describe("Ui related WebPage Test Suit",function(){
    it("UI Related WebPage TestCase",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        
        
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        


    })
})