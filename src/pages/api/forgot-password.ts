import { NextApiRequest, NextApiResponse } from 'next'

// Services
import { userControllers } from '@backend/controllers/userControllers'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  EMAIL_NOT_EXIST,
  SUCCESS_RESPONSE,
} from '@constants/index'

export default async function forgotPasswordHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.body

  const { findExistedUser } = userControllers

  const currentUser = findExistedUser('email', email)

  // Email not match
  if (!currentUser) {
    return res
      .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
      .json({ message: EMAIL_NOT_EXIST })
  }

  // Email match
  return res
    .status(SUCCESS_RESPONSE.OK)
    .json({ userId: currentUser.userId, email: currentUser.email })
}
