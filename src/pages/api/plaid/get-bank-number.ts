import { NextApiRequest, NextApiResponse } from 'next'

// Services
import { client } from '@services/index'
import { connectBankControllers } from '@backend/controllers/connectBankControllers'

// Constants
import { CLIENT_ERROR_RESPONSE, SUCCESS_RESPONSE } from '@constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { publicToken, userId, bankId } = req.body

  const { checkLinkedBank } = connectBankControllers

  try {
    if (checkLinkedBank(userId, bankId)) {
      return res
        .status(CLIENT_ERROR_RESPONSE.CONFLICT)
        .send('Already linked item')
    }

    const tokenResponse = await client.itemPublicTokenExchange({
      public_token: publicToken,
    })

    const ACCESS_TOKEN = tokenResponse.data.access_token

    const authResponse = await client.authGet({
      access_token: ACCESS_TOKEN,
    })

    return res
      .status(SUCCESS_RESPONSE.CREATED)
      .json(authResponse.data.numbers.ach[0].account)
  } catch {
    return res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).send('Fail')
  }
}
