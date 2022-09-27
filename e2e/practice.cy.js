const { eq } = require("lodash");

describe('empty spec', () => {
  it('today weather', () => {
    const content = '오늘 날씨';

    cy.visit('https://naver.com')
      .get('div')
      .should('have.class','green_window')
      .get('input[name=query]')
      .click()
      .type(content)
      .get('button[id=search_btn]')
      .click()

  })
})