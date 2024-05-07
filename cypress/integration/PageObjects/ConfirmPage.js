class ConfirmPage
{
    
    getCountry()
    {
        return cy.get('#country')
    }
    getCountryClick()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    getCheckBox()
    {
        return cy.get('.checkbox > label')
    }
    getAmount()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    getTotalAmount()
    {
        return cy.get('h3 > strong')
    }
}
export default ConfirmPage