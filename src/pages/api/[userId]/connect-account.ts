import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import { SUCCESS_RESPONSE } from '@constants/index'

// Controllers
import { connectAccount } from '@backend/controllers/connectAccountControllers'

export default async function connectAccountHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { addedBillId, credentials } = req.body

  const { userId } = req.query as { userId: string }

  const data = connectAccount(userId, addedBillId, credentials)

  return res.status(SUCCESS_RESPONSE.CREATED).json(data)
}
