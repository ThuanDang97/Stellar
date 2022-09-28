import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import { SUCCESS_RESPONSE } from '@constants/index'

// Controllers
import { getScoreProjection } from '@backend/controllers/scoreProjectionControllers'

export default async function getScoreProjectionHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const scores = getScoreProjection()

  if (scores) {
    return res.status(SUCCESS_RESPONSE.OK).json(scores)
  }

  return res.status(SUCCESS_RESPONSE.OK).json([])
}
