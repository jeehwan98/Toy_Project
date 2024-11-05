const VALIDATE = Object.freeze({
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
});

const ERROR = Object.freeze({
  INVALID_EMAIL_INPUT: 'Invalid email format. Please enter a valid email.',
  INVALID_PASSWORD_INPUT: 'Invalid password. Please enter a valid password',
});

export {
  VALIDATE,
  ERROR
}