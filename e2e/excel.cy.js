describe("excel",function(){

    it('excel',()=>{
        cy.visit("https://parabank.parasoft.com/parabank/admin.htm")
    //    const excelFilePath="cypress\\fixtures\\cred.xlsx"
    //     const sheetName="login";
       
    cy.log( cy.task("generateJSONFromExcel",{excelFilePath:"C:\\Users\\princ\\Music\\login.xlsx.xlsx",sheetName:"login"}).then((user)=>{
        cy.get("input[fdprocessedid='gh70b']").type(user[0].Username)
            Credential.Password.type(cred.Password);
        }))
    })
    

    // it("Drag and drop png file",()=>{
    //     Cypress.on('uncaught:exception',()=>{
    //         return false;
    //     })
    //     cy.visit("https://demoqa.com/")
    //     cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
    //     cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
    //     cy.get("#uploadPicture").selectFile([{
    //         contents: 'cypress/fixtures/rock.png',
    //         fileName: 'file.png',
    //       }],{action:'drag-drop'})

    // })
})