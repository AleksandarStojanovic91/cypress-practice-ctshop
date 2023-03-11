const basePage = require('/cypress/support/pages/basePage.js').basePage;
const productsPage = require('/cypress/support/pages/productsPage.js').productsPage;

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
    cy.get('button').contains('Prihvatam').click()
})

/**
 * @memberOf cy
 * @method clickLinkFromMenu Click Link From Menu
 * @param submenu
 * @param link
 */
Cypress.Commands.add('clickLinkFromMenu', (submenu, link) => {
    cy.get(basePage.menu).invoke('show')
    cy.get(basePage.subMenu.replace('$', submenu)).invoke('show')
    cy.get(basePage.subMenuLink.replace('$', link)).click()
})

/**
 * @memberOf cy
 * @method checkFilter Check Filter
 * @param filterName
 */
Cypress.Commands.add('checkFilter', (filterName) => {
    cy.xpath(productsPage.filter.replace('$',filterName)).check({force:true});
})

/**
 * @memberOf cy
 * @method verifyProductNum Verify Product Num
 * @param productNum
 */
Cypress.Commands.add('verifyProductNum', (productNum) => {
    cy.get(productsPage.productsList).find(productsPage.product).should('have.length',productNum)
})