import { NextApiRequest, NextApiResponse } from 'next'

// Services
import { goalControllers } from '@backend/controllers/goalControllers'

// Constants
import {
  SUCCESS_RESPONSE,
  CLIENT_ERROR_RESPONSE,
  SERVER_ERROR,
} from '@constants/index'

// Types
import { GoalListProps } from '@self-types/components/Table.props'

export default async function goalControlHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const reqData = req.body

  const { userId } = req.query as { userId: string }

  const { getUserGoal, addNewGoals, editGoal, deleteGoal } = goalControllers

  switch (req.method) {
    case 'GET': {
      const data = getUserGoal(userId)

      if (data) {
        return res.status(SUCCESS_RESPONSE.OK).json(data)
      }

      return res.status(SUCCESS_RESPONSE.OK).json([])
    }

    case 'POST': {
      const data: GoalListProps[] = addNewGoals(userId, reqData as string[])

      return res.status(SUCCESS_RESPONSE.CREATED).json(data)
    }

    case 'PUT': {
      const data = editGoal({ userId, ...reqData })

      if (data) {
        return res.status(SUCCESS_RESPONSE.CREATED).json(data)
      }

      return res
        .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
        .json({ message: SERVER_ERROR })
    }

    case 'DELETE': {
      const data = deleteGoal(reqData as string, userId)

      if (data) {
        return res.status(SUCCESS_RESPONSE.OK).send('Deleted')
      }

      return res
        .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
        .json({ message: SERVER_ERROR })
    }

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  return res
    .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
    .json({ message: SERVER_ERROR })
}
