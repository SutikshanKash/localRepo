class HomePage{
    getName()
    {
        return  cy.get("input[name='name']:nth-child(2)")
    }

    getEmail()
    {
        return cy.get("input[name='email']")
    }
    getPassword()
    {
        return cy.get("#exampleInputPassword1")
    }
    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }
    getCheckBox()
    {
        return cy.get("#exampleCheck1")
    }
    getDOB()
    {
        return cy.get("input[name='bday']")
    }
    getEmloymentStatus()
    {
        return cy.get("input[value='option2']")
    }
    getSubmitButton()
    {
        return cy.get('.btn-success:visible')
    }
    ValidateSuccessMsg()
    {
        return cy.get('.alert-success strong')
    }
    getShopButton()
    {
        return cy.get("a[href*='shop']")
    }


}
export default HomePage;