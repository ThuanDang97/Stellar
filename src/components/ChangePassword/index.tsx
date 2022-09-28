import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import { BoxShadowStyled, TextStyled } from '@components/styled-components'
import Title from '@components/Title'
import LinkComponent from '@components/Link'

// Utils
import { pxToRem } from '@utils/theme'

// Constants
import { DEFAULT_HEADER_URL } from '@constants/routes'

const ChangePassword = () => {
  const theme = useTheme()

  return (
    <BoxShadowStyled
      display="flex"
      flexDirection="column"
      width={theme.metrics.width.full}
      padding={`${pxToRem(theme.metrics.dimensions.lg)} ${pxToRem(
        theme.metrics.dimensions.xlg,
      )}`}
    >
      <Title title="Password changed!" color={theme.colors.black} />

      <TextStyled
        mTop={theme.metrics.dimensions.md}
        mBottom={theme.metrics.dimensions.xmd}
      >
        Your password has been changed successfully
      </TextStyled>

      <LinkComponent
        href={DEFAULT_HEADER_URL.LOGIN.URL}
        linkTypes="unLockLink"
        text="Okay"
        pTop={theme.metrics.dimensions.sm}
        pBottom={theme.metrics.dimensions.sm}
      />
    </BoxShadowStyled>
  )
}

export default memo(ChangePassword)
