// https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file
describe('aspnet-spa-starter home page', () => {
    it('should be accessible', () => {
      cy.visit('/')
      cy.get('app-root')
        .contains('aspnet-spa-starter app is running!')
        .should('be.visible')
    })    
  })