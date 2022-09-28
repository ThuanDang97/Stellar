import React from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useTheme } from 'styled-components'

// Components
import EmailSent from '@components/EmailSent'
import {
  TextStyled,
  ViewStyled,
  WrapperContent,
} from '@components/styled-components'
import Image from 'next/image'
import LinkComponent from '@components/Link'
import Title from '@components/Title'

// Utils
import { pxToRem } from '@utils/theme'
import { findItemByValue } from '@utils/index'
import { getDataFromJSON } from '@utils/fileSystem'

// Constants
import { DEFAULT_HEADER_URL, LOCAL_STORAGE_KEY } from '@constants/index'

// Types
import { IUser } from '@self-types/api'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context

  const users: IUser[] = getDataFromJSON('users')

  const currentUser = findItemByValue({
    data: users,
    key: LOCAL_STORAGE_KEY.USER_ID as keyof IUser,
    value: params?.userId as string,
  })

  return {
    props: {
      email: currentUser?.email,
    },
  }
}

const EmailSentPage = ({
  email,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const theme = useTheme()
  const router = useRouter()
  const { userId } = router.query as { userId: string }

  return (
    <WrapperContent>
      <ViewStyled width={250} height={60} position="relative" margin="0 auto">
        <Image
          alt="stellar-logo"
          src="/images/stellar-dark.png"
          layout="fill"
          objectFit="contain"
        />
      </ViewStyled>

      <ViewStyled
        display="flex"
        flexWrap="wrap"
        mTop={theme.metrics.dimensions.xxxl}
      >
        <ViewStyled
          height={450}
          width="inherit"
          position="relative"
          data-testid="img"
          flex={`1 1 ${pxToRem(250)}`}
        >
          <Image
            alt="Jumping man image"
            src="/images/jumping-man.png"
            layout="fill"
            objectFit="contain"
          />
        </ViewStyled>
        <ViewStyled
          width="inherit"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={`1 1 ${pxToRem(250)}`}
        >
          <Title
            color={theme.colors.black}
            pBottom={theme.metrics.dimensions.md}
            fontFamily="AdobeCleanExtraBold"
            title="Email Sent!"
          />
          <EmailSent email={email} userId={userId} />
          <TextStyled
            color={theme.colors.silver}
            pTop={theme.metrics.dimensions.md}
          >
            Don’t have an account?
            <LinkComponent
              href={DEFAULT_HEADER_URL.SIGN_UP.URL}
              linkTypes="forgotPasswordLink"
              text="Signup Now"
              display="inline"
              mLeft={theme.metrics.dimensions.tiny}
            />
          </TextStyled>
        </ViewStyled>
      </ViewStyled>
    </WrapperContent>
  )
}

export default React.memo(EmailSentPage)
