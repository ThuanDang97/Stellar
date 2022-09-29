// Types
import { ICreditScore } from '@self-types/api'

// JSON data
import creditScores from '../../../tmp/data/creditScores.json'

export const getScoreProjection = (): ICreditScore[] => creditScores
