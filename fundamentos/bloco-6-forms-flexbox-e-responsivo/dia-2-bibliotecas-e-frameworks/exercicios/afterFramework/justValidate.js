const validate = new window.JustValidate('#form');

const validation = new JustValidate('#form');

validation.addField('#name-input', [
  {
    rule: 'required',
    errorMessage: 'Nome obrigatório',
  },
  {
    rule: 'minLength',
    value: 4,
  },
  {
    rule: 'maxLength',
    value: 32,
  },
])
.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Email obrigatório',
  },
  {
    rule: 'email',
    errorMessage: 'Email inválido!',
  },
  {
    rule: 'minLength',
    value: 10,
  },
  {
    rule: 'maxLength',
    value: 50,
  },
])
.addField('#textArea', [
  {
    rule: 'required',
    errorMessage: 'Nos conte um pouco sobre você!'
  },
  {
    rule: 'maxLength',
    value: 500,
  },
])
.addField('#consent-image', [
  {
    rule: 'required',
    errorMessage: 'Precisamos do seu consenso para essa viagem',
  }
]);