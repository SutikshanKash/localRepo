describe('this is end to end TestSuit for GreenKart WebPage',function(){
    it('this is end to end TestCase for GreenKart WebPage',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('b')
       cy.wait(2000)
        var item1 = ["Beetroot - 1 Kg","Beans - 1 Kg"]
        
        
        
        cy.get('.products .product:visible').each(($ele,item,$list)=>{
            const textVal = $ele.find('h4').text()
            if(textVal.includes(item1[0]))
            {
                cy.wrap($ele).find('button').click()
              
            }
          })
        
      cy.get('.products .product:visible').each(($ele,item,$list)=>{
        const textVal = $ele.find('h4').text()
        if(textVal.includes(item1[1]))
        {
            cy.wrap($ele).find('button').click()
          
        }
      })
     
      cy.get('.cart-icon').click()
      
      cy.get('.action-block button[type="button"]:visible').click()
      cy.wait(2000)
      //cy.get('.products button:nth-child(14)').click()
      cy.contains('Place order',{matchCase: false}).click()

        
       
    })
})