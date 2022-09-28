import { NextApiRequest, NextApiResponse } from 'next'
import { CountryCode, Products } from 'plaid'

// Services
import { client } from '@services/index'
import { userControllers } from '@backend/controllers/userControllers'

// Constants
import {
  PLAID_COUNTRY_CODES,
  PLAID_PRODUCTS,
  CLIENT_ERROR_RESPONSE,
  SUCCESS_RESPONSE,
} from '@constants/index'

// Types
import { IUser } from '@self-types/api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userId = req.body

  const currentUser = userControllers.findExistedUser('userId', userId) as IUser

  try {
    const configs = {
      user: {
        client_user_id: userId,
      },
      client_name: currentUser.userName,
      products: PLAID_PRODUCTS as Products[],
      country_codes: PLAID_COUNTRY_CODES as CountryCode[],
      language: 'en',
    }

    const createTokenResponse = await client.linkTokenCreate(configs)

    res
      .status(SUCCESS_RESPONSE.CREATED)
      .json(createTokenResponse.data.link_token)
  } catch {
    res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).send('Fail')
  }
}
