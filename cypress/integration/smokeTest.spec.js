const BASE_URL = 'http://localhost:1234'

describe('Smoke Test', () => {
  it('Make sure the Hi comes up', () => {
    cy.visit(BASE_URL).contains('Hi!')
  })
})
