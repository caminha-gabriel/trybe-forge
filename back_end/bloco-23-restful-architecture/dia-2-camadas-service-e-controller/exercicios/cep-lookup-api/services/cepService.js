const cepModel = require('../models/cepModel');

const validateCep = (cep) => {
  const cepRegex = /^\d{5}-?\d{3}$/;

  return cep.match(cepRegex);
};

const getByCep = async (cep) => {
  const cepIsValid = validateCep(cep);

  if (!cepIsValid) {
    return {
      code: 400,
      message: 'Invalid CEP'
    };
  }

  const response = await cepModel.getByCep(cep);

  if (!response) {
    return {
      code: 404,
      message: 'CEP not found'
    }
  };

  return {
    code: 200,
    content: {
      cep: response.cep,
      logradouro: response.logradouro,
      bairro: response.bairro,
      localidade: response.localidade,
      uf: response.uf,
    }, 
  };
};

module.exports = {
  getByCep,
}