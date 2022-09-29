// Types
import { ICreditScore } from '@self-types/api'

// JSON data
import creditScores from '../../../json/creditScores.json'

export const getScoreProjection = (): ICreditScore[] => creditScores
