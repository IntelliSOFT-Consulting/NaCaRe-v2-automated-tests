import { faker } from "@faker-js/faker";

const firstName = faker.name.firstName();
const familyName = faker.name.lastName();

describe("NaCaRe -KE 2.0 Automated test", () => {
  it("Visits the homepage", () => {
    cy.visit("http://45.79.116.38:8080/dhis-web-commons/security/login.action");
  });

  // it(`TEST 1 -Verify that as soon as the login page opens, by default the cursor should remain on the username textbox.`, () => {
  //   cy.focused().should("have.id", "j_username");
  // });

  it(`TEST 2 -Login,  access the registration page and register a new patient`, () => {
    cy.visit("http://45.79.116.38:8080/dhis-web-commons/security/login.action");

    cy.get("#j_username").type("admin");
    cy.get("#j_password").type("district");

    cy.get("#submit").click();

    cy.wait(7000);

    cy.get('[data-test="headerbar-apps-icon"]').click();
    cy.get(
      '[href="http://45.79.116.38:8080/api/apps/Cancer-Notification-Tool/index.html"]'
    ).click();

    cy.wait(7000);

    cy.get(".ant-input").type("texas");
    cy.contains("Texas Cancer Centre").click();

    cy.get('[style="pointer-events: auto; cursor: pointer;"] > .formList-0-2-5').click();

    cy.get('.header-0-2-9 > .ant-btn').click();


    cy.get('#search_R1vaUuILrDy').type(firstName);

    cy.get('.ant-form-item-control-input-content > .ant-btn').click();

    cy.get('.footer-0-2-17 > .ant-btn').click();

    const randomNumber = Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 5);

    cy.get('#patientForm_MiXrdHDZ6Hw').type(randomNumber);
    cy.get("#patientForm_R1vaUuILrDy").type(firstName);
    cy.get("#patientForm_hzVijy6tEUF").type(familyName);


    cy.get('#patientForm_oob3a4JM7H6').click().trigger("keydown", { keyCode: 13 });

    cy.get('#patientForm_eFbT7iTnljR').type(randomNumber)


    cy.get("#patientForm_mPpjmOxwsEZ") // Date of birth
      .click()
      .type("1992-03-12")
      .type("{enter}");
    cy.get('#patientForm_xED9XkpCeUe') // Sex
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 });
    // cy.get("#patientForm_oLeKnI7oDRc") // Marital status
    //   .trigger("keydown", { keyCode: 40 })
    //   .trigger("keydown", { keyCode: 13 });

    const randomNumber2 =
      "07" +
      Math.floor(Math.random() * 1000000000)
        .toString()
        .padStart(8, "0");

    // cy.get("#patientForm_zO1NzQhJJwL").type(randomNumber2); // Phone number
    // cy.get("#patientForm_ITBGHMF16q9") //Ethnicity
    //   .click()
    //   .trigger("keydown", { keyCode: 40 })
    //   .trigger("keydown", { keyCode: 13 });
    // cy.get("#patientForm_pU4YBVMSaVO") //Nationality
    //   .click()
    //   .trigger("keydown", { keyCode: 40 })
    //   .trigger("keydown", { keyCode: 13 });
    // cy.get("#patientForm_ylvpmyVq8X7") //Religion
    //   .click()
    //   .trigger("keydown", { keyCode: 40 })
    //   .trigger("keydown", { keyCode: 13 });
    // cy.get("#patientForm_yTU9PxoBN6b") //Education level
    //   .click()
    //   .trigger("keydown", { keyCode: 40 })
    //   .trigger("keydown", { keyCode: 13 });
    cy.get("#patientForm_uR2Mnlh7sqn") // County of ususal residence
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 });
    cy.get("#patientForm_e9e7MiIbpfc") // Sub-County of ususal residence
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 });
    cy.get("#patientForm_ud36eYLaM3d") // Ward of ususal residence
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 });
    cy.get("#patientForm_yIp9UZ1Bex6") // Insurance status
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 });

      cy.get('#patientForm_xED9XkpCeUe').click().trigger("keydown", { keyCode: 40 }).trigger("keydown", { keyCode: 13 });

    cy.get(":nth-child(2) > .ant-radio > .ant-radio-input").click(); // Is the patient living with a disability?
    cy.get(".ant-form-item-control-input-content > .ant-btn").click(); //submit
  });

  it(`TEST 3 -Cancer Information`, () => {
    cy.get("#PJIoYjJsRdO")
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 });

    const healthFacilities = [
      "Kenyatta National Hospital",
      "Moi Teaching and Referral Hospital",
      "Aga Khan University Hospital",
      "Nairobi Hospital",
      "Mater Hospital",
      "Gertrude's Children's Hospital",
      "Avenue Hospital",
      "Coptic Hospital",
      "Kijabe Hospital",
      "Tenwek Hospital",
    ];

    const randomIndex = Math.floor(Math.random() * healthFacilities.length);
    const randomHealthFacility = healthFacilities[randomIndex];

    cy.get("#KLnTRdOnNPx").type(randomHealthFacility);

    cy.get("#WFhjaoIaolv").click().trigger("keydown", { keyCode: 13 });
    cy.get("#GKmsKxlZIDo").click().type("2023-10-25").type("{enter}");
    cy.get("#hFhTCPUu7hp").click().type("2023-10-25").type("{enter}");
    cy.get("#zEViOdcUsbo").click().trigger("keydown", { keyCode: 13 });
    cy.get("#POMh0dXJnSF").click().trigger("keydown", { keyCode: 13 });

    cy.get(".ant-input-affix-wrapper > .ant-input").type("external");
    cy.wait(4000);
    cy.contains("Unspecified effects of external causes").click();

    cy.get("#TlGDmqSbCFu") // Stage at diagnosis
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 });

    cy.get("#rVGG3eU4SrR").click().trigger("keydown", { keyCode: 13 }); //Basis of staging
    cy.get("#bggwXiKx820") // Imaging
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 });

    cy.get("#Lz4vGvhdz9O").click().trigger("keydown", { keyCode: 13 }); // Surgical
    cy.get("#gmOuoYxgVkB").click().trigger("keydown", { keyCode: 13 }); // Risk stratification
    cy.get(
      "#IIa5QyttmkZ > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); // Has the patient been screened for cancer?
    cy.get(
      "#mvoDAAmDmxV > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); // Has the patient been vaccinated against any cancer?
    cy.get("#QErim7b3Myr").type("Cervical cancer"); // If vaccinated, specify

    cy.get(".controls-0-2-21 > .ant-btn-primary").click(); // Next
  });

  it(`TEST 4 -Risk Factors`, () => {
    cy.get(
      "#qTA8KZ1ZBHG > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); // Does the patient smoke cigarettes?
    cy.get(
      "#XGvVjwdVuhF > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click(); // Does the patient drink alcohol?
    cy.get("#Psb4ShQKkEq")
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 }); // How long has the patient been drinking alcohol?

    cy.get("#EgYxoi5tTWB")
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 }); // HIV status

    cy.get(
      "#vTZWDY1Sei0 > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); // Family history of cancer

    cy.get(
      "#rc-tabs-1-panel-2 > .ant-form > .footer-0-2-20 > .controls-0-2-21 > .ant-btn-primary"
    ).click(); // Next
  });

  it(`TEST 5 -Treatment`, () => {
    cy.get("#Trww83cDRNo").click().trigger("keydown", { keyCode: 13 }); // Referral

    const healthFacilities = [
      "Kenyatta National Hospital",
      "Moi Teaching and Referral Hospital",
      "Aga Khan University Hospital",
      "Nairobi Hospital",
      "Mater Hospital",
      "Gertrude's Children's Hospital",
      "Avenue Hospital",
      "Coptic Hospital",
      "Kijabe Hospital",
      "Tenwek Hospital",
    ];

    const randomIndex = Math.floor(Math.random() * healthFacilities.length);
    const randomHealthFacility = healthFacilities[randomIndex];

    cy.get("#Jy1wWlYYAV0").type(randomHealthFacility); // Referred from
    cy.get("#gY9eXw4IX3S").type(randomHealthFacility); // Referred to

    cy.get("#JCTOPtjBvog").type("For better checkup facilities"); // Reason for referral
    cy.get(
      "#nZFVNUu1rCg > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click(); // Treatment done

    cy.get(
      "#iT4rrDiRlBE > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click(); //Curative
    cy.get(
      "#iT4rrDiRlBE > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click(); //Palliative

    cy.get(
      "#iT4rrDiRlBE > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click(); //Surgery

    cy.get(
      "#xMDNydpyKcj > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); //Systemic Therapy
    cy.get("#VouPJWIla3t") //Treatment Chemotherapy
      .click()
      .trigger("keydown", { keyCode: 40 })
      .trigger("keydown", { keyCode: 13 });

    // cy.get("#JkSdwVJ0Cvd").type("2021-10-25").type("{enter}"); //Date of first chemotherapy

    cy.get(
      "#rc-tabs-1-panel-3 > .ant-form > .footer-0-2-20 > .controls-0-2-21 > .ant-btn-primary"
    ).click(); //Next
  });

  it(`TEST 6 -Comorbidities`, () => {
    cy.get(
      "#Xq8nGUwb4Si > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#k5TbRhYzHXE > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#OTbmyNipTTi > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#jhjkoBj0l2z > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#jhjkoBj0l2z > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#jhjkoBj0l2z > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();

    cy.get(
      "#jhjkoBj0l2z > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#jhjkoBj0l2z > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();

    cy.get(
      "#rc-tabs-1-panel-4 > .ant-form > .footer-0-2-20 > .controls-0-2-21 > .ant-btn-primary"
    ).click(); //Next
  });

  it(`TEST 7 -Patient Status`, () => {
    cy.get("#BITcpbzhbNm").click().trigger("keydown", { keyCode: 13 }); //Patient status
    cy.get(
      "#rc-tabs-1-panel-5 > .ant-form > .footer-0-2-20 > .controls-0-2-21 > .ant-btn-primary"
    ).click(); //Next
  });

  it(`TEST 8 -Discrimination`, () => {
    cy.get(
      "#aJD0OctPlYq > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); //Discrimination
    cy.get(
      "#aywI2UTLihP > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); //Stigma

    cy.get(
      "#rc-tabs-1-panel-6 > .ant-form > .footer-0-2-20 > .controls-0-2-21 > .ant-btn-primary"
    ).click(); //Next
  });

  it(`TEST 9 -Post-CAncer Treatment Rehabilitation`, () => {
    cy.get(
      "#lRnHnc0zyeE > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); //Does the patient have a disability as a result of cancer treatment?
    cy.get(
      "#tz638BFQZGP > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); // Did the patient undergo rehabilitation?

    cy.get(
      "#pPlQvjJZyZF > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click(); //Did the patient receive care from a vocational treatment centre?

    cy.get(
      "#rc-tabs-1-panel-7 > .ant-form > .footer-0-2-20 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn"
    ).click(); //Complete
  });

  it(`TEST 10 -Survivorship`, () => { });
});
