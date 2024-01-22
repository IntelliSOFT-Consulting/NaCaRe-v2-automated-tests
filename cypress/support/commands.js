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


Cypress.Commands.add("baseurl", () => {
    cy.visit("https://findhai.intellisoftkenya.com/dhis-web-commons/security/login.action")
})

Cypress.Commands.add('login', () => {
    cy.get('#j_username').type('admin').should("have.value", "admin")
    cy.get('#j_password').type('Admin123').should("have.value", "Admin123")
})

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})