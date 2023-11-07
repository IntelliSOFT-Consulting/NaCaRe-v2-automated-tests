import { faker } from "@faker-js/faker";

const firstName = faker.name.firstName();
const middleName = faker.name.firstName();
const familyName = faker.name.lastName();

describe("NaCaRe -KE 2.0 Automated test", () => {
  it.only("Visits the homepage", () => {
    cy.visit("http://45.79.116.38:8080/dhis-web-commons/security/login.action");
    cy.focused().should("have.id", "j_username");
    cy.get("#j_username").type("admin");
    cy.get("#j_password").type("district");

    cy.get("#submit").click();

    cy.wait(7000);

    cy.get('[data-test="headerbar-apps-icon"]').click();
    cy.get('[href="../api/../dhis-web-tracker-capture/index.action"]').click();

    cy.wait(7000);

    cy.get("#searchIcon").click();

    cy.get("#searchField").type("aga khan");

    // cy.wait(7000);

    cy.contains("Aga Khan Bomet").click();

    cy.wait(7000);

    cy.get(".nav > :nth-child(3) > .ng-binding").click();

    cy.wait(3000);

    const randomNumber =
      Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    // console.log(randomNumber);

    cy.get(
      ':nth-child(1) > .dhis2-list-table-striped > tbody > :nth-child(1) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
    ).type(randomNumber);

    cy.get(
      ':nth-child(2) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
    ).type(firstName);
    cy.get(
      ':nth-child(3) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
    ).type(middleName);
    cy.get(
      ':nth-child(4) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
    ).type(familyName);
    cy.get(
      ':nth-child(5) > .absorbing-column > ng-form.ng-pristine > [ng-if="attribute.optionSetValue"] > .hideInPrint > .ng-isolate-scope > .optionListContainer > .optionListInput > .optionListInputToggle'
    ).click();
    cy.contains("National ID").click();
    cy.get(
      ':nth-child(6) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
    ).type(randomNumber);

    cy.get(
      ':nth-child(1) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
    )
      .click()
      .type("1992-12-03");

    cy.get(
      ':nth-child(2) > .absorbing-column > ng-form.ng-pristine > [ng-if="attribute.optionSetValue"] > .hideInPrint > .ng-isolate-scope > .optionListContainer > .optionListInput > .optionListInputToggle'
    ).click();

    cy.contains("Male").click();

    // cy.get(".input-group-btn > .btn").click();

    cy.get(':nth-child(4) > .absorbing-column > ng-form.ng-pristine > [ng-if="attribute.optionSetValue"] > .hideInPrint > .ng-isolate-scope > .optionListContainer > .optionListInput > .optionListInputToggle').click();

    cy.contains("NHIF").click();

    cy.get('.btn-primary').click();
  });
});
