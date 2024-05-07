describe('This is my Practice Suite',function(){
    it('This is my Test Case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword:visible').type('be')
        cy.wait(2000)
        cy.get('.products').find('.product:visible').should('have.length',5)
        cy.get('.products').find('.product:visible').eq(3).contains('add to cart',{matchCase: false}).click()
        cy.get('.products').find('.product').each(($elem, index, $list) => {
            const product = $elem.find('h4.product-name').text()
            if(product.includes('Beans - 1 Kg'))
            {
                cy.wrap($elem).find('button').click()
            }

        })

    })
})