import React from 'react'
import { useTheme } from 'styled-components'

// Components
import Image from 'next/image'
import Link from '@components/Link'
import { TitlePageStyled } from '@components/Title/TitleStyled'
import {
  TextStyled,
  ViewStyled,
  WrapperContent,
} from '@components/styled-components'

// Constants
import { PRIMARY_HEADER_URL } from '@constants/index'

const FreeCreditScore = () => {
  const theme = useTheme()

  return (
    <WrapperContent
      display="flex"
      flexDirection="column"
      mTop={theme.metrics.dimensions.xxl}
    >
      <TitlePageStyled
        as="h1"
        fontFamily="AdobeCleanExtraBold"
        fontSize={theme.typography.fontSize.xlg}
        letterSpacing={2}
        lineHeight={theme.typography.lineHeight.lg}
        color={theme.colors.shark}
        pTop={theme.metrics.dimensions.xs}
      >
        Get your free credit score
      </TitlePageStyled>

      <TextStyled
        mTop={theme.metrics.dimensions.sm}
        letterSpacing={theme.typography.letterSpacing.xxl}
      >
        This will not impact your score and only takes a minute to complete.
      </TextStyled>

      <ViewStyled height={450} width="inherit" position="relative">
        <Image
          alt="Jumping man image"
          src="/images/jumping-man.png"
          layout="fill"
          objectFit="contain"
        />
      </ViewStyled>

      <Link
        text="Get My Score"
        href={PRIMARY_HEADER_URL.CONFIRM_IDENTITY.URL}
        linkTypes="unLockLink"
        width={320}
      />
    </WrapperContent>
  )
}

export default FreeCreditScore
