import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
  USER_NOT_FOUND,
} from '@constants/index'

// Types
import { AddressUser, IUser } from '@self-types/api'

// Controllers
import { addNewAddress } from '@backend/controllers/addressControllers'

export default async function addressControlHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const reqData = req.body

  const { userId } = req.query as { userId: string }

  const user: IUser = addNewAddress(userId, reqData as AddressUser)

  const copiedUser: Partial<IUser> = { ...user }

  if (user) {
    delete copiedUser.password

    return res.status(SUCCESS_RESPONSE.CREATED).json(copiedUser)
  }

  return res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).send(USER_NOT_FOUND)
}
