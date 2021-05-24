/// <reference types="Cypress" />

describe('Work on chartboost test', () => {

    //Launch the html file
    beforeEach('Visit the html file', () => {
        cy.visit('cypress/static-etna.html', {
            onBeforeLoad(win) {
                cy.stub(win.console, 'log').as('consoleLog')
            }
        })
    })
    
    //The ad image shows
    it('should display the image correctly', () => {        
        cy.get('#landscape_image')
            .should('have.attr', 'style', 'background-image: url("images/c2680fcf51fb9a840b6207dc36fd07b1dc9bc198.jpeg");')
        cy.get('#portrait_image')
            .should('have.attr', 'style', 'background-image: url("images/d836f406572271ee4d4c8bd8bf48a2c16685b952.jpeg");')
    })
   
    //The bottom part (HUD) is displayed correctly
    it('should display the bottom part (HUD) correctly', () => {
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

    //The close button appears
    it('should display the close button', () => {
        cy.get('#close-button', { timeout: 10000 }).should('be.visible')
    })

    //The download button is clickable
    it('should verify that the download button is clickable', () => {        
        cy.get('#screen-primary-download-button')
            .should('be.visible')
            .and('have.attr', 'href', 'javascript:')
    })
    
    //The download button will generate 'Chartboost.Utils.click' in the console when clicked
    it('should generate "Chartboost.Utils.click" in the log when download button is clicked', () => {
        cy.get('#screen-primary-download-button').click()
        cy.get('@consoleLog').should('be.calledWith', 'Chartboost.Utils.click')
    })

    //The close button will generate 'mraid.close' in the console when clicked
    it('should generate "mraid.close" in the log when close button is clicked', () => {        
        cy.get('#close-button', { timeout: 10000 }).should('be.visible')
        cy.get('#close-button').click()
        cy.get('@consoleLog').should('be.calledWith', 'mraid.close')
    })

    //(Optional) The top right Chartboost logo will show a snippet of our terms of use when clicked
    //(Optional) When the snippet of our terms of use is open, a click anywhere on the screen but on the 'here' link will close the snippet
    it('should display a snippet when the Chartboost logo is clicked', () => {        
        cy.get('#cb-logo-container').click()
        cy.get('.privacy_desc_content').as('snippet')
            .should('be.visible')
            .and('have.text', 'The decision to show this ad is based on certain properties of your device. Please read our Privacy Policy here')        
        cy.get('#ext-privacy-policy-link').as('privatePolicyLink')
        //cy.get('@privatePolicyLink').click(0, -60)
        //cy.get('@snippet').should('not.be.visible')
    })    
})