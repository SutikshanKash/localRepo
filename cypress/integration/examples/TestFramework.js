
import HomePage from "../PageObjects/HomePage"
import ProductsPage from "../PageObjects/ProductsPage"
import ConfirmPage from "../PageObjects/ConfirmPage"
describe('Online Shoping Cart Page',()=>
{
    
    before(function(){
        
        //run before test suite (it will run only once)
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
    it('Online Shopping',function(){     //test case name
        Cypress.config('defaultCommandTimeout',8000)
        cy.log(Cypress.config('defaultCommandTimeout'))
        const homepage = new HomePage()
        const productsPage = new ProductsPage()     //creating object for the ProductPage Class
        const confirmPage = new ConfirmPage()   //creating object for the ConfirmPage Class
        cy.visit(Cypress.env('url')+"/angularpractice/")    //setting environement variable url 
        homepage.getName().type(this.data.name)
        homepage.getEmail().type(Cypress.env('email'))
        homepage.getPassword().type(Cypress.env('password'))
        homepage.getCheckBox().check().should('be.checked')
        homepage.getDOB().type(this.data.dob)
        homepage.getGender().select(this.data.gender).should('have.value','Male')
        homepage.getEmloymentStatus().check().should('be.checked')
        homepage.getSubmitButton().click()
        homepage.ValidateSuccessMsg().should('have.text','Success!')
        homepage.getShopButton().click()
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
       productsPage.getCheckOutButton().click()
        var totalAmount = 0
       confirmPage.getAmount().each(($ele)=>{
            const amount = $ele.text().split(" ")[1]
            totalAmount = parseInt(amount)+totalAmount
            
     })
     var confrirmAmount = ""
     confirmPage.getTotalAmount().then(function(amount){    //handling promises
        confrirmAmount   = amount.text().split(" ")[1].trim()
        cy.log(confrirmAmount)
        expect(Number(confrirmAmount)).to.equal(totalAmount) //explicit assertion
     }) 
       productsPage.getSuccessCheckOut().click()
       confirmPage.getCountry().type('India')
       confirmPage.getCountryClick().click()
       confirmPage.getCheckBox().click({force:true})


       
    })
})