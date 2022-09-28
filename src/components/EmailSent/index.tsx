import React, { memo } from 'react'

// Components
import { useTheme } from 'styled-components'
import { BoxShadowStyled, TextStyled } from '@components/styled-components'
import LinkComponent from '@components/Link'

// Constants
import { DEFAULT_HEADER_URL, PRIMARY_HEADER_URL } from '@constants/routes'

// Props type
import { EmailSentProps } from '@self-types/components/EmailSent.props'

const EmailSent = ({ email, userId }: EmailSentProps) => {
  const theme = useTheme()

  return (
    <BoxShadowStyled
      padding={theme.metrics.dimensions.md}
      width={theme.metrics.width.xxxl}
      height={300}
      shadowType="small"
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      data-testid="emailSentComponent"
    >
      <TextStyled as="p">We sent a reset link to your email:</TextStyled>
      {/* TODO: Replace with text only when integrate api */}
      <LinkComponent
        display="inline"
        href={{
          pathname: DEFAULT_HEADER_URL.RESET_PASSWORD.URL,
          query: { token: userId as string },
        }}
        text={email}
        linkTypes="supportLink"
        pTop={0}
        pBottom={0}
        color={theme.colors.blue}
        textDecoration="underline"
      />
      <TextStyled as="p" mTop={theme.metrics.dimensions.base}>
        {`Didn't get the email?`}
      </TextStyled>
      <TextStyled as="p" mBottom={theme.metrics.dimensions.md}>
        <TextStyled mRight={theme.metrics.dimensions.xs}>
          Try these tips from our
        </TextStyled>
        <LinkComponent
          display="inline"
          href={PRIMARY_HEADER_URL.HELP.URL}
          linkTypes="supportLink"
          text="Help & Support"
          pTop={theme.metrics.dimensions.tiny}
          pBottom={theme.metrics.dimensions.tiny}
        />
        .
      </TextStyled>
      <TextStyled as="p">
        <TextStyled mRight={theme.metrics.dimensions.xs}>
          Not your email address?
        </TextStyled>
        <LinkComponent
          display="inline"
          href={DEFAULT_HEADER_URL.FORGOT_PASSWORD.URL}
          linkTypes="supportLink"
          text="Try again"
          pTop={theme.metrics.dimensions.tiny}
          pBottom={theme.metrics.dimensions.tiny}
        />
        .
      </TextStyled>
    </BoxShadowStyled>
  )
}

export default memo(EmailSent)
