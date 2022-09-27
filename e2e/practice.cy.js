describe('empty spec', () => {
  it('click news', () => {
    cy.visit('https://naver.com')
      .get('nave_item')
      .click();

    
  })
})