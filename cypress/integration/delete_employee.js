describe('Can delete employee card', () => {
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

    cy.get('form[id="new-employee"]').submit();
    cy.contains('You have successfully added an employee');
    cy.get('.App-header').click();
  });

  it('Card is deleted', () => {
    cy.server();
    cy.route('DELETE', 'api/employee/*', { status: 'success' }).as('deleteEmployee');
    cy.get('i[class*="trash"')
      .first()
      .click();
    cy.get('button[class*="ui icon positive right labeled button"]').click();
    cy.wait('@deleteEmployee')
      .its('responseBody')
      .should('have.property', 'status', 'success');
  });
});
