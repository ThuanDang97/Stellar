// Styled
import styled from 'styled-components'

// Components
import { ViewStyled } from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

export const WrapperImage = styled(ViewStyled)`
  width: ${pxToRem(25)};
  height: ${pxToRem(25)};

  position: relative;
`
