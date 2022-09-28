import { NextApiRequest, NextApiResponse } from 'next'

// Controllers
import { getBills } from '@backend/controllers/billsControlers'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
  USER_NOT_FOUND,
} from '@constants/index'

export default async function handleGetBills(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = req.query as { userId: string }

  const data = getBills(userId)

  if (data) {
    return res.status(SUCCESS_RESPONSE.CREATED).json(data)
  }

  return res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).send(USER_NOT_FOUND)
}
