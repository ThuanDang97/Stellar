import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import { SUCCESS_RESPONSE } from '@constants/index'

// Controllers
import { confirmDetail } from '@backend/controllers/confirmDetailControllers'

export default async function confirmDetailHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const reqData = req.body

  const { userId } = req.query as { userId: string }

  const data = confirmDetail(userId, reqData)

  return res.status(SUCCESS_RESPONSE.CREATED).json(data)
}
