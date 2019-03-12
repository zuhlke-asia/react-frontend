describe('Can add employee', () => {
  before(() => {
    cy.visit('http://localhost:3000');
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
    cy.get('input[type="submit"]')
      .contains('Submit')
      .should('be.visible');
  });

  it('Form is submitted', () => {
    cy.server();
    cy.fixture('employee.json').as('employeeJson');
    cy.route('POST', 'api/employee', '@employeeJson').as('postEmployee');
    cy.get('form[id="new-employee"]').submit();

    cy.wait('@postEmployee')
      .its('requestBody')
      .should('have.property', 'firstName', 'Alex');

    cy.get('#new-employee').submit();

    cy.wait('@postEmployee')
      .its('responseBody')
      .should('have.property', 'lastName', 'Test');
  });
});
