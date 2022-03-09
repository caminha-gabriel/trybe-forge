const validate = new window.JustValidate('#form');

const validation = new JustValidate('#form');

validation.addField('#name-input', [
  {
    rule: 'minLength',
    value: 4,
  },
  {
    rule: 'maxLength',
    value: 32,
  },
])