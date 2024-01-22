// import '../support/commands'

import { faker } from "@faker-js/faker";

describe("Access the homepage menu of the platform", () => {

    // it("test1 - tests accessing surgeries", () => {
    //     //cy.login();
    //     cy.get('#j_username').type('admin').should("have.value", "admin")
    //     cy.get('#j_password').type('district').should("have.value", "district")

    //     cy.once("fail", (err) => {
    //         return false;
    //     });
    //     cy.get('#submit').click()
    //     cy.get('[data-test="headerbar-apps-icon"]').click()
    //     cy.contains("FIND HAI").click()//.wait(12000)
    //     cy.contains('SURGERIES').click()
    // })

    it.only("test2 - tests registration of a new surgery currently", () => {


        const firstName = faker.name.firstName();
        const middleName = faker.name.middleName();
        const familyName = faker.name.lastName();
        const emailAddress = familyName.toLowerCase() + firstName.toLowerCase()

        cy.visit("http://findhai.intellisoftkenya.com/dhis-web-commons/security/login.action")

        //cy.login();
        cy.get('#j_username').type('admin').should("have.value", "admin")
        cy.get('#j_password').type('district').should("have.value", "district")

        // cy.once("fail", (err) => {
        //     return false;
        // });
        cy.wait(3000)
        cy.contains('Sign in').click({ force: true})
        // cy.get('#submit').click({ force: true })
        cy.get('[data-test="headerbar-apps-icon"]').click()
        cy.contains("FIND HAI").click().wait(8000)
        cy.contains('SURGERIES').click()
        cy.contains("Register new surgery").click()
        const PatID = () => Cypress._.random(0, 1e6);
        const patclinicNo = PatID();
        cy.get('#US1gCMCXtGq').type(`PAT-${patclinicNo}`, '{enter}')
        cy.get('#M9DBAh9Lnpw').type(firstName)
        cy.get('#GhX9ASUscsM').type(middleName)
        cy.get('#cNBoqe3kM9F').type(familyName)

        const gender = [
            "Female",
            "Male"
        ];

        const randomPress = Math.floor(Math.random() * 2) + 1;
        const dropdown1 = cy.get('#O9xFVVDAqsL');

        for (let i = 0; i < randomPress; i++) {
            dropdown1.type('{downarrow}');
        }

        dropdown1.type('{enter}');


        function randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }

        const randomBirthday = randomDate(new Date(1940, 0, 1), new Date(2023, 0, 1));
        const formattedBirthday = randomBirthday.toISOString().split('T')[0];


        cy.get('#Y4bglcLiAGx').click().type(formattedBirthday).type('{enter}');

        function admissionDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }

        const randomAdmission = randomDate(new Date(2023, 0, 1), new Date(2023, 10, 31));
        const formattedAdmission = randomAdmission.toISOString().split('T')[0];

        cy.get('#dtgA3a71Htu').click().type(formattedAdmission).type('{enter}');

        function surgeryDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }

        const randomSurgeryDate = randomDate(new Date(2023, 10, 1), new Date(2023, 11, 31));
        const formattedSurgery = randomSurgeryDate.toISOString().split('T')[0];

        cy.get('#Ogx5pUkCK7Y').click().type(formattedSurgery).type('{enter}');

        const surgicalProcedure = [
            "ACL reconstruction surgery",
            "Ankle repair",
            "Hip replacement",
            "Joint arthroscopy",
            "Joint fusion surgery",
            "Knee replacement",
            "ORIF",
            "Shoulder replacement surgery",
            "Spinal surgery",
            "Other(specify)"
        ];
        const randomProcedure = Math.floor(Math.random() * surgicalProcedure.length);
        const randomSurgery = surgicalProcedure[randomProcedure];


        const randomPresser = Math.floor(Math.random() * 10) + 1;
        const dropdown = cy.get('#u2mZ7WXhjHt');

        for (let i = 0; i < randomPresser; i++) {
            dropdown.type('{downarrow}');
        }

        dropdown.type('{enter}');


        const scheduling = [
            "Elective",
            "Emergency"
        ]


        const randomPresser1 = Math.floor(Math.random() * 2) + 1;
        const dropdown2 = cy.get('#LXSQGQvSQGf');

        for (let i = 0; i < randomPresser1; i++) {
            dropdown2.type('{downarrow}');
        }

        dropdown2.type('{enter}');

        const location = [
            "Orthopedic ward",
            "General surgery ward"
        ]


        const randomPresser3 = Math.floor(Math.random() * 2) + 1;
        const dropdown3 = cy.get('#JwuMPx8ZPLD');

        for (let i = 0; i < randomPresser3; i++) {
            dropdown3.type('{downarrow}');
        }

        dropdown3.type('{enter}');

        cy.get('.ant-btn').click().wait(500)
        cy.get(':nth-child(7) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click().wait(300)
        cy.get('.ant-radio-input').eq(0).click().check();
        cy.get('input[placeholder="Blood glucose levels (Mmol/L)"]').type('70ml')
        cy.get('input[placeholder="Intervention to correct blood sugar, if any"]').type('Insulin')
        cy.get('.ant-radio-input').eq(3).click().check();
        cy.get('.ant-radio-input').eq(4).click().check();

        const hairRemoval = [
            "No",
            "Clippers",
            "Razor"
        ]


        const randomPresser4 = Math.floor(Math.random() * 3) + 1;
        const dropdown4 = cy.get('#oRsBE7WgULf_pNJpQOp13TO');

        for (let i = 0; i < randomPresser4; i++) {
            dropdown4.type('{downarrow}');
        }

        dropdown4.type('{enter}');


        cy.get('.ant-radio-input').eq(7).click().check();
        cy.get('.ant-radio-input').eq(9).click().check();
        cy.get('.ant-radio-input').eq(11).click().check();
        cy.get('.ant-radio-input').eq(13).click().check();
        cy.get('.ant-radio-input').eq(15).click().check();

        const implantUsed = [
            "No",
            "Metal(Ortho)",
            "Skin graft",
            "Mesh",
            "Other"
        ]


        const randomPresser5 = Math.floor(Math.random() * 5) + 1;
        const dropdown5 = cy.get('input[type="search"]');

        for (let i = 0; i < randomPresser5; i++) {
            dropdown5.type('{downarrow}');
        }

        dropdown5.type('{enter}');

        cy.get('.ant-radio-input').eq(17).click().check();
        cy.get('.ant-radio-input').eq(19).click().check();
        cy.get('.ant-radio-input').eq(21).click().check();


        const riskFactors = [
            "Healthy Person",
            "Hypertension",
            "Diabetes",
            "COPD",
            "Major Trauma",
            "Age > 75 yrs",
            "Immunocompromised",
            "Multiple fractures"
        ]


        const randomPresser6 = Math.floor(Math.random() * 8) + 1;
        const dropdown6 = cy.get('input[type="search"]');

        for (let i = 0; i < randomPresser6; i++) {
            dropdown6.type('{downarrow}');
        }

        dropdown6.type('{enter}');


        cy.get(':nth-child(6) > .form-0-2-46 > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #HmKL3kmI0nA').click().focused().type('Hypertension{enter}')
        cy.get(':nth-child(11) > .form-0-2-46 > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #n78ALDPo3ym').click().focused().get('[title=">2 min - 3 min"] > .ant-select-item-option-content').click()
        cy.get(':nth-child(12) > .form-0-2-46 > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #n78ALDPo3ym').click().focused().type('')
        cy.get(':nth-child(16) > .form-0-2-46 > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #TMfPGD5aJHQ').click().focused().type('Cefazolin')
        cy.get(':nth-child(17) > .form-0-2-46 > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #TMfPGD5aJHQ').click().type('Cefazolin{enter}')
        cy.get(':nth-child(21) > .form-0-2-46 > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #OEvr8vNqbQg').type('Prophylaxis{enter}')
        cy.get('.submitButton-0-2-47').click()

        cy.get(':nth-child(8) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click()
        cy.get('#VJe5oPR17wE').click().focused().get('.ant-picker-header-prev-btn').click().get('[title="2023-10-24"]').click()
        cy.get('#fkxHVloTLwR > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#RKdbQFkgpOC').click().focused().get(':nth-child(5) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click().get(':nth-child(5) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > :nth-child(4) > [title="2023-10-26"]').click()
        cy.get('#kKbAdaCCCM7 > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#BW86oe5G4i7').click().focused().type('Organ{enter}')
        cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click().focused().type('Heat{enter}')
        //cy.get('#b0pxjhsJFEq_0_xS5SzaMlRUu > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#NTtKqGBg1ZQ > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('#H28GHift6tu').click().focused().type('Heat{enter}')
        cy.get('#xS5SzaMlRUu > :nth-child(1) > .ant-radio > .ant-radio-input').check()
        cy.get('.submitButton-0-2-47 > span').click()

        cy.get(':nth-child(9) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click()
        const sampleID = () => Cypress._.random(0, 1e7);
        const sampleNo = sampleID();

        cy.get('#zoPeWyjeusE').type(`SAMPLE-${sampleNo}`, '{enter}')
        cy.get('#DN4UyEFE4Xh').click().focused().type('Pus{enter}')
        cy.get('#B0DQpkdwBMe').click().focused().get(':nth-child(9) > .ant-picker-dropdown > .ant-picker-panel-container > .ant-picker-panel-layout > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-header > .ant-picker-header-prev-btn').click()
        cy.get('#XnyFUOpI8EN').click().focused().type('Positive culture{enter}')
        cy.get('#ZJk1RmtPPVN').click().focused()
        cy.get('#jrBAPDCvLb5').click().focused()

        cy.get('#B7pPzHRas3A').click().focused()
        cy.get('#DN4UyEFE4Xh').click().focused()
        cy.get('#odqtQYQV3Ih_0_XIbjZX3HUT0').click().focused()
        cy.get('#odqtQYQV3Ih_0_j4c81HWeayx').click().focused()
        cy.get('#odqtQYQV3Ih_0_zCmpVgyXu7L').click().focused()
        cy.get('#odqtQYQV3Ih_0_E9cp0O1lk9a').click().focused()
        cy.get('#odqtQYQV3Ih_0_EfCxNTaw0Oa').click().focused()
        cy.get('#odqtQYQV3Ih_0_F7hTIlGI8UA').click().focused()
        cy.get('#odqtQYQV3Ih_0_UhmtatqVCVZ').click().focused()
        cy.get('.submit-0-2-47').click().focused()
        // cy.get(':nth-child(10) > .section-0-2-18 > .title-0-2-19 > :nth-child(1) > .header-0-2-24 > div > .ant-btn').click()

    })

})
