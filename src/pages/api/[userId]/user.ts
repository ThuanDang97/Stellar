import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
  USER_NOT_FOUND,
} from '@constants/index'

// Services
import { userControllers } from '@backend/controllers/userControllers'

// Types
import { IUser } from '@self-types/api'

export default async function getCurrentUserInfoHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = req.query as { userId: string }

  const currentUser = userControllers.findExistedUser('userId', userId)

  const copiedUser: Partial<IUser> | undefined = { ...currentUser }

  if (currentUser) {
    delete copiedUser.password

    return res.status(SUCCESS_RESPONSE.CREATED).json(copiedUser)
  }

  return res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).send(USER_NOT_FOUND)
}
