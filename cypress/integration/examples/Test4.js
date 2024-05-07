

import 'cypress-iframe'
describe("Ui related WebPage Test Suit",function(){
    it("UI Related WebPage TestCase",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        
        //CheckBox selection and validating result using Implict Assertion Should
        cy.get('input[type="checkbox"]:visible').check(['option1','option2','option3']).should('have.value','option1')

        //Static DropDown
        cy.get('select').select('option2').should('have.value','option2')
        cy.get('#autocomplete').type('ind')
        cy.wait(2000)
        cy.get('.ui-menu-item div').each(($ele,country,$list)=>{
            
            if($ele.text()==="India")
            {
                cy.wrap($ele).click()
            }  
        })
        cy.get('#displayed-text').should('be.visible')
        cy.get('#displayed-text').type('Hello sutikshan')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('[value="Alert"]').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        cy.on('window:confirm',(str)=>
        {
        return false;
        })
        cy.get('[value="Confirm"]').click()
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        // cy.get('#opentab').invoke('removeAttr','target').click();
        // cy.origin('https://www.qaclickacademy.com/',()=>{
        //     cy.get('.nav-item a[href*="about"]').click()
        //     cy.get('.mt-50 h2').should('have.text','Welcome to QAClick Academy ')
        // })
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($ele,index,$list)=>{
            const price = $ele.text()
            if(price.includes('WebSecurity'))
            {
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next()
                .then(function(price)
            {
                    const finalPrice  = price.text()
                    expect(finalPrice).to.equal('20')
            })
            }
        })
        
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        


    })
})