describe("sdsdsd", function () {
    it("ss", () => {
        cy.visit("www.google.com")
        // cy.get('.gLFyf').type("jhj")
        
        // cy.intercept({
        //     method:"GET",
        //     url:"https://www.saucedemo.com/inventory.html"
        // },{ status:"400",
        //     body:"you are not a valid user"
        // }
        // )
        cy.intercept("POST","https://www.google.com/search?q=saurabh", (res) => {
           res.url="https://www.google.com/search?q=malhotra"
           res.continue((sum)=>{
            //expect(sum.stauscode).to.equal(200)
           })
        }).as("rol")
        cy.get('.FPdoLc > center > .gNO89b').click({force:true})
        cy.wait('@rol')
        
    })
})