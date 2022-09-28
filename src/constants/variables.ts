import { TextScoreProps } from '@self-types/components/FicoScoreProps.props'
import Colors from '@themes/Colors'

export const SIZE_BUTTON = {
  DEFAULT: 'default',
  MEDIUM: 'medium',
  LARGE: 'large',
  NO_PADDING: 'noPadding',
}

export const VARIANT_BUTTON = {
  PRIMARY: 'primary',
  NO_BORDER: 'noBorder',
  DARK: 'dark',
  LIGHT: 'light',
  DANGER: 'danger',
  DISABLED: 'disabled',
  ICON: 'icon',
  WARNING: 'warning',
  HALF_CIRCLE: 'half-circle',
}

export const LIST_BILLER = [
  {
    id: 'b1',
    src: '/images/netflix.png',
    title: 'Netflix',
  },
  {
    id: 'b2',
    src: '/images/t-mobile.png',
    title: 'T-Mobile',
  },
  {
    id: 'b3',
    src: '/images/hulu.png',
    title: 'Hulu',
  },
  {
    id: 'b4',
    src: '/images/x-finity.png',
    title: 'Xfinity',
  },
  {
    id: 'b5',
    src: '/images/at-wireless.png',
    title: 'AT&T Wireless',
  },
  {
    id: 'b6',
    src: '/images/spotify.png',
    title: 'Spotify',
  },
]

export const LIST_GOAL = [
  {
    id: 'g1',
    url: '/icons/clock',
    title: 'Improve My \n Credit Score',
    activeText: 'Improve My \n Credit Score',
  },
  {
    id: 'g2',
    url: '/icons/build-wealth',
    title: 'Build \n Wealth',
    activeText: 'Pay My Bills \n In One Place',
  },
  {
    id: 'g3',
    url: '/icons/flag',
    title: 'Buy A Car',
    activeText: 'Buy A Car',
  },
  {
    id: 'g4',
    url: '/icons/job',
    title: 'Get A Job',
    activeText: 'Get A Job',
  },
  {
    id: 'g5',
    url: '/icons/house',
    title: 'Buy \n A Home',
    activeText: 'Buy \n A Home',
  },
  {
    id: 'g6',
    url: '/icons/rent',
    title: 'Rent \n A Home',
    activeText: 'Rent \n A Home',
  },
  {
    id: 'g7',
    url: '/icons/credit-card',
    title: 'Get A \n Credit Card',
    activeText: 'Get A \n Credit Card',
  },
  {
    id: 'g8',
    url: '/icons/insurance-rate',
    title: 'Get Better \n Insurance Rate',
    activeText: 'Get Better \n Insurance Rate',
  },
  {
    id: 'g9',
    url: '/icons/interest-rate',
    title: 'Get Better \n Interest Rates',
    activeText: 'Get Better \n Interest Rates',
  },
  {
    id: 'g10',
    url: '/icons/bill',
    title: 'Pay May Bills \n On Time',
    activeText: 'Improve \n My Finances',
  },
  {
    id: 'g11',
    url: '/icons/piggy-bank',
    title: 'Get A Loan',
    activeText: 'Get A Loan',
  },
  {
    id: 'g12',
    url: '/icons/business',
    title: 'Start \n A Business',
    activeText: 'Start \n A Business',
  },
]

export const LABEL_BOX = [
  { id: 'labelBox1', title: 'Podcast' },
  { id: 'labelBox2', title: 'Referral' },
  { id: 'labelBox3', title: 'Clubhouse' },
  { id: 'labelBox4', title: 'Pinterest' },
  { id: 'labelBox5', title: 'YouTube' },
  { id: 'labelBox6', title: 'Facebook' },
  { id: 'labelBox7', title: 'Online Ad' },
  { id: 'labelBox8', title: 'Wed Search' },
  { id: 'labelBox9', title: 'Instagram' },
  { id: 'labelBox10', title: 'TikTok' },
  { id: 'labelBox11', title: 'Other' },
]

export const STEPPER = [
  { id: 'signup', step: 'Sign Up' },
  { id: 'goal', step: 'Set Goals' },
  { id: 'connectbank', step: 'Connect Bank' },
]

export const FLEX_LIST_FEATURE = [
  { feature: 'Everything in Launch', isActive: true },
  { feature: 'Flexible Bill pay', isActive: true },
  { feature: 'All 3 Credit Reports', isActive: false },
  { feature: 'Credit Lock', isActive: false },
  { feature: 'Credit Alerts', isActive: false },
  { feature: 'Credit Score Factors', isActive: false },
  { feature: 'Debt Analysis', isActive: false },
]

export const LIST_LAUNCH_FEATURE = [
  { feature: 'Credit Builder Bill Pay', isActive: true },
  { feature: 'Credit Score Monitoring', isActive: false },
  { feature: 'Credit Score Simulator', isActive: false },
  { feature: 'Shopping Deals & Offers', isActive: false },
]

export const FORMAT_DATE = 'MM/DD/YYYY'

export const LOCAL_STORAGE_KEY = {
  USER_ID: 'userId',
  IS_TOKEN: 'is-token',
}

export const OPACITY_BLUR = 0.2
export const OPACITY_BOLD = 1

export const POOR_SCORE: TextScoreProps = {
  color: Colors.pomegranate,
  text: 'Poor',
}

export const FAIR_SCORE: TextScoreProps = {
  color: Colors.pizzaz,
  text: 'Fair',
}

export const GOOD_SCORE: TextScoreProps = {
  color: Colors.supernova,
  text: 'Good',
}

export const EXCELLENT_SCORE: TextScoreProps = {
  color: Colors.caribbeanGreen,
  text: 'Excellent',
}

export const MIN_AGE_OF_USER = 18

export const MAX_AGE_OF_USER = 150

export const FIRST_LETTER_NAME_OF_MONTHS = [
  'J',
  'F',
  'M',
  'A',
  'M',
  'J',
  'J',
  'A',
  'S',
  'O',
  'N',
  'D',
]

export const SSN_LENGTH = 9

export const COUNTRY_CODE = '+1'

export const LIST_PAYMENTS_BY_MONTH = [
  {
    value: '1',
    name: 'Pay Monthly',
  },
  {
    value: '3',
    name: 'Pay 3 months',
  },
  {
    value: '6',
    name: 'Pay 6 months',
  },
  {
    value: '12',
    name: 'Pay Annually',
  },
]

export const MONTH_ABBREVIATE = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const FREE_CREDIT_SCORE = 708
export const CREDIT_SCORE_LOCKED = 300

export const MENU_STATUS = {
  FADE_IN: 'fadeIn',
  FADE_OUT: 'fadeOut',
  NONE: 'none',
}

export const MAX_LENGTH_INPUT = 12
