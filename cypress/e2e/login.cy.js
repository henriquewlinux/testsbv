import loginPage from '../support/Pages/Login'
import signup from '../support/Pages/Signup'
import requirements from '../support/Pages/Requirements'


describe('Tests site ', () => {
  it('validate login successfully', () => {
    const user = {
      mail: 'hbstests@gmail.com',
      password: 'teste1234'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
  })

  it('validate Required Field mail', () => {
    const user = {
      password: 'teste1234'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.textRequiredField('É campo obrigatório')
  })

  it('validate Required Field password', () => {
    const user = {
      mail: 'hbstests@gmail.com'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.textRequiredField('É campo obrigatório')
  })

  it('validate invalid format email', () => {
    const user = {
      mail: 'hbstests'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.textInvalidEmail('Formato inválido')
  })

  it('validate registration screen ', () => {
    loginPage.go()
    loginPage.register()
    signup.visibleBackToLogin()
  })

  it('validate acess requirements page', () => {
    loginPage.go()
    loginPage.requirements()
    requirements.textPage('Gostou do projeto e quer contribuir?')
  })
})
