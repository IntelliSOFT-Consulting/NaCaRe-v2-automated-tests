import { faker } from "@faker-js/faker";

describe("NaCaRe -KE 2.0 Automated test", () => {
  for (let i = 0; i < 1; i++) {
    it("Visits the homepage", () => {
      const firstName = faker.name.firstName();
      const familyName = faker.name.lastName();
      const randomNumberOfKeyPresses = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
      const randomNumberID = Math.floor(1000 + Math.random() * 9000);
      const idNumber = Math.floor(Math.random() * 1e9)
        .toString()
        .padStart(9, "0");

      cy.visit(
        "http://45.79.116.38:8080/"
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

      cy.get(
        '[style="pointer-events: auto; cursor: pointer;"] > .formList-0-2-5 > :nth-child(2)'
      ).click();
      cy.get(".ant-btn > :nth-child(2)").click();
      cy.get('#search_name').type("12qwqw12"); //search
      cy.get(".ant-btn > span").click();
      cy.contains("Register New Patient").click({ force: true });

      // Concatenate the random number with "PAT-" to generate random ID
      const randomValue = `PAT-${randomNumberID}`;
      cy.get('#MiXrdHDZ6Hw').type(randomValue);

      const randomNumber = Math.floor(Math.random() * 100000)
        .toString()
        .substring(0, 5);

        cy.get('#R1vaUuILrDy').type(firstName);
        cy.get('#hzVijy6tEUF').type(familyName);

        cy.get('#oob3a4JM7H6').type("National Id");
        cy.get('#oob3a4JM7H6').type('{Enter}')
        cy.get('#eFbT7iTnljR').type(idNumber); //identification number
      cy.wait(500);

      const start = new Date(1960, 0, 1);//Date of Birth
      const end = new Date();
      const randomDate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );  
      const formattedDate = randomDate.toISOString().split("T")[0];
      const [year, month, day] = formattedDate.split("-");  
      const ddmmyy = `${day}/${month}/${year}`;  
      cy.get('#mPpjmOxwsEZ')
        .click()
        .type(ddmmyy)
        .type("{enter}");


      cy.get('#xED9XkpCeUe').click( {force: true});
      cy.get('#xED9XkpCeUe').trigger("keydown", { keyCode: 13 }); // Enter key
      cy.wait(1000);

      //************************************************ */
      cy.get('#uR2Mnlh7sqn').click().type("{downarrow}"); //county of residence
      for (let i = 0; i < randomNumberOfKeyPresses; i++) {
        cy.get('#uR2Mnlh7sqn').type("{downarrow}");
      }
      cy.get('#uR2Mnlh7sqn').click().type("{enter}");
      /******************************************************************* */
      // Find the input element
      cy.get('#yIp9UZ1Bex6').click({force: true});

    
      //************************************************* */

      cy.get('#yIp9UZ1Bex6').type("NHIF").type("{enter}"); // Type "NHIF" into the input
      /*************************************************************************************** */
      cy.get("#wzHl7HdsSlO").click().type("{enter}");
      cy.get("#OSs8D8u1El7").click();
      cy.get("#OSs8D8u1El7").type("{downarrow}");
      for (let i = 0; i < randomNumberOfKeyPresses; i++) {
        cy.get("#OSs8D8u1El7").type("{downarrow}");
      }
      cy.get("#OSs8D8u1El7").type("{enter}");

      //******************************************************************************************************** */
      cy.get('#HEoJiJqgPh1') // Date if diagnosis
        .click()
        .type("05/05/2024")
        .type("{enter}");
        cy.wait(500)

        cy.get('#k5cjujLd0nd') // Date if reporting
        .click()
        .type("06/05/2024")
        .type("{enter}");

      cy.get("#ghOKiyhlPX0").type(randomValue);

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
      cy.get('#BzhDnF5fG4x').click()

      let randomNumberOfKeyPresses1 = Math.floor(Math.random() * 20) + 15;

      for (let i = 0; i < randomNumberOfKeyPresses1; i++) {
        cy.get("#BzhDnF5fG4x").type("{downarrow}");
      }

      cy.get("#BzhDnF5fG4x").type("{enter}");
      cy.wait(500)

      cy.get('#Cvx3AQ1IQXb').click()
      for (let i = 0; i < randomNumberOfKeyPresses1; i++) {
        cy.get('#Cvx3AQ1IQXb').type("{downarrow}");
      }
      cy.get('#Cvx3AQ1IQXb').type("{downarrow}").type("{Enter}")
      /******************************************************************* */

      cy.get('#xxEsZFtua8N > :nth-child(2) > .ant-radio > .ant-radio-input', {force: true}).then(($radio) => {
        if (!$radio.is(':checked')) {
          // If the radio button is not already selected, click the first radio button
          cy.get('#xxEsZFtua8N > :nth-child(1) > .ant-radio > .ant-radio-input').click({ force: true });

          
          
          cy.get('#URvkIclUWjq') // treatment start date
          .click()
          .type("10/06/2024")
          .type("{enter}");
          


        }
        // If the radio button is already selected, do nothing and proceed
      });
      cy.get('#cBrY84DSFq5').click()
      for (let i = 0; i < randomNumberOfKeyPresses; i++) {
        cy.get('#cBrY84DSFq5').type("{downarrow}");
      }
      cy.get('#cBrY84DSFq5').click().type("{enter}");

   
      // Submit the form
      cy.wait(500);

      cy.get(".ant-form-item-control-input-content > .ant-btn").click();

      cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({ force: true });

      cy.wait(7000);


      //Treatment

      cy.get('#xxEsZFtua8N > :nth-child(1) > .ant-radio > .ant-radio-input').then(($radio) => {
        if ($radio.is(':checked')) {
          // If the radio button is selected, run this section
        



          cy.get('#xMDNydpyKcj > :nth-child(1) > .ant-radio > .ant-radio-input').click();
          cy.get('#Cj3inBBEqoN > :nth-child(1) > .ant-radio > .ant-radio-input').click();
          cy.get("#Trww83cDRNo").type("{downarrow}").type("{enter}");
            cy.get('#Bv1QzBVyXo3')
            .click()
            .type("10/06/2024")
            .type("{enter}");
          

          cy.get('#vtU3HWpm3VQ > :nth-child(1) > .ant-radio > .ant-radio-input').click();
          cy.get('#ZoWjQn9uDfS > :nth-child(1) > .ant-radio > .ant-radio-input').click();

          cy.get('.controls-0-2-45 > .ant-btn').click();

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
        let phoneNumber = "7";
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

      //cy.get('.controls-0-2-41 > .ant-btn').click({ multiple: true, force: true });

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

      //cy.get('#rc-tabs-0-panel-3 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-40 > .controls-0-2-41 > .ant-btn > span').click({ force: true });

      cy.scrollTo('bottom', { ensureScrollable: false });

      cy.wait(2000);

      cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
        force: true,
        multiple: true,
      });
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

      cy.get(".ant-popconfirm-buttons > .ant-btn-primary").click({
        force: true,
        multiple: true,
      });

      cy.wait(1000);

      //Patient status

      cy.get("#BITcpbzhbNm").type("{enter}");

      cy.get('#rc-tabs-0-panel-6 > .ant-spin-nested-loading > .ant-spin-container > .ant-form > .footer-0-2-40 > .controls-0-2-41 > .ant-btn').click();

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