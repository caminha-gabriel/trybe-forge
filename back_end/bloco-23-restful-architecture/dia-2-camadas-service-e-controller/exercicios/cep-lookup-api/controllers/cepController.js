const cepService = require('../services/cepService');

const getByCep = async (req, res) => {
  const { cep } = req.params;

  const { code, message, content } = await cepService.getByCep(cep);

  if (message) {
    return res.status(code).json({ message });
  };

  return res.status(code).json(content);
};

module.exports = {
  getByCep,
}