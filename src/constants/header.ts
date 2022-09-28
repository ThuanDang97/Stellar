import { PRIMARY_HEADER_URL } from './routes'

export const HEADER_TYPES = {
  DEFAULT: 'defaultHeader',
  PRIMARY: 'primaryHeader',
}

export const HEADER_NAVIGATION = [
  {
    id: '1',
    name: 'Help',
    url: PRIMARY_HEADER_URL.HELP.URL,
    isActive: false,
  },
  {
    id: '2',
    name: 'Feedback',
    url: PRIMARY_HEADER_URL.FEEDBACK.URL,
    isActive: false,
  },
  {
    id: '3',
    name: 'Refer A Friend',
    url: PRIMARY_HEADER_URL.REFER_A_FRIEND.URL,
    isActive: false,
  },
]
