const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API_URLS = Object.freeze({
  LOGIN_URL: `${BASE_URL}/auth/login`,
  LOGOUT_URL: `${BASE_URL}/auth/logout`,
  REGISTER_URL: `${BASE_URL}/auth/register`,
  USER_URL: `${BASE_URL}/users`,
  AUTH_USER_URL: `${BASE_URL}/auth/users`,
})

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
  API_URLS,
  VALIDATE,
  ERROR
}

