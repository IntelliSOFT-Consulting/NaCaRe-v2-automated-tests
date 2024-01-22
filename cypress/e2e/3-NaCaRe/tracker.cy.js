// import React from 'react';
import { faker } from "@faker-js/faker";

const firstName = faker.name.firstName();
const middleName = faker.name.firstName();
const familyName = faker.name.lastName();

describe("NaCaRe -KE 2.0 Automated test", () => {
  for (let i = 0; i < 100; i++) {
    it.only("Visits the homepage", () => {
      cy.visit("http://45.79.116.38:8080/dhis-web-commons/security/login.action");
      cy.focused().should("have.id", "j_username");
      cy.get("#j_username").type("admin");
      cy.get("#j_password").type("district");

      cy.get("#submit").click();

      cy.wait(7000);

      cy.get('[data-test="headerbar-apps-icon"]').click();

      cy.wait(5000);

      cy.get('[href="../api/../dhis-web-tracker-capture/index.action"]').click();

      cy.wait(3000);

      cy.get("#searchIcon").click();

      const healthFacility = {
        "Aga Khan": "Aga Khan Bomet",
        "Homabay": "Homabay Central Medical Clinic",
        "Wiga": "Wiga Dispensary",
        "Itonguri": "Itonguri Dispensary",
        "Kanyoni": "Kanyoni Dispensary",
        "Endiba": "Endiba Health Centre",
        "Boro": "Boro Dispensary",
        "Ebukhaya": "Ebukhaya Dispensary",
        "Baraa": "Baraa VCT",
        "Bangali": "Bangali Dispensary",
        "Kavata": "Kavata Nzou Dispensary",
        "Makindu": "Makindu Pathology & Lab",
        "Usungu": "Usungu Dispensary",
        "Gatanga": "Gatanga Dispensary"
      };

      const healthTypes = Object.keys(healthFacility);
      const randomHealthType =
        healthTypes[Math.floor(Math.random() * healthTypes.length)];
      const matchingFacility = healthFacility[randomHealthType];


      cy.get("#searchField").type(randomHealthType);

      cy.wait(5000);


      cy.contains(matchingFacility).click();

      cy.wait(10000);

      cy.get(".nav > :nth-child(3) > .ng-binding").click();

      cy.wait(1000);

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

      function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      const randomBirthday = randomDate(new Date(1950, 0, 1), new Date(2022, 0, 1));
      const formattedBirthday = randomBirthday.toISOString().split('T')[0];


      cy.get(
        ':nth-child(1) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
      )
        .click()
        .type(formattedBirthday);

      cy.get(
        ':nth-child(4) > .absorbing-column > ng-form.ng-pristine > [ng-if="attribute.optionSetValue"] > .hideInPrint > .ng-isolate-scope > .optionListContainer > .optionListInput > .optionListInputToggle'
      ).click();

      cy.contains("Male").click();

      // cy.get(".input-group-btn > .btn").click();

      cy.get(
        ':nth-child(6) > .absorbing-column > ng-form.ng-pristine > [ng-if="attribute.optionSetValue"] > .hideInPrint > .ng-isolate-scope > .optionListContainer > .optionListInput > .optionListInputToggle'
      ).click();

      cy.contains("NHIF").click();

      cy.get(
        ':nth-child(8) > .absorbing-column > ng-form.ng-pristine > [ng-if="attribute.optionSetValue"] > .hideInPrint > .ng-isolate-scope > .optionListContainer > .optionListInput > .optionListInputToggle'
      ).click();

      cy.contains("Current facility").click();

      cy.get(
        ':nth-child(10) > .absorbing-column > ng-form.ng-pristine > [ng-if="attribute.optionSetValue"] > .hideInPrint > .ng-isolate-scope > .optionListContainer > .optionListInput > .optionListInputToggle'
      ).click();

      const basisOfDiagnosis = [
        "PET Scan",
        "MRI",
        "Endoscopy",
        "Laboratory investigation",
        "CT Scan",
        "Definitive Cytology/Histology (Primary)",
        "Histology (Metastasis)"
      ];

      const randomDiagnosis = Math.floor(Math.random() * basisOfDiagnosis.length);
      const randomBasisOfDiagnosis = basisOfDiagnosis[randomDiagnosis];


      cy.contains(randomBasisOfDiagnosis).click();

      cy.get(
        ':nth-child(11) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
      ).type("2023-11-06");

      cy.get(".ui-datepicker-cmd-close").click();
      cy.get(
        ':nth-child(12) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
      ).type("2023-11-07");

      cy.get(".ui-datepicker-cmd-close").click();

      const cancerTypesWithICD = {
        "Malignant phyllodes tumour of breast": "2C63",
        "Small cell carcinoma of bronchus or lung": "2C25.1",
        "Malignant neoplasms of prostate, unspecified": "2C82.Z",
        "Other specified malignant neoplasms of colon": "2B90.Y",
        "Adnexal carcinoma of skin": "2C33",
        "Acute erythroid leukemia": "XH43N4",
        "Plasmacytic lymphoma": "XH3KQ3",
        "Malignant neoplasms of ovary": "2C73",
        "Malignant neoplasm of pancreas": "2C10",
        "Malignant neoplasm metastasis in brain": "2D50",
        "Malignant neoplasms of liver or intrahepatic bile ducts": "2C12",
        "Kidney Cancer": "2C61",
        "Bladder Cancer": "2C62",
        "Thyroid Cancer": "2C63",
        "Esophageal Cancer": "2C64",
        "Stomach Cancer": "2C65",
        "Cervical Cancer": "2C66",
        "Testicular Cancer": "2C67",
        "Bone Cancer": "2C68",
        "Sarcoma": "2C69"
      };

      const cancerTypes = Object.keys(cancerTypesWithICD);
      const randomCancerType =
        cancerTypes[Math.floor(Math.random() * cancerTypes.length)];
      const matchingICD = cancerTypesWithICD[randomCancerType];

      cy.get(
        ':nth-child(13) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control'
      ).type(randomCancerType);

      cy.get(':nth-child(14) > .absorbing-column > ng-form.ng-pristine > [ng-if="!attribute.optionSetValue"] > .ng-scope > .form-control').type(matchingICD);
      cy.get(':nth-child(15) > .absorbing-column > ng-form.ng-pristine > [ng-if="attribute.optionSetValue"] > .hideInPrint > .ng-isolate-scope > .optionListContainer > .optionListInput > .optionListInputToggle').click();

      const BodySite = [
        "Brain",
        "Meninges",
        "Spinal cord",
        "Central nervous system",
        "Haematopoietic or lymphoid tissue",
        "Mesenchymal",
        "Middle ear, respiratory, or intrathoracic organs"
      ]

      const randomIndex = Math.floor(Math.random() * BodySite.length);
      const randomBodySite = BodySite[randomIndex];



      cy.contains(randomBodySite).click();

      cy.get(".btn-primary").click();
    });
  }
});
