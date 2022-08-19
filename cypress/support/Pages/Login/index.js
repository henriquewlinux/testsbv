import { elLogin } from './elements'

class LoginPage {
  go() {
    cy.visit('/')
  }

  form(user) {
    if (user.mail) cy.get(elLogin.inpEmail).type(user.mail)
    if (user.password) cy.get(elLogin.inpPassword).type(user.password)
  }

  submit() {
    cy.contains('Acessar').should('be.visible').click()
  }

  textRequiredField(text) {
    cy.contains('É campo obrigatório').should('have.text', text)
  }

  textInvalidEmail(text) {
    cy.contains('Formato inválido').should('have.text', text)
  }

  register() {
    cy.get(elLogin.btnRegister).should('be.visible').click()
  }

  requirements() {
    cy.get(elLogin.btnRequeriments).should('be.visible').click()
  }
}

export default new LoginPage()
