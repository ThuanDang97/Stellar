import React from 'react'

// Mocks
import { USER, USER_ID } from '@mocks/mockData'

// Components
import EmailSent from '../components/EmailSent'

export default {
  title: 'Components/EmailSent',
  component: EmailSent,
}

export const EmailSentComponent = () => (
  <EmailSent email={USER.email} userId={USER_ID} />
)
