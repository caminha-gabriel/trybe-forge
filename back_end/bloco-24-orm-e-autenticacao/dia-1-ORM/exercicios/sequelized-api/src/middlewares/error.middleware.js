const errorMiddleware = async (err, _req, res, _next) => {
  console.log('An internal error ocurred');
  return res.status(500).json({ message: err.message});

};

module.exports = errorMiddleware;