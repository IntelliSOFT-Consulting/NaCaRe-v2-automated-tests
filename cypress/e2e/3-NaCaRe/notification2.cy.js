import { faker } from "@faker-js/faker";

describe("NaCaRe -KE 2.0 Automated test", () => {
  for (let i = 0; i < 20; i++) {
    it("Visits the homepage", () => {
      const firstName = faker.name.firstName();
      const familyName = faker.name.lastName();
      const randomNumberOfKeyPresses = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
      const randomNumberID = Math.floor(1000 + Math.random() * 9000);
      const idNumber = Math.floor(Math.random() * 1e9)
        .toString()
        .padStart(9, "0");

      cy.visit(
        "http://45.79.116.38:8080/dhis-web-commons/security/login.action"
      );
      cy.get("#j_username").type("admin");
      cy.get("#j_password").type("district");
      cy.get("#submit").click();

      cy.wait(7000);

      cy.get('[data-test="headerbar-apps-icon"]').click();
      cy.wait(2000);
      cy.get(
        '[href="http://45.79.116.38:8080/api/apps/Cancer-Notification-Tool/index.html"] > img.jsx-1815620254'
      ).click();
      cy.wait(5000);

      const facilities = [
        "Aga Khan Hospital (Kisumu)",
        "Aga Khan Hospital (Mombasa)",
        "Bungoma County Referral Hospital",
        "Consolata Mission Hospital (Nkubu)",
        "Embu Provincial General Hospital",
        "Makueni County Referral Hospital",
        "Longisa County Referral Hospital",
        "Kapsabet County Referral Hospital",
        "Garissa County Referral Hospital",
        "Bungoma County Referral Hospital",
      ];
      const randomFacility =
        facilities[Math.floor(Math.random() * facilities.length)];

      cy.get(".ant-input").type(randomFacility);
      cy.contains(randomFacility).click();

      // cy.get('.ant-input').type("aga khan");
      // cy.contains("Aga Khan Hospital").click();//Select organization unit through search

      cy.get(
        '[style="pointer-events: auto; cursor: pointer;"] > .formList-0-2-5 > :nth-child(2)'
      ).click();
      cy.get(".ant-btn > :nth-child(2)").click();
      cy.get('#search_name').type("12qwqw12"); //search
      cy.get(".ant-btn > span").click();
      cy.contains("Register New Patient").click({ force: true });
      // cy.get(".footer-0-2-17 > .ant-btn > span").click();

      // Concatenate the random number with "PAT-" to generate random ID
      const randomValue = `PAT-${randomNumberID}`;
      cy.get("#patientForm_MiXrdHDZ6Hw").type(randomValue);

      const randomNumber = Math.floor(Math.random() * 100000)
        .toString()
        .substring(0, 5);

      cy.get("#patientForm_R1vaUuILrDy").type(firstName);
      cy.get("#patientForm_hzVijy6tEUF").type(familyName);

      cy.get("#patientForm_oob3a4JM7H6").type("National Id");
      cy.get("#patientForm_eFbT7iTnljR").type(idNumber); //identification number
      cy.wait(500);

      const start = new Date(1960, 0, 1);
      const end = new Date(2023, 0, 1);
      const randomDate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );

      const formattedDate = randomDate.toISOString().split("T")[0];

      cy.get("#patientForm_mPpjmOxwsEZ") // Date of birth
        .click()
        .type(formattedDate)
        .type("{enter}");

      cy.wait(1000);

      const randomPresses11 = Math.floor(Math.random() * 0); // Change 2 to 3 to include the first option

      cy.get("#patientForm_xED9XkpCeUe").click();

      for (let i = 0; i < randomPresses11; i++) {
        cy.get("#patientForm_xED9XkpCeUe").trigger("keydown", { keyCode: 40 });
      }

      cy.get("#patientForm_xED9XkpCeUe").trigger("keydown", { keyCode: 13 });

      cy.wait(1000);
      //************************************************ */
      cy.get("#patientForm_oob3a4JM7H6").click().type("{downarrow}"); //county of residence
      for (let i = 0; i < randomNumberOfKeyPresses; i++) {
        cy.get("#patientForm_oob3a4JM7H6").type("{downarrow}");
      }
      cy.get("#patientForm_oob3a4JM7H6").click().type("{enter}");
      /******************************************************************* */
      // Find the input element
      cy.get("#patientForm_uR2Mnlh7sqn").click();

      // Simulate pressing the down arrow key to open the dropdown
      cy.get("#patientForm_uR2Mnlh7sqn").type("{downarrow}");
      for (let i = 0; i < randomNumberOfKeyPresses; i++) {
        cy.get("#patientForm_uR2Mnlh7sqn").type("{downarrow}");
      }

      // Simulate pressing the Enter key to select the option
      cy.get("#patientForm_uR2Mnlh7sqn").type("{enter}");

      //************************************************* */

      cy.get("input#patientForm_yIp9UZ1Bex6").type("NHIF").type("{enter}"); // Type "NHIF" into the input
      /*************************************************************************************** */
      // Find the input element and click to open the dropdown
      cy.get("#patientForm_wzHl7HdsSlO").click().type("{enter}");

      // Find the input element
      cy.get("#patientForm_OSs8D8u1El7").click();

      // Simulate pressing the down arrow key to open the dropdown
      cy.get("#patientForm_OSs8D8u1El7").type("{downarrow}");

      // Use a loop to press the down arrow key the random number of times
      for (let i = 0; i < randomNumberOfKeyPresses; i++) {
        cy.get("#patientForm_OSs8D8u1El7").type("{downarrow}");
      }

      // Simulate pressing the Enter key to select the option
      cy.get("#patientForm_OSs8D8u1El7").type("{enter}");
      //******************************************************************************************************** */

      cy.get("#patientForm_HEoJiJqgPh1") // Date if diagnosis
        .click()
        .type("2023-03-12")
        .type("{enter}");

      cy.get("#patientForm_k5cjujLd0nd") // Date if reporting
        .click()
        .type("2023-10-12")
        .type("{enter}");

      // Concatenate the random number with "PAT-" to generate random ID
      cy.get("#patientForm_ghOKiyhlPX0").type(randomValue);

      // cy.get(".ant-input-affix-wrapper > .ant-input").type("Primary neoplasm"); //select type of cancer
      // cy.wait(5000)
      // cy.contains("Primary neoplasms of brain").click();

      const cancers = [
        "Basal cell carcinoma of skin, unspecified",
        "Malignant neoplasms of intestine, unspecified",
        "Malignant neoplasms of ill-defined sites",
        "Malignant neoplasms of the spleen",
        "Histiocytic sarcoma",
        "Malignant neoplasms of bronchus or lung, unspecified",
        "Malignant neoplasms of ill-defined sites",
        "Malignant neoplasms of cervix uteri, unspecified",
        "Adenocarcinoma of pancreas",
      ];
      const randomCancer = cancers[Math.floor(Math.random() * cancers.length)];

      // Type a small section of the cancer name
      cy.get('#patientForm_BzhDnF5fG4x').click()

      cy.get("#patientForm_BzhDnF5fG4x").click().type("{downarrow}"); //Diagnosis
      for (let i = 0; i < randomNumberOfKeyPresses; i++) {
        cy.get("#patientForm_BzhDnF5fG4x").type("{downarrow}");
      }
      cy.get("#patientForm_BzhDnF5fG4x").click().type("{enter}");
      cy.wait(500)
      /******************************************************************* */
      const radioGroup = cy.get('#patientForm_xxEsZFtua8N');


      function getRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      let today = new Date();
      let twoYearsAgo = new Date();
      twoYearsAgo.setFullYear(today.getFullYear() - 2);

      let randomDate4 = getRandomDate(twoYearsAgo, today);

      // Format the date as YYYY-MM-DD
      let randomDateStr = randomDate4.toISOString().split('T')[0];

      cy.get('body').then(($body) => {
        if ($body.find(':nth-child(1) > .ant-radio > .ant-radio-input').is(':checked')) {
          // If the first option is selected, fill in the date field
          cy.get('#patientForm_URvkIclUWjq"').type('2022-12-31'); //
        } else if ($body.find(':nth-child(2) > .ant-radio > .ant-radio-input').is(':checked')) {
          // If the second option is selected, do nothing
        } else {
          // If none is selected, randomly select one
          let option = Math.floor(Math.random() * 2); // This will give either 0 or 1
          if (option === 0) {
            cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click();
            cy.get('#patientForm_URvkIclUWjq').type(`${randomDateStr}{enter}`, { force: true });
          } else {
            cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click();
          }
        }
      });

      // Submit the form
      cy.wait(2000);

      cy.get(".ant-form-item-control-input-content > .ant-btn").click();

      cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({ force: true });

      cy.wait(5000); // Replace '#submit-button-selector' with the actual selector of your submit button

      // cy.get(':nth-child(1) > .ant-radio > .ant-radio-input')


      // cy.get(':nth-child(2) > .ant-radio > .ant-radio-input')


      // const radioGroup1 = cy.get('input[name = "#patientForm_xxEsZFtua8N"]')
      // // Generate a random boolean to decide whether to click Yes or No
      // const isUndergoingTreatment = Math.floor(Math.random() * 2) + 1;
      // // Click on the randomly chosen option
      // if (isUndergoingTreatment) {
      //   radioGroup1.click();

      //   // If Yes is clicked, enter the date of treatment
      //   // Find the input field for treatment start date
      //   const dateInput = cy.get('#patientForm_URvkIclUWjq');

      //   // Generate a random date within the current month
      //   const currentDate = new Date();
      //   const currentMonth = currentDate.getMonth() + 1; // Months are zero-based in JavaScript
      //   const randomDay = Math.floor(Math.random() * 28) + 1; // Assuming a maximum of 28 days in a month for simplicity
      //   const randomDate = `${currentDate.getFullYear()}-${currentMonth}-${randomDay}`;

      //   // Type the random date into the input field
      //   dateInput.type(randomDate); // Replace with the actual date input class
      // } else {
      //   radioGroup.click();
      // }
      // /******************************************************************* */

      // cy.get('[data-entityindex="0"] > .entityInList > .entityHead > .entityTitleAndIcons > .entityTitle').click()




      cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').then(($radio) => {
        if ($radio.is(':checked')) {
          // If the second option is selected, go to additional patient details
          // Additional patient details

          // cy.get('.ant-popconfirm-buttons > .ant-btn-primary > span').click()

          const randomPresses3 = Math.floor(Math.random() * 5);

          for (let i = 0; i < randomPresses3; i++) {
            cy.get("#iqUkmycBQTH").type("{downarrow}");
          }

          cy.get("#iqUkmycBQTH").type("{enter}");
          const generatePhoneNumber = () => {
            let phoneNumber = "07";
            for (let i = 0; i < 8; i++) {
              phoneNumber += Math.floor(Math.random() * 10);
            }
            return phoneNumber;
          };

          const phoneNumber = generatePhoneNumber();

          cy.get("#fZB1WuCDlHt").type(phoneNumber);

          cy.get("#Pul0GQ6gx6E").type("{enter}");

          const occupations = [
            "Engineer",
            "Doctor",
            "Teacher",
            "Nurse",
            "Accountant",
            "Lawyer",
            "Architect",
            "Chef",
            "Pharmacist",
            "Photographer",
          ];
          const randomOccupation =
            occupations[Math.floor(Math.random() * occupations.length)];

          cy.get("body").then(($body) => {
            if ($body.find("#LmSk3LiG8ha").length > 0) {
              cy.get("#LmSk3LiG8ha").type(randomOccupation);
            }
          });

          const randomPresses = Math.floor(Math.random() * 4);

          for (let i = 0; i < randomPresses; i++) {
            cy.get("#zxyh6WNhrMN").type("{downarrow}");
          }

          cy.get("#zxyh6WNhrMN").type("{enter}");

          const randomPresses2 = Math.floor(Math.random() * 4);

          for (let i = 0; i < randomPresses2; i++) {
            cy.get("#oBeTBKEwEil").type("{downarrow}");
          }

          cy.get("#oBeTBKEwEil").type("{enter}");

          cy.get("#PdDmTsAjysh").type("{enter}");

          cy.get("#Nv691bXYX2M").type("{enter}", { force: true });

          const options = [
            "#qkKIOnoDDGy > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#qkKIOnoDDGy > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption = options[Math.floor(Math.random() * options.length)];

          cy.get(randomOption).click({ force: true });
          
          cy.get(".ant-btn").click();

          cy.wait(1000);

          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
          });

          cy.wait(2000);

          //Additional cancer inforation

          //TNM Staging

          const randomPresses4 = Math.floor(Math.random() * 6);

          for (let i = 0; i < randomPresses4; i++) {
            cy.get("#TlGDmqSbCFu").type("{downarrow}");
          }
          cy.get("#TlGDmqSbCFu").type("{enter}");

          if (randomPresses4 !== 5) {
            // Basis of staging
            const randomPresses6 = Math.floor(Math.random() * 4);

            for (let i = 0; i < randomPresses6; i++) {
              cy.get("#rVGG3eU4SrR").type("{downarrow}");
            }
            cy.get("#rVGG3eU4SrR").type("{enter}");
          }

          // Other staging
          const randomPresses5 = Math.floor(Math.random() * 7);

          for (let i = 0; i < randomPresses5; i++) {
            cy.get("#LBFXKqfXaU8").type("{downarrow}");
          }
          cy.get("#LBFXKqfXaU8").type("{enter}");

          //Imaging
          const randomPresses7 = Math.floor(Math.random() * 5);

          for (let i = 0; i < randomPresses7; i++) {
            cy.get("#bggwXiKx820").type("{downarrow}");
          }
          cy.get("#bggwXiKx820").type("{enter}");

          //Surgical
          const randomPresses8 = Math.floor(Math.random() * 1);

          for (let i = 0; i < randomPresses8; i++) {
            cy.get("#Lz4vGvhdz9O").type("{downarrow}");
          }
          cy.get("#Lz4vGvhdz9O").type("{enter}");

          //Risk Stratification
          const randomPresses9 = Math.floor(Math.random() * 2);

          for (let i = 0; i < randomPresses9; i++) {
            cy.get("#gmOuoYxgVkB").type("{downarrow}");
          }
          cy.get("#gmOuoYxgVkB").type("{enter}", { force: true });

          const options2 = [
            "#IIa5QyttmkZ > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#IIa5QyttmkZ > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption2 =
            options2[Math.floor(Math.random() * options2.length)];

          cy.get(randomOption2).click();

          if (randomOption2 === options2[0]) {
            const randomPresses11 = Math.floor(Math.random() * 4);

            for (let i = 0; i < randomPresses11; i++) {
              cy.get("#zOEePwZb5Q1").type("{downarrow}");
            }

            cy.get("#zOEePwZb5Q1").type("{enter}");
          }

          const options4 = [
            "#mvoDAAmDmxV > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#mvoDAAmDmxV > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption4 =
            options4[Math.floor(Math.random() * options4.length)];

          cy.get(randomOption4).click();

          cy.get(
            "#rc-tabs-1-panel-2 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-33 > .controls-0-2-34 > .ant-btn"
          ).click();

          cy.wait(2000);

          // cy.contains('button', 'OK').should('be.visible');
          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
            multiple: true,
          });
          cy.wait(2000);

          //Risk factors

          const options5 = [
            "#qTA8KZ1ZBHG > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#qTA8KZ1ZBHG > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption5 =
            options5[Math.floor(Math.random() * options5.length)];

          cy.get(randomOption5).click();

          if (randomOption5 === options5[0]) {
            cy.get("#hhDDqsSaNWb").type("4 to 5 packets per week");
          }

          const options6 = [
            "#XGvVjwdVuhF > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#XGvVjwdVuhF > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption6 =
            options6[Math.floor(Math.random() * options6.length)];

          cy.get(randomOption6).click();

          if (randomOption6 === options6[0]) {
            const randomPresses = Math.floor(Math.random() * 3);

            for (let i = 0; i < randomPresses; i++) {
              cy.get("#Psb4ShQKkEq").type("{downarrow}");
            }

            cy.get("#Psb4ShQKkEq").type("{enter}");
          }

          const randomPresses12 = Math.floor(Math.random() * 3);

          for (let i = 0; i < randomPresses12; i++) {
            cy.get("#EgYxoi5tTWB").type("{downarrow}");
          }
          cy.get("#EgYxoi5tTWB").type("{enter}");

          const options7 = [
            "#vTZWDY1Sei0 > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#vTZWDY1Sei0 > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption7 =
            options7[Math.floor(Math.random() * options7.length)];

          cy.get(randomOption7).click();

          const randomPresses13 = Math.floor(Math.random() * 3);

          for (let i = 0; i < randomPresses13; i++) {
            cy.get("#U357CYMYOQ0").type("{downarrow}");
          }
          cy.get("#U357CYMYOQ0").type("{enter}");

          cy.get(
            "#rc-tabs-1-panel-3 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-33 > .controls-0-2-34 > .ant-btn"
          ).click();

          cy.wait(1000);
          // cy.get(':nth-child(18) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popconfirm-inner-content > .ant-popconfirm-buttons > .ant-btn-primary').click();

          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
            multiple: true,
          });

          cy.wait(1000);

          //Treatment

          cy.get("#Trww83cDRNo").type("{downarrow}").type("{enter}");

          const options8 = [
            "#nZFVNUu1rCg > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#nZFVNUu1rCg > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption8 =
            options8[Math.floor(Math.random() * options8.length)];

          cy.get(randomOption8).click();

          const options9 = [
            "#Cj3inBBEqoN > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#Cj3inBBEqoN > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption9 =
            options9[Math.floor(Math.random() * options9.length)];

          cy.get(randomOption9).click();

          const options10 = [
            "#xMDNydpyKcj > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#xMDNydpyKcj > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption10 =
            options10[Math.floor(Math.random() * options10.length)];

          cy.get(randomOption10).click();

          const randomPresses14 = Math.floor(Math.random() * 2);

          for (let i = 0; i < randomPresses14; i++) {
            cy.get("#VouPJWIla3t").type("{downarrow}");
          }
          cy.get("#VouPJWIla3t").type("{enter}");

          cy.get("#JkSdwVJ0Cvd").click().type("2023-03-11").type("{enter}");

          const options11 = [
            "#GWzmO1k8WIX > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#GWzmO1k8WIX > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption11 =
            options11[Math.floor(Math.random() * options11.length)];

          cy.get(randomOption11).click();

          const options12 = [
            "#uG0nhxpDCEp > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#uG0nhxpDCEp > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption12 =
            options12[Math.floor(Math.random() * options12.length)];

          cy.get(randomOption12).click();

          const options13 = [
            "#RYMNbfQI6Xj > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#RYMNbfQI6Xj > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption13 =
            options13[Math.floor(Math.random() * options13.length)];

          cy.get(randomOption13).click();

          cy.get("#SW7Nxz6M64z").click().type("2023-03-12").type("{enter}");

          const options14 = [
            "#vtU3HWpm3VQ > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#vtU3HWpm3VQ > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption14 =
            options14[Math.floor(Math.random() * options14.length)];

          cy.get(randomOption14).click();

          const options15 = [
            "#pe5Qlr09BBd > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#pe5Qlr09BBd > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption15 =
            options15[Math.floor(Math.random() * options15.length)];

          cy.get(randomOption15).click();

          const options16 = [
            "#uQmp4kURCCQ > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#uQmp4kURCCQ > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOptions16 =
            options16[Math.floor(Math.random() * options16.length)];

          cy.get(randomOptions16).click();

          const options17 = [
            "#jYoWCxPFInU > :nth-child(1) > .ant-radio > .ant-radio-inner",
            "#jYoWCxPFInU > :nth-child(2) > .ant-radio > .ant-radio-inner",
          ];
          const randomOption17 =
            options17[Math.floor(Math.random() * options17.length)];

          cy.get(randomOption17).click({ force: true });

          cy.get("#ZoWjQn9uDfS").click().type("2023-12-21").type("{enter}");

          const randomPresses15 = Math.floor(Math.random() * 3);

          for (let i = 0; i < randomPresses15; i++) {
            cy.get("#YIFcmxxVV7o").type("{downarrow}");
          }

          cy.get("#YIFcmxxVV7o").type("{enter}");

          cy.get(
            "#rc-tabs-1-panel-4 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-33 > .controls-0-2-34 > .ant-btn"
          ).click();

          // cy.get(':nth-child(27) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popconfirm-inner-content > .ant-popconfirm-buttons > .ant-btn-primary').click();

          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
            multiple: true,
          });

          cy.wait(1000);

          // Comorbidities

          const options18 = [
            "#Xq8nGUwb4Si > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#Xq8nGUwb4Si > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption18 =
            options18[Math.floor(Math.random() * options18.length)];

          cy.get(randomOption18).click();

          const options19 = [
            "#k5TbRhYzHXE > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#k5TbRhYzHXE > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption19 =
            options19[Math.floor(Math.random() * options19.length)];

          cy.get(randomOption19).click();

          const options20 = [
            "#OTbmyNipTTi > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#OTbmyNipTTi > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption20 =
            options20[Math.floor(Math.random() * options20.length)];

          cy.get(randomOption20).click();

          const options21 = [
            "#jhjkoBj0l2z > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#jhjkoBj0l2z > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption21 =
            options21[Math.floor(Math.random() * options21.length)];

          cy.get(randomOption21).click();

          const options22 = [
            "#brMAExGKTu2 > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#brMAExGKTu2 > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption22 =
            options22[Math.floor(Math.random() * options22.length)];

          cy.get(randomOption22).click();

          const options23 = [
            "#XmR0PMaAima > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#XmR0PMaAima > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption23 =
            options23[Math.floor(Math.random() * options23.length)];

          cy.get(randomOption23).click();

          const options24 = [
            "#FocgTnc9LXf > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#FocgTnc9LXf > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption24 =
            options24[Math.floor(Math.random() * options24.length)];

          cy.get(randomOption24).click();

          const options25 = [
            "#qJxfbbmb53L > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#qJxfbbmb53L > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption25 =
            options25[Math.floor(Math.random() * options25.length)];

          cy.get(randomOption25).click();

          cy.get(
            "#rc-tabs-1-panel-5 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-33 > .controls-0-2-34 > .ant-btn"
          ).click();

          // cy.get(':nth-child(28) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popconfirm-inner-content > .ant-popconfirm-buttons > .ant-btn-primary').click();

          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
            multiple: true,
          });

          cy.wait(1000);

          //Patient status

          cy.get("#BITcpbzhbNm").type("{enter}");

          cy.get(
            "#rc-tabs-1-panel-6 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-33 > .controls-0-2-34 > .ant-btn"
          ).click();

          // cy.get(':nth-child(30) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popconfirm-inner-content > .ant-popconfirm-buttons > .ant-btn-primary').click();

          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
            multiple: true,
          });

          cy.wait(1000);

          //Discrimination

          cy.get(
            "#aJD0OctPlYq > :nth-child(2) > .ant-radio > .ant-radio-input"
          ).click();

          cy.get(
            "#aywI2UTLihP > :nth-child(2) > .ant-radio > .ant-radio-input"
          ).click();

          cy.get(
            "#rc-tabs-1-panel-7 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-33 > .controls-0-2-34 > .ant-btn"
          ).click();

          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
            multiple: true,
          });

          cy.wait(1000);

          //Post-cancer treatment rehabilitation

          cy.get(
            "#lRnHnc0zyeE > :nth-child(2) > .ant-radio > .ant-radio-input"
          ).click();

          cy.get(
            "#tz638BFQZGP > :nth-child(2) > .ant-radio > .ant-radio-inner"
          ).click({ force: true });

          cy.get(
            "#pPlQvjJZyZF > :nth-child(2) > .ant-radio > .ant-radio-input"
          ).click();

          cy.get(
            "#rc-tabs-1-panel-8 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-33 > .controls-0-2-34 > .ant-btn"
          ).click();

          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
            multiple: true,
          });

          cy.wait(1000);

          //Survivorship

          cy.get("#Akvj6sjSWt1").type("{enter}");

          cy.get("#W17Cq7ZpgnY").type("{enter}");

          cy.get(".footer-0-2-33 > .ant-btn").click();

          cy.wait(3000);
        } else {
          // Otherwise, skip to the treatment section
          //Treatment

          cy.get("#Trww83cDRNo").type("{downarrow}").type("{enter}");

          const options8 = [
            "#nZFVNUu1rCg > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#nZFVNUu1rCg > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption8 =
            options8[Math.floor(Math.random() * options8.length)];

          cy.get(randomOption8).click();

          const options9 = [
            "#Cj3inBBEqoN > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#Cj3inBBEqoN > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption9 =
            options9[Math.floor(Math.random() * options9.length)];

          cy.get(randomOption9).click();

          const options10 = [
            "#xMDNydpyKcj > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#xMDNydpyKcj > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption10 =
            options10[Math.floor(Math.random() * options10.length)];

          cy.get(randomOption10).click();

          const randomPresses14 = Math.floor(Math.random() * 2);

          for (let i = 0; i < randomPresses14; i++) {
            cy.get("#VouPJWIla3t").type("{downarrow}");
          }
          cy.get("#VouPJWIla3t").type("{enter}");

          cy.get("#JkSdwVJ0Cvd").click().type("2023-03-11").type("{enter}");

          const options11 = [
            "#GWzmO1k8WIX > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#GWzmO1k8WIX > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption11 =
            options11[Math.floor(Math.random() * options11.length)];

          cy.get(randomOption11).click();

          const options12 = [
            "#uG0nhxpDCEp > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#uG0nhxpDCEp > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption12 =
            options12[Math.floor(Math.random() * options12.length)];

          cy.get(randomOption12).click();

          const options13 = [
            "#RYMNbfQI6Xj > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#RYMNbfQI6Xj > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption13 =
            options13[Math.floor(Math.random() * options13.length)];

          cy.get(randomOption13).click();

          cy.get("#SW7Nxz6M64z").click().type("2023-03-12").type("{enter}");

          const options14 = [
            "#vtU3HWpm3VQ > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#vtU3HWpm3VQ > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption14 =
            options14[Math.floor(Math.random() * options14.length)];

          cy.get(randomOption14).click();

          const options15 = [
            "#pe5Qlr09BBd > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#pe5Qlr09BBd > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOption15 =
            options15[Math.floor(Math.random() * options15.length)];

          cy.get(randomOption15).click();

          const options16 = [
            "#uQmp4kURCCQ > :nth-child(1) > .ant-radio > .ant-radio-input",
            "#uQmp4kURCCQ > :nth-child(2) > .ant-radio > .ant-radio-input",
          ];
          const randomOptions16 =
            options16[Math.floor(Math.random() * options16.length)];

          cy.get(randomOptions16).click();

          const options17 = [
            "#jYoWCxPFInU > :nth-child(1) > .ant-radio > .ant-radio-inner",
            "#jYoWCxPFInU > :nth-child(2) > .ant-radio > .ant-radio-inner",
          ];
          const randomOption17 =
            options17[Math.floor(Math.random() * options17.length)];

          cy.get(randomOption17).click({ force: true });

          cy.get("#ZoWjQn9uDfS").click().type("2023-12-21").type("{enter}");

          const randomPresses15 = Math.floor(Math.random() * 3);

          for (let i = 0; i < randomPresses15; i++) {
            cy.get("#YIFcmxxVV7o").type("{downarrow}");
          }

          cy.get("#YIFcmxxVV7o").type("{enter}");

          cy.get(
            "#rc-tabs-1-panel-4 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-33 > .controls-0-2-34 > .ant-btn"
          ).click();

          // cy.get(':nth-child(27) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popconfirm-inner-content > .ant-popconfirm-buttons > .ant-btn-primary').click();

          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
            multiple: true,
          });

          cy.wait(1000);
        }
      });



    });
  }
});