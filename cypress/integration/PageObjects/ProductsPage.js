class ProductsPage
{

    getProduct()
    {
        return cy.get('h4.card-title a')
    }
    getCartButton(){

        return cy.get('button.btn.btn-info')
    }
    getCheckOutButton()
    {
        return cy.get('a.nav-link.btn.btn-primary')
    }
    getSuccessCheckOut()
    {
        return cy.get('.btn.btn-success')
    }
    
}
export default ProductsPage;