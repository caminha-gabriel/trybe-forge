const cepModel = require('../models/cepModel');
const Joi = require('joi');

const validateCep = (cep) => {
  const cepRegex = /^\d{5}-?\d{3}$/;

  return cep.match(cepRegex);
};

const validateNewCep = (cep, logradouro, bairro, localidade, uf) => {
  const cepRegex = /^\d{5}-?\d{3}$/;

  const { error } = Joi.object({
    cep: Joi.string().not().empty().required().pattern(new RegExp(cepRegex)),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required().length(2),
  }).validate({ cep, logradouro, bairro, localidade, uf });
  return error;
}

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

const addCep = async (cep, logradouro, bairro, localidade, uf) => {
  const newCepError = validateNewCep(cep, logradouro, bairro, localidade, uf);

  if (newCepError) {
    return {
      code: 400,
      message: newCepError.message,
    }
  };

  const cepAlreadyExists = await cepModel.getByCep(cep);

  if (cepAlreadyExists) {
    return {
      code: 409,
      message: 'CEP already exists'
    }
  }

  await cepModel.addCep(cep, logradouro, bairro, localidade, uf);

  return {
    code: 201,
    content: {
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    },
  };
};

module.exports = {
  getByCep,
  addCep,
}