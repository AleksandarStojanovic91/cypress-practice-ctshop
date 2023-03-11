// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const basePage = require('pages/basePage.js').basePage;
let menu = ".sharkskin-megamenu.megamenu-v.megamenu-am";
let subMenu = 'a[href="/$"]#akcija~ul';
let subMenuLink = '[href="/$"]';

// const productsPage = require('pages/productsPage.js').productsPage;
let filter = `//label[text()='$']/../input`;


/**
 * @memberOf cy
 * @method closeAdd Closes the add popup
 */
Cypress.Commands.add('closeAdd', () => {
    cy.get('#popup-smart-root-53976').shadow().find('#PsCloseButton').click()
})

/**
 * @memberOf cy
 * @method acceptCookies Accept Cookies
 */
Cypress.Commands.add('acceptCookies', () => {
    // cy.xpath('//button[text()=\'Prihvatam\']').click()
    cy.get('button').contains('Prihvatam').click()
})

/**
 * @memberOf cy
 * @method clickLinkFromMenu Click Link From Menu
 * @param submenu
 * @param link
 */
Cypress.Commands.add('clickLinkFromMenu', (submenu, link) => {
    cy.get(menu).invoke('show')
    cy.get(subMenu.replace('$', submenu)).invoke('show')
    cy.get(subMenuLink.replace('$', link)).click()
})

/**
 * @memberOf cy
 * @method checkFilter Check Filter
 * @param filterName
 */
Cypress.Commands.add('checkFilter', (filterName) => {
    cy.xpath(filter.replace('$',filterName)).check({force:true});
})


