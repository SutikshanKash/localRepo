import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "/Users/sutikshankashyap/CypressAutomation/cypress/integration/PageObjects/HomePage"
import ProductsPage from "/Users/sutikshankashyap/CypressAutomation/cypress/integration/PageObjects/ProductsPage"
import ConfirmPage from "/Users/sutikshankashyap/CypressAutomation/cypress/integration/PageObjects/ConfirmPage"
const homepage = new HomePage()
        const productsPage = new ProductsPage()     //creating object for the ProductPage Class
        const confirmPage = new ConfirmPage()  

Given('Open Ecommerce Page',()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/") 
    
})
When('Click on shop button',()=>
{
    homepage.getShopButton().click()
    cy.wait(2000)
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })
   
})

Then('Select Product and Verify and checkout!',()=>
{
    
   
   productsPage.getCheckOutButton().click()
    var totalAmount = 0
   confirmPage.getAmount().each(($ele)=>{
        const amount = $ele.text().split(" ")[1]
        totalAmount = parseInt(amount)+totalAmount
        
 })
})

When('enter the details',()=>
{
    homepage.getName().type(this.data.name)
        homepage.getEmail().type(Cypress.env('email'))
        homepage.getPassword().type(Cypress.env('password'))
        homepage.getDOB().type(this.data.dob)
        homepage.getGender().select(this.data.gender).should('have.value','Male')
        
})

Then('Click on shop Page',()=>
{
    homepage.getEmloymentStatus().check().should('be.checked')
    homepage.getCheckBox().check().should('be.checked')
        homepage.getSubmitButton().click()
        homepage.ValidateSuccessMsg().should('have.text','Success!')
})
