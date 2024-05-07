

import 'cypress-iframe'
describe("API Automation Suit",function(){
    it("API Automation TestCase",function(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
       cy.intercept({
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
       },
       {
            statusCode: 200,
            body: [{
                "book_name": "Learning API automation using postman",
                "isbn": "RS711",
                "aisle": "444455"
            }]
       }).as('GetBooks')
       cy.get('button[class="btn btn-primary"]').click()
       cy.wait('@GetBooks')

    })
})