import React from 'react'
import { useRouter } from 'next/router'
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
import {
  PRIMARY_HEADER_URL,
  ADD_FIRST_BILL_TITLE,
  ADD_FIRST_BILL_DESC,
} from '@constants/index'

const AddFirstBillPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { id } = router.query as { id: string }

  return (
    <WrapperContent
      mTop={theme.metrics.dimensions.xxl}
      maxWidth={600}
      display="flex"
      flexDirection="column"
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
        {ADD_FIRST_BILL_TITLE}
      </TitlePageStyled>
      <TextStyled
        maxWidth={520}
        mTop={theme.metrics.dimensions.sm}
        letterSpacing={theme.typography.letterSpacing.xxl}
      >
        {ADD_FIRST_BILL_DESC}
      </TextStyled>
      <ViewStyled height={450} width={380} position="relative">
        <Image
          alt="Jumping man image"
          src="/images/jumping-man-1.png"
          layout="fill"
          objectFit="contain"
        />
      </ViewStyled>
      <Link
        text="Link My First Bill"
        href={{
          pathname: PRIMARY_HEADER_URL.CONNECT_ACCOUNT.URL,
          query: { id },
        }}
        linkTypes="unLockLink"
        width={320}
      />
    </WrapperContent>
  )
}

export default AddFirstBillPage
