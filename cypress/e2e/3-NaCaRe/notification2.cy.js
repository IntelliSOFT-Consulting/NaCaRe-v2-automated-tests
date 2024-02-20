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
        "Garissa County Referral Hospital",
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
      // cy.get("#patientForm_xED9XkpCeUe").trigger("keydown", { keyCode: 40 }); // Down arrow key
      cy.get("#patientForm_xED9XkpCeUe").trigger("keydown", { keyCode: 13 }); // Enter key

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
        .type("2023-03-10")
        .type("{enter}");

      cy.get("#patientForm_k5cjujLd0nd") // Date if reporting
        .click()
        .type("2023-10-10")
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

      let randomNumberOfKeyPresses1 = Math.floor(Math.random() * 86) + 15; // Generate a random number between 15 and 100

      for (let i = 0; i < randomNumberOfKeyPresses1; i++) {
        cy.get("#patientForm_BzhDnF5fG4x").type("{downarrow}");
      }

      cy.get("#patientForm_BzhDnF5fG4x").type("{enter}");
      cy.wait(500)
      /******************************************************************* */

      let start1 = new Date(2023, 9, 11); // October 11, 2023
      let end1 = new Date(2024, 0, 1); // January 1, 2024
      let randomDate1 = new Date(start1.getTime() + Math.random() * (end1.getTime() - start1.getTime()));

      let year = randomDate1.getFullYear();
      let month = ('0' + (randomDate1.getMonth() + 1)).slice(-2); // Months are 0-based in JavaScript
      let day = ('0' + randomDate1.getDate()).slice(-2);


      cy.get('#patientForm_xxEsZFtua8N > :nth-child(2) > .ant-radio > .ant-radio-input').then(($radio) => {
        if (!$radio.is(':checked')) {
          // If the radio button is not already selected, click the first radio button
          cy.get('#patientForm_xxEsZFtua8N > :nth-child(1) > .ant-radio > .ant-radio-input').click({ force: true });

          cy.get('#patientForm_URvkIclUWjq').type(`${year}-${month}-${day}{enter}`, { force: true });

        }
        // If the radio button is already selected, do nothing and proceed
      });



      // Submit the form
      cy.wait(500);

      cy.get(".ant-form-item-control-input-content > .ant-btn").click();

      cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({ force: true });

      cy.wait(7000);




      //Treatment

      cy.get('#patientForm_xxEsZFtua8N > :nth-child(1) > .ant-radio > .ant-radio-input').then(($radio) => {
        if ($radio.is(':checked')) {
          // If the radio button is selected, run this section
          cy.get("#Trww83cDRNo").type("{downarrow}").type("{enter}");

          cy.get('#xMDNydpyKcj > :nth-child(2) > .ant-radio > .ant-radio-input').click();
          cy.get('#Cj3inBBEqoN > :nth-child(2) > .ant-radio > .ant-radio-input').click();
          cy.get('#vtU3HWpm3VQ > :nth-child(2) > .ant-radio > .ant-radio-input').click();
          cy.get('#ZoWjQn9uDfS > :nth-child(2) > .ant-radio > .ant-radio-input').click();

          cy.get('.controls-0-2-41 > .ant-btn').click();

          cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
            force: true,
            multiple: true,
          });
          cy.wait(1000);

        }
        // If the radio button is not selected, do nothing and proceed
      });

      // Additional patient details


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

      let randomPresses33 = Math.floor(Math.random() * 6); // Generate a random number between 0 and 5

      cy.get("#PdDmTsAjysh").click();

      for (let i = 0; i < randomPresses33; i++) {
        cy.get("#PdDmTsAjysh").type("{downarrow}");
      }
      cy.get("#PdDmTsAjysh").type("{enter}");

      cy.wait(1000);



      cy.get("#Nv691bXYX2M").type("{enter}", { force: true });

      const options = [
        "#qkKIOnoDDGy > :nth-child(1) > .ant-radio > .ant-radio-input",
        "#qkKIOnoDDGy > :nth-child(2) > .ant-radio > .ant-radio-input",
      ];
      const randomOption = options[Math.floor(Math.random() * options.length)];

      cy.get(randomOption).click({ force: true });

      cy.get('.controls-0-2-41 > .ant-btn').click({ multiple: true, force: true });

      cy.wait(1000);

      cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({ multiple: true, force: true });
      // cy.contains('button', 'OK').should('be.visible').click({ force: true });

      cy.wait(3000);



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

      // for (let i = 0; i < randomPresses7; i++) {
      //   cy.get("#bggwXiKx820").type("{downarrow}");
      // }
      // cy.get("#bggwXiKx820").type("{enter}");

      //Surgical
      const randomPresses8 = Math.floor(Math.random() * 1);

      for (let i = 0; i < randomPresses8; i++) {
        cy.get("#Lz4vGvhdz9O").type("{downarrow}");
      }
      // cy.get("#Lz4vGvhdz9O").type("{enter}");

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

      cy.get('#rc-tabs-0-panel-3 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-40 > .controls-0-2-41 > .ant-btn > span').click({ force: true });

      cy.scrollTo('bottom', { ensureScrollable: false });

      cy.wait(2000);

      cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
        force: true,
        multiple: true,
      });

      // cy.get(':nth-child(18) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popconfirm-inner-content > .ant-popconfirm-buttons > .ant-btn-primary > span').click({ force: true, multiple: true });

      cy.wait(3000);

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

      cy.get('#rc-tabs-0-panel-4 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-40 > .controls-0-2-41 > .ant-btn').click();

      cy.wait(1000);
      // cy.get(':nth-child(18) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popconfirm-inner-content > .ant-popconfirm-buttons > .ant-btn-primary').click();

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
        "#IoIGsx1dE9t > :nth-child(1) > .ant-radio > .ant-radio-inner",
        "#IoIGsx1dE9t > :nth-child(2) > .ant-radio > .ant-radio-inner",
      ];
      const randomOption25 =
        options25[Math.floor(Math.random() * options25.length)];

      cy.get(randomOption25).click({ force: true });

      cy.get('#rc-tabs-0-panel-5 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-40 > .controls-0-2-41 > .ant-btn').click();

      // cy.get(':nth-child(28) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popconfirm-inner-content > .ant-popconfirm-buttons > .ant-btn-primary').click();

      cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
        force: true,
        multiple: true,
      });

      cy.wait(1000);

      //Patient status

      cy.get("#BITcpbzhbNm").type("{enter}");

      cy.get('#rc-tabs-0-panel-6 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-40 > .controls-0-2-41 > .ant-btn').click();

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

      cy.get('#rc-tabs-0-panel-7 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-40 > .controls-0-2-41 > .ant-btn').click();

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

      cy.get('#rc-tabs-0-panel-8 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-40 > .controls-0-2-41 > .ant-btn').click();

      cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
        force: true,
        multiple: true,
      });

      cy.wait(1000);

      //Survivorship

      cy.get("#Akvj6sjSWt1").type("{enter}");

      cy.get("#W17Cq7ZpgnY").type("{enter}");

      cy.get('.footer-0-2-40 > .ant-btn > span').click({ force: true });

      cy.wait(3000);




    });
  }
});