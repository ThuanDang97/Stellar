export const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT

export const GOAL_ENDPOINT = (userId: string) => `/${userId}/goal`

export const MARKETING_ENDPOINT = (userId: string) => `/${userId}/marketing`

export const SUBSCRIPTION_ENDPOINT = (userId: string) =>
  `/${userId}/subscription`

export const USER_ENDPOINT = (userId: string) => `/${userId}/user`

export const CONNECT_BANK_ENDPOINT = (userId: string) =>
  `/${userId}/connect-bank`

export const CREATE_LINK_TOKEN = '/plaid/create-link-token'

export const GET_BANK_NUMBER = '/plaid/get-bank-number'

export const IDENTITY_ENDPOINT = (userId: string) =>
  `/${userId}/confirm-identity`

export const ADDRESS_ENDPOINT = (userId: string) => `/${userId}/confirm-address`

export const SSN_ENDPOINT = (userId: string) => `/${userId}/confirm-ssn`

export const ADDED_BILL_ENDPOINT = (userId: string) => `/${userId}/add-bill`

export const LINKED_BILL_ENDPOINT = (userId: string) => `/${userId}/link-bill`

export const CONFIRM_DETAIL_ENDPOINT = (userId: string) =>
  `/${userId}/confirm-detail`

export const CONNECT_ACCOUNT_ENDPOINT = (userId: string) =>
  `/${userId}/connect-account`

export const SCORE_PROJECTION_ENDPOINT = '/score-projection'

export const BILLS_ENDPOINT = (userId: string) => `/${userId}/bills`
