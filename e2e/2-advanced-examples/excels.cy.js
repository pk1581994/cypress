const { readSheetNames,parseExcelDate}= require("read-excel-file")
const dataRowZero=[
    "Start Date",
    "Number Of Students",
    "Is Free",
    "Course Title"
];
const dataRowone =[
    "January",
    "Ten",
    "yes",
    "mac"
];
const dataRowTwo=[
    10,
    '10-2-2023',
    "true",
    'false'
];

describe('empty spec',()=>{
    it("read",()=>{
        cy.readFile('cypress\downloads\TestSample.xlsx').should('exist')
    })
})

it('read',()=>{
    cy.task("parsexlsx","cypress\downloads\TestSample.xlsx").then(
        jsonData=>{
            expect(jsonData[0].data[0]).to.eqls(dataRowZero);
        cy.log(dataRowZero[0])
        cy.log(dataRowZero[1])
        cy.log(dataRowZero[2])
        cy.log(dataRowZero[3])
    })
})