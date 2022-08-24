const connection = require('./connection');

const getByCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [[result]] = await connection.execute(query, [cep]);

  return result;
};

module.exports = {
  getByCep,
}