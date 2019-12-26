const BASE_URL = 'http://localhost:1234'

describe('Calculating Tronc', () => {
  it('Displays the Tronc calculator', () => {
    const troncPercentage = (3.75).toFixed(2)
    const checksPaid = (1543.59).toFixed(2)
    const serviceCharge = (165.4).toFixed(2)
    const sales = checksPaid - serviceCharge

    cy.visit(BASE_URL)

    cy.get('.tronc-percentage-field').type(troncPercentage)

    cy.get('.service-charge-field').type(serviceCharge)

    cy.get('.checks-paid-field').type(checksPaid)

    cy.get('.calculate-tronc-btn').click()

    cy.get('tronc-percentage-field').should('not.exist')

    cy.get('service-charge-field').should('not.exist')

    cy.get('.checks-paid-field').should('not.exist')

    cy.get('calculate-tronc-btn').should('not.exist')

    cy.contains((serviceCharge - (sales / 100) * troncPercentage).toFixed(2))
  })
})
