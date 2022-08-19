var faker = require('faker-br')

export default {
  random: function () {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var dataform = {
      fullName: `${firstName} ${lastName}`,
      firstName2: faker.name.firstName(),
      addressField: faker.address.streetAddress(),
      emailAdress: faker.internet.email(firstName),
      phoneNumber: faker.phone.phoneNumber(),
      cpf: faker.br.cpf(),
      skillsField: 'APIs',
      countryField: faker.address.country(),
      birthYear: '1995',
      birthMonth: faker.date.month(),
      birthDay: '5',
      passowordFirst: '123456@Abc',
      passwordSecond: '123456@Abc',
      instagram: `@${firstName}`
    }
    return dataform
  }
}
