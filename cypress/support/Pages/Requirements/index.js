class Requirements{

  textPage(text){
    cy.contains('Gostou do projeto e quer contribuir?')
    .should('be.visible')
    .should('have.text', text)
  }
  
}
export default new Requirements()