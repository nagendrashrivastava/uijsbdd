/// <reference types="cypress" />
import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { showroomPage } from '../../fixtures/locator.json'

Given('I navigate to leasePlan page', () => {
    cy.visit("").acceptCookies()
})

When('I select {string} in Make & Model filter', (item) => { 
    cy.get(showroomPage.filterDropdown).contains('Make & Model').click({force:true})
            .get(showroomPage.filterInput).type(item, { force: true })
            .get(showroomPage.filterResult).click({force:true})
})

When('I select {string} in Popular filter', (item) => {
    cy.get(showroomPage.filterDropdown).contains('Popular filters').click({ force: true })
        .get(showroomPage.popularFilters).contains(item).click({ force: true })
})

Then('I should see {string} as filter value', (value) => {
    cy.get(showroomPage.filterDropdown).contains(value).should('exist')
})

And('I select delete filter', () => {
    cy.get(showroomPage.deleteFilter).click()
})

Then('I should see {string} in filter results heading', (value) => {
    cy.get(showroomPage.cardHeading).should('contain.text', value)
})

Then('I should see best deal banner in card', () => {
    cy.get(showroomPage.bestDealBanner).should('exist')
})

Then('I select {string} in quick filters', (value) => {
    cy.get(showroomPage.quickFilters).contains(value).click({force:true})
})

When('I open More filters', () => {
    cy.get(showroomPage.moreFilterDropdown).click()
})

Then('I should see {string} as selected in {string} section', (value, section) => {
    cy.get('#'+section+"-"+value).should('exist').and('have.attr', 'checked')
})
