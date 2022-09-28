import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  SERVER_ERROR,
  SUCCESS_RESPONSE,
} from '@constants/index'

// Controllers
import { addedBillControllers } from '@backend/controllers/addedBillControllers'

// Types
import { IBillPayload } from '@self-types/api'

// Utils
import { generateUniqueId } from '@utils/index'

export default async function addBillHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const reqBody = req.body
  const { userId } = req.query as { userId: string }

  const addedBillId = generateUniqueId()

  const { addNewBill, getAddedBills, deleteAddedBill } = addedBillControllers

  switch (req.method) {
    case 'GET': {
      const data = getAddedBills(userId)

      if (data) {
        return res.status(SUCCESS_RESPONSE.OK).json(data)
      }

      return res.status(SUCCESS_RESPONSE.OK).json([])
    }

    case 'POST': {
      const data = addNewBill(userId, addedBillId, reqBody as IBillPayload)

      return res.status(SUCCESS_RESPONSE.CREATED).json(data)
    }

    case 'DELETE': {
      const data = deleteAddedBill(reqBody as string, userId)

      if (data) {
        return res.status(SUCCESS_RESPONSE.OK).send('Deleted')
      }

      return res
        .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
        .json({ message: SERVER_ERROR })
    }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
      res
        .status(CLIENT_ERROR_RESPONSE.METHOD_NOT_ALLOW)
        .end(`Method ${req.method} Not Allowed`)
  }

  return res
    .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
    .json({ message: SERVER_ERROR })
}
