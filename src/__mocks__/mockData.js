export const TOOLTIP_LOREM =
  'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

export const SELECT_OPTIONS = [
  { value: '1', name: 'Pay monthly' },
  { value: '3', name: 'Pay 3 monthly' },
  { value: '6', name: 'Pay 6 monthly' },
  { value: '12', name: 'Pay annually' },
]

export const USER_FULL_NAME = 'John Wick'

export const AVATAR_DEFAULT = {
  firstName: 'John',
  lastName: 'Wick',
}

export const AVATAR_IMAGE = {
  imageUrl: 'https://picsum.photos/20',
}

export const NETFLIX_REPORT = {
  name: 'netflix',
  period: 'report monthly',
}

export const GOAL_ITEM = {
  title: 'Improve My Credit Score',
  iconUrl: '/icons/piggy-bank',
}

export const BANK_NUMBER = '123456789111'

export const BANK_NAME = 'Chase'

export const INPUT_VALUES = {
  email: 'test@gmail.com',
  text: 'example',
  password: 'example1password',
  image:
    'data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e',
}

export const MEDIA_IMAGES = {
  netflix: '/images/netflix.png',
  hulu: '/images/hulu.png',
}

export const ADD_BILL_LIST = [
  {
    id: '1',
    description: 'Netflix',
    amount: 50,
    buttonControl: '',
    imageUrl: MEDIA_IMAGES.netflix,
    created: 121212121,
  },
  {
    id: '2',
    description: 'Holo',
    amount: 77,
    buttonControl: '',
    imageUrl: MEDIA_IMAGES.hulu,
    created: 121212121,
  },
]

export const MY_GOALS = [
  {
    id: '1',
    goal: 'Buy a car',
    scoreNeeded: 703,
    pointNeeded: 'READY',
    imageUrl: MEDIA_IMAGES.netflix,
    created: 121212121,
  },
  {
    id: '2',
    goal: 'Buy a house',
    scoreNeeded: 720,
    pointNeeded: '23 PTS AWAY',
    imageUrl: MEDIA_IMAGES.hulu,
    created: 3434543645,
  },
]

export const LINKED_BILL_LIST = [
  {
    id: '1',
    description: 'Netflix',
    amount: 50,
    draftDate: '1st',
    status: 'Unpaid',
    imageUrl: MEDIA_IMAGES.netflix,
    created: 121212121,
  },
  {
    id: '2',
    description: 'Hulu',
    amount: 32,
    draftDate: '4th',
    status: 'Paid',
    imageUrl: MEDIA_IMAGES.hulu,
    created: 121212121,
  },
]

export const EXITS_EMAIL = 'thanh@endurance.com'

export const NUMBER_BANK = [
  {
    id: '1',
    bankNumber: '12435324234',
    bankName: 'Chase',
  },
]

export const ACCOUNT_LOGIN = [
  {
    userId: '1',
    email: 'khanhtam304n@gmail.com',
    password: 'Khanhtam@123',
  },
  {
    userId: '2',
    email: 'khanhtam3041n@gmail.com',
    password: 'Khanhtam@123',
  },
]

export const USER = {
  userId: '4',
  userName: 'Khanh Tam',
  email: 'khanhtam304n@gmail.com',
  password: 'Khanhtam@123',
}

export const GOAL = ['g1', 'g2']

export const MARKETING = ['m1', 'm2']

export const USER_ID = '123'

export const DATE_TIMER = new Date('08/28/2022')

export const USER_GOAL = { userId: USER_ID, goals: GOAL }

export const USER_MARKETING = { userId: USER_ID, goals: MARKETING }

export const ADDRESS = {
  address: '123 street',
  phone: '1231231231',
}

export const SSN_NUMBER = '123123123'

export const SUBSCRIPTION_PLAN = 'flex'

export const USER_SUBSCRIPTION_PLAN = {
  userId: USER_ID,
  subscriptionPlan: SUBSCRIPTION_PLAN,
}

export const CHART_SCORE = {
  data: [
    { month: 'M', score: 720 },
    { month: 'A', score: 740 },
    { month: 'M', score: 768 },
    { month: 'J', score: 785 },
    { month: 'J', score: 810 },
    { month: 'A', score: 830 },
  ],
}

export const LINK_TOKEN = 'sand-box-123'

export const BANK_ID = 'id_45'

export const BANK_INFO = {
  id: BANK_ID,
  bankNumber: BANK_NUMBER,
  bankName: BANK_NAME,
}
export const FICO_DATE_UPDATE = 'Last Updated Aug, 12, 2021'

export const NOTIFICATIONS = [
  {
    id: '1',
    title: 'Credit Score Update',
    desc: 'Your credit score increased by...',
    dateTime: '1 hours',
    isCheck: false,
  },
  {
    id: '2',
    title: 'Bill Pay',
    desc: 'We noticed you missed a payment...',
    dateTime: '3 days ago',
    isCheck: false,
  },
  {
    id: '3',
    title: 'Offer',
    desc: 'Look like you may quality for...',
    dateTime: '10 days ago',
    isCheck: false,
  },
  {
    id: '4',
    title: 'Offer',
    desc: 'Look like you may quality for offer',
    dateTime: '11 days ago',
    isCheck: false,
  },
]

export const APPLICATION_INFO = {
  title: 'Netflix',
  image: '/images/netflix.png',
}

export const APPLICATION_CONNECT_ACCOUNT = {
  userId: '1',
  email: 'khanhtam304n@gmail.com',
  password: 'Khanhtam@123',
}

// Min score: 300 - Max score 850
export const FICO_SCORE = 500

export const IDENTITY = {
  firstName: 'John',
  lastName: 'Wick',
  dateOfBirth: '02/02/2000',
  ssn: 123123123,
}

export const SSN_USER = {
  userId: USER_ID,
  ssn: SSN_NUMBER,
}

export const USER_IDENTITY = {
  userId: USER_ID,
  identity: IDENTITY,
}

export const ADDRESS_USER = {
  address: '604 Nui Thanh',
  phoneNumber: '+10949328492',
}

export const FICO_UNLOCK_SCORE = 708

export const LIST_BANKS_NUMBER = [
  { id: 'Chase', bankNumber: '423432432423232' },
  { id: 'Bank of America', bankNumber: '111122223333000' },
  { id: 'CitiBank Online', bankNumber: '111122223333111' },
]

export const INFO_PAYMENTS = {
  id: '123',
  money: '15.99',
  bankName: 'Chase',
  payDate: new Date(),
  numberPaymentsMonth: '3',
  appInfo: {
    title: 'Netflix',
    image: '/images/netflix.png',
  },
  status: 'UNPAID',
}

export const BILL_INFO = {
  title: 'Netflix',
  amount: 10,
}

export const ADDED_BILL_ID = '1234'

export const USER_DETAIL = {
  id: '123',
  amount: 10,
  draftDate: 31,
  bankNumber: BANK_NUMBER,
}

export const EDIT_LINK_BILL = {
  id: '123',
  amount: 10,
}
