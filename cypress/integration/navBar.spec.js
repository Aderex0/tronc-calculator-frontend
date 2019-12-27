const BASE_URL = 'http://localhost:1234'

describe('builds a functioning navigation bar', () => {
  it('loads the navigation bar', () => {
    cy.visit(BASE_URL)
    cy.get('.nav-bar-container')
  })
})
