// const login = (name) => {
//     cy.session(name, (username,password) => {
//         cy.once('uncaught:exception', () => false);


//     })

// }

describe("test suite ", function () {

    // beforeEach(() => {
    //     login('user')
    // })
   
    it("first ", () => {
        //cy.xpath("//a[@href='services.htm'][contains(text(),'Services')][position()=1]").click()
        cy.Lagin(usern,user) 
        cy.xpath("//ul[@class='leftmenu']//li//a[@href='services.htm'][normalize-space()='Services']").click()
    })


})