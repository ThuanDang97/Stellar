export interface TextScoreProps {
  color: string
  text: string
}

export interface FicoScoreTypes {
  color: string
  text: string
  positionFicoScore?: string
  percentLineScore: number
}

export interface FicoScoreProps {
  isLocked: boolean
  currentFicoScore: number
  dateUpdated: string
  minScore: number
  maxScore: number
}
