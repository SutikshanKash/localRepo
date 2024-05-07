describe( "This is my second test Suit", function(){
    it("this is my First Test Case of Second Suit", function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('b')
        cy.wait(2000)
        cy.get('.products div.product').as('productLocator')
        cy.get('@productLocator').should('have.length',8)
        cy.get('@productLocator').eq(2).contains('add to cart',{matchCase: false}).click()
        cy.get('@productLocator').each(($el,index,$list)=>{
            const textVeg = $el.find('h4').text()
            if(textVeg.includes('Brocolli - 1 Kg'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.brand').should('have.text','GREENKART').then(function(){
            console.log('sf')
        })
        cy.get('.brand').then(function(logo)
    {
        cy.log(logo.text())
    })
    
    

    })
    

})