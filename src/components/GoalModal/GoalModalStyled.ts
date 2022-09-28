import styled from 'styled-components'

import { ViewStyled } from '@components/styled-components'
// Themes
import Metrics from '@themes/Metrics'

// Utils
import { pxToRem } from '@utils/theme'

export const WrapperGoalListContent = styled(ViewStyled)`
  @media (max-width: ${pxToRem(Metrics.breakPoints.lg)}) {
    overflow-y: scroll;
    max-height: ${pxToRem(420)};
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.md)}) {
    max-height: ${pxToRem(280)};
  }
`
