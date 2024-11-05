const VALIDATE = Object.freeze({
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  NAME_REGEX: /^\S.*\S$|^\S$/,

});

const ERROR = Object.freeze({
  INVALID_NAME_INPUT: 'Cannot be empty',
  INVALID_EMAIL_INPUT: 'Invalid email format. Please enter a valid email.',
  INVALID_PASSWORD_INPUT: 'Invalid password. Please enter a valid password',
  INVALID_CONFIRM_PASSWORD_INPUT: 'Password does not match.',
});

export {
  VALIDATE,
  ERROR
}