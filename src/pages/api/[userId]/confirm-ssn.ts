import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
  USER_NOT_FOUND,
} from '@constants/index'

// Types
import { IUser } from '@self-types/api'

// Controllers
import { addNewSSN } from '@backend/controllers/ssnControllers'

export default async function ssnControlHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const reqData = req.body

  const { userId } = req.query as { userId: string }

  const data: IUser = addNewSSN(userId, reqData as string)

  const copiedUser: Partial<IUser> = { ...data }

  if (data) {
    delete copiedUser.password

    return res.status(SUCCESS_RESPONSE.CREATED).json(copiedUser)
  }

  return res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).send(USER_NOT_FOUND)
}
