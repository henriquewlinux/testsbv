import loginPage from '../support/Pages/Login'
import signup from '../support/Pages/Signup'
import userRandom from '../fixtures/RandomUser'

var random = userRandom.random()

describe('User Registration', () => {
  xit('validate create account randomic', () => {
    const user = {
      mail: random.emailAdress,
      name: random.firstName2,
      password: 'teste1234',
      confirmPassword: 'teste1234'
    }

    loginPage.go()
    loginPage.register()
    signup.form(user)
    signup.register()
    signup.textModal()
  })
  it('validate create account', () => {
    const user = {
      mail: 'hbstests@gmail.com',
      name: 'Henrique teste',
      password: 'teste1234',
      confirmPassword: 'teste1234'
    }

    loginPage.go()
    loginPage.register()
    signup.form(user)
    signup.register()
    signup.textModal()
  })

  it('validate necessary to inform username', () => {
    const user = {
      mail: 'hbstests@gmail.com',
      password: 'teste1234',
      confirmPassword: 'teste1234'
    }

    loginPage.go()
    loginPage.register()
    signup.form(user)
    signup.register()
    signup.textModalNull('Nome não pode ser vazio.\n')
  })

  it('validate required field email', () => {
    const user = {
      name: 'Henrique teste',
      password: 'teste1234',
      confirmPassword: 'teste1234'
    }

    loginPage.go()
    loginPage.register()
    signup.form(user)
    signup.register()
    loginPage.textRequiredField('É campo obrigatório')
  })

  it('validate required field password', () => {
    const user = {
      name: 'Henrique teste',
      mail: 'hbstests@gmail.com',
      confirmPassword: 'teste1234'
    }

    loginPage.go()
    loginPage.register()
    signup.form(user)
    signup.register()
    loginPage.textRequiredField('É campo obrigatório')
  })

  it('validate required field confirm password', () => {
    const user = {
      name: 'Henrique teste',
      mail: 'hbstests@gmail.com',
      password: 'teste1234'
    }

    loginPage.go()
    loginPage.register()
    signup.form(user)
    signup.register()
    loginPage.textRequiredField('É campo obrigatório')
  })
})
