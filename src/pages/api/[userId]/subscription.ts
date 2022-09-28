import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import { SUCCESS_RESPONSE } from '@constants/index'

// Services
import { selectSubscriptionPlan } from '@backend/controllers/subscriptionControllers'

// Types
import { SubscriptionPlan } from '@self-types/api'

export default async function selectSubscriptionHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const subscriptionPlan: SubscriptionPlan = req.body
  const { userId } = req.query as { userId: string }

  selectSubscriptionPlan(userId, subscriptionPlan)

  return res.status(SUCCESS_RESPONSE.CREATED).json({ userId, subscriptionPlan })
}
