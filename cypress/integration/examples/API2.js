describe('Direct API Call Suite',()=>
{
    it('Direct API Call TestCase',()=>
{
    cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
        

            "name":"Cypress Automation with JavaScript",
            "isbn":"ABD",
            "aisle":"812",
            "author":"Sutikshan Kasyhyap"      
    }).then(function(response){
        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.status).to.eq(200)
    })
})
})