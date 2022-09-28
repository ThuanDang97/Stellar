export const REGEX_EMAIL =
  /^[\w.!#$%&’*+/=?^`{|}~-]+@[a-z0-9-]+(?:\.[a-z]{2,10}){1,2}$/

export const REGEX_PASSWORD = /^(?!.* )(?=.{8,})/

export const PASSWORD_RULES = [
  /^.{8,}$/,
  /^(?=.*[a-z])(?=.*[A-Z])/,
  /^(?=.*[a-z])(?=.*?[0-9])/,
  /^(?=.*?[#?!@$%^&*-])/,
]

export const REGEX_PHONE = /^[0-9\b]+$/

export const REGEX_REMOVE_BRACKETS = /[^\d]/g

export const REGEX_REMOVE_COMMA = /,/g
