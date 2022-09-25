const { cyan } = require("color-name")

describe('My first Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit(' https://blackcoffee-study.github.io/js-counter-test/') //페이지 방문

    cy.contains('+').click()
    cy.contains('Reset').click()
  })
})