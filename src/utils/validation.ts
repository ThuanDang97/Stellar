// Constants
import {
  INVALID_EMAIL_OR_PASSWORD,
  REQUIRED,
  PASSWORD_RULES,
  REGEX_EMAIL,
  REGEX_PASSWORD,
} from '@constants/index'

// Props type
import {
  SignUpAccount,
  ValidationResult,
} from '@self-types/components/SignUpForm.props'
import { ValidateProps } from '@self-types/components/Validate.props'

// Utils
import { findItemByValue } from '@utils/index'

// Constants
import { EMAIL_EXIST } from '@constants/errorMessage'

// Data
import users from '../../tmp/data/users.json'

// Check validate input value
export const checkValidate = (args: ValidateProps): string => {
  switch (true) {
    // case required
    case args.value === '':
      return REQUIRED
    // case error format with regex
    case !args.regex.test(args.value):
      return args.errorMess
    // case valid input successfully
    default:
      return ''
  }
}

/**
 * Check password rules
 * @param pass password value
 * @returns number
 */
export const checkPasswordRules = (pass: string) => {
  const errorMsgs: number[] = []

  const passwordResult = () => {
    PASSWORD_RULES.map((rule) => {
      if (
        checkValidate({
          value: pass,
          regex: rule,
          errorMess: REQUIRED,
        })
      ) {
        return errorMsgs.push(errorMsgs.length + 1)
      }

      return []
    })

    return errorMsgs.splice(0)
  }

  return passwordResult().length
}

/**
 * Check status password
 * @param errorCase quantity of error cases
 * @returns status of password
 */
export const checkStatusPassword = (errorCase: number) => {
  const result: ValidationResult = { status: '' }

  if (errorCase === 0) {
    result.status = 'strong'
  } else if (errorCase >= 3) {
    result.status = 'weak'
  } else {
    result.status = 'medium'
  }

  return result
}

/**
 * Validation for SignUp page
 * @param signUpAccount signUp value
 * @returns ValidationResult
 */
export const signUpValidate = (
  signUpAccount: SignUpAccount,
): ValidationResult => {
  const result: ValidationResult = { isValid: true }
  result.error = {
    email: '',
    password: '',
  }

  const user = findItemByValue({
    data: users,
    value: signUpAccount.email,
    key: 'email',
  })

  const validateEmail = checkValidate({
    value: signUpAccount.email,
    regex: REGEX_EMAIL,
    errorMess: INVALID_EMAIL_OR_PASSWORD,
  })

  const validatePassword = checkValidate({
    value: signUpAccount.password,
    regex: REGEX_PASSWORD,
    errorMess: INVALID_EMAIL_OR_PASSWORD,
  })

  // Email
  if (user) {
    result.error.email = EMAIL_EXIST
  }
  if (validateEmail) {
    result.error.email = INVALID_EMAIL_OR_PASSWORD
  }

  // Password
  if (validatePassword) {
    result.error.password = INVALID_EMAIL_OR_PASSWORD
  }

  // Result
  if (!signUpAccount.userName || result.error.email || result.error.password) {
    result.isValid = false
  }

  return result
}
