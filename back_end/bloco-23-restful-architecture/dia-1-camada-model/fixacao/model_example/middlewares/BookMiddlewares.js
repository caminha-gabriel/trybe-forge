const errors = {
  bookIdNotValid: {
    code: 422,
    message: 'Book id is not valid',
  },
  titleNotValid: {
    code: 422,
    message: 'Title is not valid',
  },
  titleIsNotAString: {
    code: 422,
    message: 'Title is not a string',
  },
  titleLengthIsLowerThanThree: {
    code: 422,
    message: 'Title length is lower than 3',
  },
};

const isDefined = (value) => (value);
const isAString = (value) => typeof value === 'string';
const lengthHigherThanThree = (value) => value.length >= 3;

const validateBookId = (req, res, next) => {
  const { id } = req.params;
  const { bookIdNotValid: { code, message} } = errors;

  if (!id) return res.status(code).json({ message });

  next();
};

const validateBookCreation = (req, res, next) => {
  const { title, author_id } = req.body;
  const {
    titleNotValid,
    titleIsNotAString,
    titleLengthIsLowerThanThree
  } = errors;

  switch (true) {
    case !isDefined(title): 
    return res.status(titleNotValid.code).json({ message: titleNotValid.message });

    case !isAString(title): 
    return res.status(titleIsNotAString.code).json({ message: titleIsNotAString.message });

    case !lengthHigherThanThree(title):
      console.log(title.length);
    return res.status(titleLengthIsLowerThanThree.code).json({ message: titleLengthIsLowerThanThree.message });  

    case !isDefined(author_id): 
    return res.status(authorIdNotValid.code).json({ message: authorIdNotValid.message });  

    default:
      next();
  };
};

module.exports = {
  validateBookId,
  validateBookCreation,
}