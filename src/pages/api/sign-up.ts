import { NextApiRequest, NextApiResponse } from 'next'

// Services
import { userControllers } from '@backend/controllers/userControllers'

// Constants
import {
  EMAIL_EXIST,
  CLIENT_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
} from '@constants/index'

// Utils
import { generateUniqueId } from '@utils/index'

export default async function signUpHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { password, email, userName, countBill } = req.body

  const userId = generateUniqueId()

  // Check if email is used
  if (userControllers.findExistedUser('email', email)) {
    return res
      .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
      .json({ message: EMAIL_EXIST })
  }

  // Add new user
  userControllers.addNewUser({ userId, userName, email, password, countBill })

  // Return response of created status and user info
  return res
    .status(SUCCESS_RESPONSE.OK)
    .json({ userId, email, userName, countBill })
}
