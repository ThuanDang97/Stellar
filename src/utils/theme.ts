import { BASE_SIZE_PX } from '@constants/index'

export const pxToRem = (px: number): string => `${px / BASE_SIZE_PX}rem`
