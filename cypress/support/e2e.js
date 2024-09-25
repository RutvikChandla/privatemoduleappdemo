describe('App Test', () => {
  it('visits the app and checks content', () => {
    cy.visit('http://lvh.me:3005/');
    cy.contains('Hello from Cypress test app!');
    cy.contains('Private package says:');
    cy.contains('rutvik');
  });
});