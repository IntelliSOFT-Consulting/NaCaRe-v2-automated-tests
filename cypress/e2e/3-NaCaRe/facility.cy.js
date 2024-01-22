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
            cy.wait(5000);
            cy.get(
                '[href="http://45.79.116.38:8080/api/apps/Cancer-Notification-Tool/index.html"] > img.jsx-1815620254'
            ).click();
            cy.wait(5000);

            const facilities = [
                "Avenue Hospital",
                "Avenue Hospital Kisumu", 
                "Elgon View Hospital",
                "Coast General Teaching and Referral Hospital",
                "Kenyatta National Hospital",
                "Coptic Hospital",
                "Vihiga County Referral Hospital",
                "Kapsabet County Referral Hospital",
                "Garissa County Referral Hospital",
                "Bungoma County Referral Hospital",
                "Kakamega County Referral Hospital"
            ];
            const randomFacility =
                facilities[Math.floor(Math.random() * facilities.length)];

            cy.get(".ant-input").type(randomFacility);
            cy.contains(randomFacility).click();

            // cy.get('.ant-input').type("aga khan");
            // cy.contains("Aga Khan Hospital").click();//Select organization unit through search

            cy.get('[style="cursor: pointer;"] > .formList-0-2-5').click(); //Click on the first form in the list

            cy.get('body').then(($body) => {
                if ($body.find('.actions-0-2-37 > .ant-btn > span').length > 0) {
                    cy.get('.actions-0-2-37 > .ant-btn > span').should('be.visible').click(); //Click on the "Edit" button
                } else {
                    cy.get('.ant-btn-primary').should('be.visible').click(); //Click on the "New Event" button
                }
            });

            cy.get('#bBLchIo6ZUO > :nth-child(1) > .ant-radio > .ant-radio-input').click(); //Click on the "Yes" radio button

            let isFirstOptionSelected;

            if (Math.random() < 0.5) {
                cy.get('#sxaTmrTI5Hm > :nth-child(1) > .ant-radio > .ant-radio-input').click();
                isFirstOptionSelected = true;
            } else {
                cy.get('#sxaTmrTI5Hm > :nth-child(2) > .ant-radio > .ant-radio-input').click();
                isFirstOptionSelected = false;
            }

            if (isFirstOptionSelected) {
                const randomNum = Math.floor(Math.random() * 90000) + 10000;
                cy.get('#pL4Vj9kJmvd').type(randomNum.toString());
            }


            if (Math.random() < 0.5) {
                cy.get('#S0HFYZrRX0O > :nth-child(1) > .ant-radio > .ant-radio-input').click();
                isFirstOptionSelected = true;
            } else {
                cy.get('#S0HFYZrRX0O > :nth-child(2) > .ant-radio > .ant-radio-input').click();
                isFirstOptionSelected = false;
            }

            if (isFirstOptionSelected) {
                const randomNum1 = Math.floor(Math.random() * 90000) + 10000;
                cy.get('#vTCEmgDdZn7').type(randomNum1.toString());
            }


            if (Math.random() < 0.5) {
                cy.get('#Aufm1VlEn8e > :nth-child(1) > .ant-radio > .ant-radio-inner').click({ force: true });
                isFirstOptionSelected = true;
            } else {
                cy.get('#Aufm1VlEn8e > :nth-child(2) > .ant-radio > .ant-radio-inner').click({ force: true });
                isFirstOptionSelected = false;
            }

            if (isFirstOptionSelected) {
                const randomNum2 = Math.floor(Math.random() * 90000) + 10000;
                cy.get('#HM5xKi3mu8g').type(randomNum2.toString());
            }


            if (Math.random() < 0.5) {
                cy.get('#wHILg7AK17D > :nth-child(1) > .ant-radio > .ant-radio-input').click({ force: true });
                isFirstOptionSelected = true;
            } else {
                cy.get('#wHILg7AK17D > :nth-child(2) > .ant-radio > .ant-radio-input').click({ force: true });
                isFirstOptionSelected = false;
            }

            if (isFirstOptionSelected) {
                const randomNum3 = Math.floor(Math.random() * 90000) + 10000;
                cy.get('#Zp4RLYszuJp').type(randomNum3.toString());
            }


            cy.get('#DnWsQtydEpy > :nth-child(2) > .ant-radio > .ant-radio-input').click();


            const times = Math.floor(Math.random() * 4); // Generate a random number between 0 and 3

            for (let i = 0; i < times; i++) {
                cy.get('#S4KUsnyZbE7').type('{downarrow}');
            }

            cy.get('#S4KUsnyZbE7').type('{enter}');

            if (times > 0) {
                const randomNum4 = Math.floor(Math.random() * 90000) + 10000;
                cy.get('#Ml5Fx25VYnS').type(randomNum4.toString());
            }



            const times2 = Math.floor(Math.random() * 3); // Generate a random number between 0 and 3

            for (let i = 0; i < times2; i++) {
                cy.get('#w7pMmzmQji9').type('{downarrow}');
            }

            cy.get('#w7pMmzmQji9').type('{enter}');


            const times3 = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

            for (let i = 0; i < times3; i++) {
                cy.get('#ptkzlUCmG48').type('{downarrow}');
            }

            cy.get('#ptkzlUCmG48').type('{enter}');


            const times4 = Math.floor(Math.random() * 4); // Generate a random number between 0 and 3

            for (let i = 0; i < times4; i++) {
                cy.get('#LHZRekEMVjj').type('{downarrow}');
            }

            cy.get('#LHZRekEMVjj').type('{enter}');


            const times5 = Math.floor(Math.random() * 6); // Generate a random number between 0 and 5

            for (let i = 0; i < times5; i++) {
                cy.get('#deNuOjkPdPS').type('{downarrow}');
            }

            cy.get('#deNuOjkPdPS').type('{enter}');

            let option = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option === 0) {
                cy.get('#eekl6KXlCGS > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#eekl6KXlCGS > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }

            let option1 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option1 === 0) {
                cy.get('#KGyehCnGoxV > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#KGyehCnGoxV > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }

            let option2 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option2 === 0) {
                cy.get('#ZXnyxBO2G15 > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#ZXnyxBO2G15 > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }

            let option3 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option3 === 0) {
                cy.get('#nH7dl4auFfo > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#nH7dl4auFfo > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }

            let option4 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option4 === 0) {
                cy.get('#wWYnnSNgZQN > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#wWYnnSNgZQN > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }



            const times6 = Math.floor(Math.random() * 6); // Generate a random number between 0 and 5

            for (let i = 0; i < times6; i++) {
                cy.get('#bggwXiKx820').type('{downarrow}');
            }

            cy.get('#bggwXiKx820').type('{enter}');




            let option5 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option5 === 0) {
                cy.get('#Q93rr9rC9Uq > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#Q93rr9rC9Uq > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }


            let option6 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option6 === 0) {
                cy.get('#t1BJwNXTqfB > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#t1BJwNXTqfB > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }

            let option7 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option7 === 0) {
                cy.get('#SRsBV7qxtsM > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#SRsBV7qxtsM > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }


            let option8 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option8 === 0) {
                cy.get('#OD9dNSxqoAn > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#OD9dNSxqoAn > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }


            let option9 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option9 === 0) {
                cy.get('#ZswBrZYZmDk > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#ZswBrZYZmDk > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }


            let option11 = Math.floor(Math.random() * 2); // This will give either 0 or 1

            if (option11 === 0) {
                cy.get('#qVlA9ErEjTO > :nth-child(1) > .ant-radio > .ant-radio-input').click();
            } else {
                cy.get('#qVlA9ErEjTO > :nth-child(2) > .ant-radio > .ant-radio-input').click();
            }


            cy.get('.ant-form > .ant-btn').click(); //Click on the "Save" button



            cy.wait(5000);

        });
    }
});
