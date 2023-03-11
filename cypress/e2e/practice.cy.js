describe('CTShop', () => {
  it('CTShop', () => {
    cy.visit('https://www.ctshop.rs/')
    cy.closeAdd()
    cy.acceptCookies()
    cy.clickLinkFromMenu('laptopovi-tableti','laptopovi')
    cy.checkFilter('13.6"')
    cy.get('#products-list').find('div.ganalytics.item').should('have.length',3)
  })
})