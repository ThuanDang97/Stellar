import { FC, memo } from 'react'

// Props type
import { StepperProps } from '@self-types/components/Stepper.props'

// Themes
import { theme } from '@themes/index'

// Constants
import { STEPPER } from '@constants/index'

// Components
import { TextStyled, ViewStyled } from '@components/styled-components'
import { ArrowStyled } from './StepperStyled'

const Stepper: FC<StepperProps> = ({ currentPage = STEPPER[0].step }) => (
  <ViewStyled display="flex">
    {STEPPER.map((item) => (
      <ViewStyled display="flex" key={item.step}>
        <TextStyled
          fontWeight={theme.typography.fontWeight.base}
          color={
            currentPage === item.id ? theme.colors.cello : theme.colors.silver
          }
          data-testid="stepper-value"
        >
          {item.step}
        </TextStyled>
        {STEPPER[STEPPER.length - 1].step !== item.step && <ArrowStyled />}
      </ViewStyled>
    ))}
  </ViewStyled>
)

export default memo(Stepper)
