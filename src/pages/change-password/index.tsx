import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import Image from 'next/image'
import ChangePasswordComponent from '@components/ChangePassword'
import {
  BoxShadowStyled,
  ViewStyled,
  WrapperContent,
} from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

const ChangePassword = () => {
  const theme = useTheme()

  return (
    <WrapperContent>
      <ViewStyled width={250} height={60} position="relative" margin="0 auto">
        <Image
          src="/images/stellar-dark.png"
          layout="fill"
          alt="stellar-logo"
          objectFit="contain"
        />
      </ViewStyled>

      <ViewStyled
        display="flex"
        flexWrap="wrap"
        mTop={theme.metrics.dimensions.xxxl}
      >
        <ViewStyled
          position="relative"
          height={400}
          flex={`1 1 ${pxToRem(250)}`}
        >
          <Image
            src="/images/jumping-man.png"
            layout="fill"
            alt="jumping-man"
            objectFit="contain"
          />
        </ViewStyled>

        <BoxShadowStyled flex={`1 1 ${pxToRem(250)}`}>
          <ChangePasswordComponent />
        </BoxShadowStyled>
      </ViewStyled>
    </WrapperContent>
  )
}

export default memo(ChangePassword)
