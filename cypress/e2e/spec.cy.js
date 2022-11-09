describe('page', () => {
  it('does not work', () => {
    cy.intercept(
      { method: 'GET', url: 'https://code.jquery.com/jquery-3.6.1.min.js' },
      { fixture: 'jquery.js' }
    );
  });
});
