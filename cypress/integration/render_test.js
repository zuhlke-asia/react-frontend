describe('Home Page Renders', () => {
  it('Visits Employee Profile', () => {
    cy.visit('localhost:3000');
  });

  it('First Name can be typed', () => {
    cy.get('[placeholder="First name"]')
      .type('Alex')
      .should('have.value', 'Alex');
  });

  it('Last Name can be typed', () => {
    cy.get('[placeholder="Last name"]')
      .type('Test')
      .should('have.value', 'Test');
  });

  it('Address can be typed', () => {
    cy.get('[placeholder="Address"]')
      .type('123 Test Road')
      .should('have.value', '123 Test Road');
  });

  it('Email can be typed', () => {
    cy.get('[placeholder="Email Address"]')
      .type('test@test.com')
      .should('have.value', 'test@test.com');
  });

  it('Phone can be typed', () => {
    cy.get('[placeholder="Phone Number"]')
      .type('123456789')
      .should('have.value', '123456789');
  });

  it('Submit button is visible', () => {
    cy.get('input')
      .contains('Submit')
      .should('be.visible');
  });
});
