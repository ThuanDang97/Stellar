import React from 'react'
import { useTheme } from 'styled-components'

// Props Type
import { ErrorMessageProps } from '@self-types/components/ErrorMessage.props'

// Components
import Image from 'next/image'
import { ViewStyled } from '../styled-components/ViewStyled'
import { TextErrorStyled } from '../styled-components/TextStyled'
import { WrapperIconStyled } from '../Input/InputStyled'

const ErrorMessage = ({ error, mBottom, mTop }: ErrorMessageProps) => {
  const theme = useTheme()
  return (
    <ViewStyled
      display="flex"
      mTop={mTop || theme.metrics.dimensions.sm}
      gap={theme.metrics.dimensions.sm}
      data-testid="errorMessage"
      mBottom={mBottom}
    >
      <WrapperIconStyled>
        <Image
          layout="fill"
          src="/icons/exclamation-octagon-fill.svg"
          alt="icon error"
        />
      </WrapperIconStyled>
      <TextErrorStyled lineHeight={theme.metrics.dimensions.base}>
        {error}
      </TextErrorStyled>
    </ViewStyled>
  )
}

export default React.memo(ErrorMessage)
