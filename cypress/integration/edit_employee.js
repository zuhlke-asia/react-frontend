describe('Can edit employee', () => {
  before(() => {
    cy.visit('localhost:3000');

    cy.server();
    cy.fixture('employee.json').as('employeeJson');
    cy.route('POST', 'employee', '@employeeJson');
    cy.get('[placeholder="First Name"]').type('Alex');
    cy.get('[placeholder="Last Name"]').type('Test');
    cy.get('[placeholder="Address"]').type('123 Test Road');
    cy.get('[placeholder="Email Address"]').type('test@test.com');
    cy.get('[placeholder="Phone Number"]').type('123456789');

    cy.get('form').submit();
    cy.contains('You have successfully added an employee');
    cy.get('.App-header').click();
    cy.get('i[class*="pencil"')
      .first()
      .click();
  });

  it('First Name can be typed', () => {
    cy.get('input[name="fnInput"]')
      .eq(1)
      .clear()
      .type('Alex')
      .should('have', 'Alex');
  });

  it('Last Name can be typed', () => {
    cy.get('input[name="lnInput"]')
      .eq(1)
      .clear()
      .type('Test')
      .should('have', 'Test');
  });

  it('Address can be typed', () => {
    cy.get('input[name="addInput"]')
      .eq(1)
      .clear()
      .type('123 Test Road')
      .should('have', '123 Test Road');
  });

  it('Email can be typed', () => {
    cy.get('input[name="emailInput"]')
      .eq(1)
      .clear()
      .type('test@test.com')
      .should('have', 'test@test.com');
  });

  it('Phone can be typed', () => {
    cy.get('input[name="phoneInput"]')
      .eq(1)
      .clear()
      .type('123456789')
      .should('have', '123456789');
  });

  it('Submit button is visible', () => {
    cy.get('button[class*="ui icon positive right labeled button"]')
      .contains('Submit')
      .should('be.visible');
  });

  it('Form is submitted', () => {
    cy.server();
    cy.fixture('employee.json').as('employeeJson');
    cy.route('PUT', 'api/employee/*', '@employeeJson').as('putEmployee');

    cy.get('input[name="fnInput"]').then(($input) => {
      cy.get('button[class*="ui icon positive right labeled button"]').click();
      cy.wait('@putEmployee')
        .its('requestBody')
        .should('have.property', 'firstName', $input[1].defaultValue);
    });
  });
});
