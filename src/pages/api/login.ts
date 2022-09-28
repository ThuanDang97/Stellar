import { NextApiRequest, NextApiResponse } from 'next'

// Services
import { userControllers } from '@backend/controllers/userControllers'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  EMAIL_NOT_EXIST,
  INVALID_PASSWORD,
  SUCCESS_RESPONSE,
} from '@constants/index'

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { password, email } = req.body

  const { findExistedUser, isMatchPassword } = userControllers

  const currentUser = findExistedUser('email', email)
  const matchPassword = currentUser && isMatchPassword(password, currentUser)

  // Email not match
  if (!currentUser) {
    return res
      .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
      .json({ field: 'email', message: EMAIL_NOT_EXIST })
  }

  // Email match, password not match
  if (currentUser && !matchPassword) {
    return res
      .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
      .json({ field: 'password', message: INVALID_PASSWORD })
  }

  // Email and password match
  return res
    .status(SUCCESS_RESPONSE.OK)
    .json({ userId: currentUser.userId, email: currentUser.email })
}
