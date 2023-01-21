// describe('new migration testing',function() {

//     it('login into the page',function() {
//      cy.visit('https://tygar.vinivia.dev/')
//      cy.get('.ant-btn').click()
//   //cy.get('.social > :nth-child(2)').click() 
//   // cy.origin("https://dev-8hox13qu.us.auth0.com/login/",()=> cy.get(':nth-child(2) > .icon > .anticon > svg').click() 
//   cy.origin('https://dev-8hox13qu.us.auth0.com/login/',()=>{ 
//     //cy.get('.auth0-lock-input').type('manjulaj.0892@gmail.com') 
//     //cy.get('.auth0-label-submit').click()
//      cy.get('.auth0-lock-social-button-text') 
//      cy.get('a:nth-child(3) div:nth-child(2)').click() 
//      cy.get('#identifierId').type("manjulaj.0892@gmail.com") 
//     })
//  }) })
describe("", function () {
    it("navigates", () => {
        cy.visit("https://www.tutorialspoint.com/market/index.asp");
        cy.get('.navbar-toggler-animation').click()
        cy.get('.login-options > .header-widget-icon').click()
        const url = "https://accounts.google.com/o/oauth2/auth/identifier?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.tutorialspoint.com%3Fid%3Dauth896812&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=934794922040-uhm0visbsvgk33aipstahdspovr172ic.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.tutorialspoint.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow"
        cy.window().then(win => {
            cy.stub(win, "open").as('rock')
        })
        cy.get('#btnGoogleLogin').click()
        cy.get("@rock")
        cy.window().then(win => {
            win.location.href = url
            cy.origin("https://accounts.google.com", () => {
                cy.get("#identifierId").type("asa")
            })
        })

        //  cy.origin("https://facebook.com", () => {});
    });

    it.only("sooo",()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get("user-name").type("standard_user")
        cy.get("password").type("secret_sauce")
    })
})
