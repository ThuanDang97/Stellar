export const DEFAULT_HEADER_URL = {
  SIGN_UP: { TITLE: 'Sign Up', URL: '/sign-up' },
  MARKETING: { TITLE: 'Marketing', URL: '/marketing' },
  GOAL: { TITLE: 'Goal', URL: '/goal' },
  CONNECT_BANK: { TITLE: 'Connect Bank', URL: '/connect-bank' },
  LOGIN: { TITLE: 'Login', URL: '/login' },
  RESET_PASSWORD: { TITLE: 'Reset Password', URL: '/reset-password' },
  CHANGE_PASSWORD: { TITLE: 'Change Password', URL: '/change-password' },
  FORGOT_PASSWORD: { TITLE: 'Forgot Password', URL: '/forgot-password' },
  EMAIL_SENT: { TITLE: 'Email Sent', URL: '/email-sent' },
}

export const PRIMARY_HEADER_URL = {
  DASHBOARD: { TITLE: 'Dashboard', URL: '/dashboard' },
  FREE_CREDIT_SCORE: { TITLE: 'Free Credit Score', URL: '/free-credit-score' },
  CONFIRM_IDENTITY: { TITLE: 'Confirm Identity', URL: '/confirm-identity' },
  CONFIRM_ADDRESS: { TITLE: 'Confirm Address', URL: '/confirm-address' },
  CONFIRM_SSN: { TITLE: 'Confirm SSN', URL: '/confirm-ssn' },
  CONNECT_ACCOUNT: { TITLE: 'Connect Account', URL: '/connect-account' },
  CONFIRM_DETAIL: { TITLE: 'Confirm Detail', URL: '/confirm-detail' },
  LINK_FIRST_BILL: { TITLE: 'Link First Bill', URL: '/link-first-bill' },
  HELP: { TITLE: 'Help', URL: '/help' },
  FEEDBACK: { TITLE: 'Feedback', URL: '/feedback' },
  REFER_A_FRIEND: { TITLE: 'Refer A Friend', URL: '/refer-a-friend' },
  USER_PROFILE: { TITLE: 'Profile', URL: '/profile' },
  PRIVACY_POLICY: { TITLE: 'Privacy Policy', URL: '/privacy-policy' },
  TERMS_OF_USE: { TITLE: 'Terms of Use', URL: '/terms-of-use' },
  LEARN_MORE: { TITLE: 'Learn more', URL: '/learn-more' },
  ADD_FIRST_BILL: { TITLE: 'Add First Bill', URL: '/add-first-bill' },
}

export const SECONDARY_URL = {
  WELCOME: { TITLE: 'Welcome', URL: '/welcome' },
  LANDING_PAGE: { TITLE: 'Landing Page', URL: '/' },
  SUBSCRIPTION: { TITLE: 'Subscription', URL: '/subscription' },
}

export const ARROW_BACK_ROUTES = [
  DEFAULT_HEADER_URL.SIGN_UP.URL,
  DEFAULT_HEADER_URL.MARKETING.URL,
  DEFAULT_HEADER_URL.GOAL.URL,
  DEFAULT_HEADER_URL.CONNECT_BANK.URL,
]

export const PUBLIC_ROUTES = [
  DEFAULT_HEADER_URL.SIGN_UP.URL,
  DEFAULT_HEADER_URL.LOGIN.URL,
  DEFAULT_HEADER_URL.RESET_PASSWORD.URL,
  DEFAULT_HEADER_URL.CHANGE_PASSWORD.URL,
  DEFAULT_HEADER_URL.FORGOT_PASSWORD.URL,
  DEFAULT_HEADER_URL.EMAIL_SENT.URL,
  SECONDARY_URL.LANDING_PAGE.URL,
]
