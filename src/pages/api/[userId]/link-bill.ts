import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  SERVER_ERROR,
  SUCCESS_RESPONSE,
} from '@constants/index'

// Controllers
import { linkedBillControllers } from '@backend/controllers/linkedBillControllers'

export default async function linkBillHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const payload = req.body
  const { userId } = req.query as { userId: string }

  const { deleteLinkedBill, editLinkedBill, getLinkedBills } =
    linkedBillControllers

  switch (req.method) {
    case 'GET': {
      const data = getLinkedBills(userId)

      if (data) {
        return res.status(SUCCESS_RESPONSE.OK).json(data)
      }

      return res.status(SUCCESS_RESPONSE.OK).json([])
    }

    case 'PUT': {
      const data = editLinkedBill(userId, payload)

      return res.status(SUCCESS_RESPONSE.CREATED).json(data)
    }

    case 'DELETE': {
      deleteLinkedBill(userId, payload)

      return res.status(SUCCESS_RESPONSE.OK).send('Deleted')
    }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res
        .status(CLIENT_ERROR_RESPONSE.METHOD_NOT_ALLOW)
        .end(`Method ${req.method} Not Allowed`)
  }

  return res
    .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
    .json({ message: SERVER_ERROR })
}
