import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  SERVER_ERROR,
  SUCCESS_RESPONSE,
} from '@constants/index'

// Services
import { connectBankControllers } from '@backend/controllers/connectBankControllers'

// Types
import { BankNumberType } from '@self-types/components/AddBankAccount.props'

export default async function addBankAccountHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const bankAccount = req.body as BankNumberType
  const { userId } = req.query as { userId: string }

  const { addBankAccount, getUserBankAccount } = connectBankControllers

  switch (req.method) {
    case 'GET': {
      const data = getUserBankAccount(userId)

      if (data) {
        return res.status(SUCCESS_RESPONSE.OK).json(data)
      }

      return res
        .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
        .json({ message: SERVER_ERROR })
    }

    case 'POST': {
      const data = addBankAccount(userId, bankAccount)

      return res.status(SUCCESS_RESPONSE.CREATED).json(data)
    }

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res
        .status(CLIENT_ERROR_RESPONSE.METHOD_NOT_ALLOW)
        .end(`Method ${req.method} Not Allowed`)
  }

  return res
    .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
    .json({ message: SERVER_ERROR })
}
