const {
  firstNameIsNotDefined,
  lastNameIsNotDefined,
  emailIsNotDefined,
  passwordIsNotDefined,
  passwordMustBeAString,
  passwordLengthMustBeAtLeast6,
} = require('../errors');

const validateUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  switch (true) {
    case !firstName:
    return res.status(firstNameIsNotDefined.code).json(firstNameIsNotDefined.message);

    case !lastName:
    return res.status(lastNameIsNotDefined.code).json(lastNameIsNotDefined.message);

    case !email:
    return res.status(emailIsNotDefined.code).json(emailIsNotDefined.message);

    case !password:
    return res.status(passwordIsNotDefined.code).json(passwordIsNotDefined.message);

    case typeof (password) !== 'string':
    return res.status(passwordMustBeAString.code).json(passwordMustBeAString.message);

    case password.length < 6:
    return res.status(passwordLengthMustBeAtLeast6.code).json(passwordLengthMustBeAtLeast6.message);

    default:
      next();
  }
};

module.exports = {
  validateUser,
}