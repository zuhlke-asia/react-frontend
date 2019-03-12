describe('Can sort employees', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('Can click sorting dropdown', () => {
    cy.get('div[role="listbox"]')
      .first()
      .click();

    cy.get('div[class*="menu transition"]').should('is.visible');

    cy.get('div[role="listbox"]')
      .first()
      .click();
  });

  it('All sort options create appropriate get requests', () => {
    const sortOptions = [
      { value: 'firstName', text: 'First Name' },
      { value: 'lastName', text: 'Last Name' },
      { value: 'address', text: 'Address' },
      { value: 'email', text: 'Email Address' },
      { value: 'phone', text: 'Phone Number' },
      { value: 'createdAt', text: 'Created Date' },
      { value: 'updatedAt', text: 'Updated Date' },
    ];

    cy.server();
    cy.route('GET', '/api/employee*', 'fixture:employee_page.json').as('getEmployee');

    sortOptions.forEach((current, index) => {
      cy.get('div[role="listbox"]')
        .first()
        .click();

      cy.get('span[class="text"]')
        .contains(sortOptions[index].text)
        .click();

      cy.wait('@getEmployee')
        .its('url')
        .should('have', `sort=${sortOptions[index].value}`);
    });
  });

  it('All direction options create appropriate get requests', () => {
    const directionOptions = [
      { value: 'asc', text: 'Ascending' },
      { value: 'desc', text: 'Descending' },
    ];

    cy.server();
    cy.route('GET', '/api/employee*', 'fixture:employee_page.json').as('getEmployee');

    directionOptions.forEach((current, index) => {
      cy.get('div[role="listbox"]')
        .last()
        .click();

      cy.get('span[class="text"]')
        .contains(directionOptions[index].text)
        .click();

      cy.wait('@getEmployee')
        .its('url')
        .should('have', `,${directionOptions[index].text}`);
    });
  });
});
