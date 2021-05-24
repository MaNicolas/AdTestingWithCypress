const {
    Before,
    Given,
    Then,
    When
} = require("cypress-cucumber-preprocessor/steps");

Given('I successfully navigate to the ad', () => {
    cy.visit('cypress/static-etna.html', {
        onBeforeLoad(win) {
            cy.stub(win.console, 'log').as('consoleLog')
        }
    })
})

Then('I should see the ad image correctly displayed', () => {
    cy.get('#landscape_image')
        .should('have.attr', 'style', 'background-image: url("images/c2680fcf51fb9a840b6207dc36fd07b1dc9bc198.jpeg");')
    cy.get('#portrait_image')
        .should('have.attr', 'style', 'background-image: url("images/d836f406572271ee4d4c8bd8bf48a2c16685b952.jpeg");')
})

Then('I should see see the bottom HUD correctly', () => {
    cy.get('#primary-screen-content-holder').should('be.visible')
    cy.get('#screen-thumb-image')
        .should('be.visible')
        .and('have.attr', 'src', 'images/57e649d004b016251663a3c5.114.png')
    cy.get('#app-title').invoke('text').then((appTitle) => {
        expect(appTitle).to.eq('Block Puzzle Jewel')
    })
    cy.get('#screen-ratings-holder').should('be.visible')
    cy.get('.screen-rating-star-holder').should('have.length', 5)
    cy.get('#screen-primary-download-button')
        .should('be.visible')
        .and('contain', 'Download Now')
})

Then('I should see the close button after {int} milliseconds', (seconds) => {
    cy.get('#close-button', { timeout: seconds }).should('be.visible')
})

Then('The download button should be a link', () => {
    cy.get('#screen-primary-download-button')
        .should('be.visible')
        .and('have.attr', 'href', 'javascript:')
})

When('I click on the {string}', (id) => {
    cy.get(id, { timeout: 10000 }).should('be.visible')
    cy.get(id).click()
})

Then('I should see {string} in the console log', (log) => {
    cy.get('@consoleLog').should('be.calledWith', log)
})

When('I click on the Chartboost logo', () => {
    cy.get('#cb-logo-container').click()
})

Then('I should see a term of use snippet', () => {
    cy.get('.privacy_desc_content').as('snippet')
        .should('be.visible')
        .and('have.text', 'The decision to show this ad is based on certain properties of your device. Please read our Privacy Policy here')
    cy.get('#ext-privacy-policy-link').as('privatePolicyLink')
    //cy.get('@privatePolicyLink').click(0, -60)
    //cy.get('@snippet').should('not.be.visible')
})