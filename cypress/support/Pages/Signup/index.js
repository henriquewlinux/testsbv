import { elSignup } from './elements'

class Signup {
  backToLogin() {
    cy.get(elSignup.btnBackToLogin).should('be.visible').click()
  }

  visibleBackToLogin() {
    cy.get(elSignup.visibleBackToLogin).should('have.attr', 'href')
  }

  form(user) {
    if (user.name) cy.get(elSignup.inpName).type(user.name, { force: true })
    if (user.mail) cy.get(elSignup.inpEmail).type(user.mail, { force: true })
    if (user.password)
      cy.get(elSignup.inpPassword).type(user.password, { force: true })
    if (user.confirmPassword)
      cy.get(elSignup.inpConfirmPassword).type(user.confirmPassword, {
        force: true
      })
  }

  register() {
    cy.contains('Cadastrar').click({ force: true })
  }

  textModal() {
    cy.get(elSignup.textModal).should('be.visible')
  }

  textModalNull(text) {
    cy.get(elSignup.textModal).should('be.visible').should('have.text', text)
  }
}

export default new Signup()
