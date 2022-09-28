// Utils
import { pxToRem } from '@utils/theme'

const Shadow = {
  small: `rgba(100, 100, 111, 0.2) ${pxToRem(0)} ${pxToRem(7)} ${pxToRem(
    29,
  )} ${pxToRem(0)};`,
  regular: `rgba(0, 0, 0, 0.35) ${pxToRem(0)} ${pxToRem(5)} ${pxToRem(15)}`,
  large: `rgba(0, 0, 0, 0.25) ${pxToRem(0)} ${pxToRem(54)} ${pxToRem(55)},
  rgba(0, 0, 0, 0.12) ${pxToRem(0)} ${pxToRem(12)} ${pxToRem(30)},
  rgba(0, 0, 0, 0.12) ${pxToRem(0)} ${pxToRem(4)} ${pxToRem(6)},
  rgba(0, 0, 0, 0.17) ${pxToRem(0)} ${pxToRem(12)} ${pxToRem(13)},
  rgba(0, 0, 0, 0.09) ${pxToRem(0)} ${pxToRem(-3)} ${pxToRem(5)}`,
  badgeReadyShow: `#00D89D ${pxToRem(0)} ${pxToRem(0)} ${pxToRem(2)}`,
  badgeDefaultShow: `#FD8F00 ${pxToRem(0)} ${pxToRem(0)} ${pxToRem(2)}`,
  normal: `rgba(99, 99, 99, 0.2) ${pxToRem(0)} ${pxToRem(2)} ${pxToRem(
    8,
  )} ${pxToRem(0)}`,
}

export default Shadow
