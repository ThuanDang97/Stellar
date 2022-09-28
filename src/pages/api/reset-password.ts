import { NextApiRequest, NextApiResponse } from 'next'

// Services
import { userControllers } from '@backend/controllers/userControllers'

// Constants
import { CLIENT_ERROR_RESPONSE, SUCCESS_RESPONSE } from '@constants/index'

export default async function resetPasswordHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { password, token } = req.body
  const { findExistedUser, resetPassword } = userControllers

  const currentUser = findExistedUser('userId', token)

  // Check if account exist and reset password
  if (currentUser) {
    resetPassword(password, currentUser)

    return res
      .status(SUCCESS_RESPONSE.OK)
      .json({ userId: currentUser.userId, email: currentUser.email })
  }

  return res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).send('Not found')
}
