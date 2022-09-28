import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import { CLIENT_ERROR_RESPONSE, SUCCESS_RESPONSE } from '@constants/index'

// Services
import {
  addNewMarketings,
  findExistedUserMarketings,
} from '@backend/controllers/marketingController'

export default async function MarketingControlHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const reqData = req.body

  const { userId } = req.query as { userId: string }

  switch (req.method) {
    case 'GET': {
      try {
        const data = findExistedUserMarketings(userId)
        if (data) {
          return res.status(SUCCESS_RESPONSE.OK).json(data)
        }
        return res.status(SUCCESS_RESPONSE.OK).json({ userId, marketings: [] })
      } catch (error) {
        return res.status(CLIENT_ERROR_RESPONSE.BAD_REQUEST)
      }
    }

    case 'POST': {
      try {
        const data = addNewMarketings(userId, reqData as string[])

        return res.status(SUCCESS_RESPONSE.CREATED).json(data)
      } catch (error) {
        return res.status(CLIENT_ERROR_RESPONSE.BAD_REQUEST)
      }
    }

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
