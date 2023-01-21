// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('Lagin',(username,password)=>{
cy.session([username,password],()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC")
    cy.xpath('//input[@name="username"]').type(username)
    cy.xpath('//input[@name="username"]').type(password)
    cy.xpath('//input[@class="button"][@value="Log In"]').click()
    })
})
