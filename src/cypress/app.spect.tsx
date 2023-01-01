export { };
it('should work', () => {
  cy.visit('http://localhost:3000');
  cy.get('a').should('have.text', 'Learn React');
  cy.get("#input").type("text")
  cy.get("bt").click("bottom")
  cy.get("form").submit()
  cy.contains("Learn cypress")
});