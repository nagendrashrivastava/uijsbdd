/// <reference types="cypress" />

import {header, homePage, formPage, formSubmissionPage, errorPage} from '../fixtures/locator.json'

describe('check fucntionality of UI Testing Site',()=>{

   // REQ-UI-01, REQ-UI-02
   it('should show title and logo on home page',()=>{
      cy.visit('')
      .title().should('eq', 'UI Testing Site')
      .get(header.logo).should('exist').and('have.text', 'UI Testing')
   })

   // REQ-UI-01, REQ-UI-02
   it('should show title and logo on form submission page',()=>{
      cy.visit('form')
      .title().should('eq', 'UI Testing Site')
      .get(header.logo).should('exist').and('have.text', 'UI Testing')
   })

   // REQ-UI-01, REQ-UI-02, REQ-UI-11
   it('should show title and logo on form page',()=>{
      cy.visit('form')
      .get(formSubmissionPage.inputBox).type('Ruchika')
      .get(formSubmissionPage.submitButton).click()
      .title().should('eq', 'UI Testing Site')
      .get(header.logo).should('exist').and('have.text', 'UI Testing')
   })

   // REQ-UI-03, REQ-UI-04, REQ-UI-08, REQ-UI-09, REQ-UI-10
   it('should navigate to home page on clicking company logo',()=>{
      cy.visit('form')
      .get(header.logo).click()
      cy.url().should('eq', Cypress.config().baseUrl)
      .get(header.home).parent().should('have.class', 'active')
      .get(homePage.welcomeMsg).should('exist').and('have.text', 'Welcome to Pixelmatic QA department')
      .get(homePage.welcomeDescription).should('exist').and('have.text', 'This site is dedicated to perform some exercises and demonstrate automated web testing.')
   })

   // REQ-UI-05, REQ-UI-06
   it('should navigate to form page upon clicking form button',()=>{
      cy.visit('')
      .get(header.form).click()
      cy.url().should('eq', Cypress.config().baseUrl + 'form.html')
      cy.get(header.form).parent().should('have.class', 'active')
   })

   // REQ-UI-07
   it('should give 404 error response code on click of Error button',()=>{
      
      cy.intercept('GET', '/assets/js/*').as('error')
      
      cy.visit('')
      cy.get(header.error).click()
      cy.wait('@error').its('response.statusCode').should('eq', 404)
      cy.get(errorPage.errorMsg).should('contain.text', '404 Error: File not found') 
   })

   // REQ-UI-12
   let users = ["John", "Sophia", "Charlie", "Emily"];
   users.forEach((user) => {
      it('should show input and submit button on form page and work as expected',()=>{
         cy.visit('form')
         .get(formSubmissionPage.inputBox).should('exist').type(user)
         .get(formSubmissionPage.submitButton).should('exist').click()
         .get(formPage.welcomeUserMsg).should('have.text', 'Hello ' + user + "!")
      })
   })

})