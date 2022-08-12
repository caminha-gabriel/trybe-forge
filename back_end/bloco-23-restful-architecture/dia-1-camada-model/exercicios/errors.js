const HTTP_STATUS_BAD_REQUEST = 400;

const errors = {
  firstNameIsNotDefined: {
    code: HTTP_STATUS_BAD_REQUEST,
    message: 'First Name is not defined',
  },
  lastNameIsNotDefined: {
    code: HTTP_STATUS_BAD_REQUEST,
    message: 'Last Name is not defined',
  },
  emailIsNotDefined: {
    code: HTTP_STATUS_BAD_REQUEST,
    message: 'Email is not defined',
  },
  passwordIsNotDefined: {
    code: HTTP_STATUS_BAD_REQUEST,
    message: 'Password is not defined',
  },
  passwordMustBeAString: {
    code: HTTP_STATUS_BAD_REQUEST,
    message: 'Password must be a string',
  },
  passwordLengthMustBeAtLeast6: {
    code: HTTP_STATUS_BAD_REQUEST,
    message: 'Password length must be at least 6',
  },
};

module.exports = errors;