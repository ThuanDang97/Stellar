import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

// Components
import AddressForm from '@components/AddressForm'
import { TextStyled, WrapperContent } from '@components/styled-components'
import { TitlePageStyled } from '@components/Title/TitleStyled'
import LinkComponent from '@components/Link'

// Constants
import {
  COUNTRY_CODE,
  DEFAULT_HEADER_URL,
  PHONE_ERROR_LENGTH,
  PRIMARY_HEADER_URL,
  REGEX_REMOVE_BRACKETS,
  SERVER_ERROR,
} from '@constants/index'

// Utils
import { formatPhoneNumber } from '@utils/index'

// Services
import { addAddress } from '@services/address'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'
import { useAuthContext } from '@hooks/useAuthContext'

const AddressPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { userId } = useAuthContext()
  const { setLoading } = useLoadingContext()

  // Define initial state
  const [errorMessage, setErrorMessage] = useState('')
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState('')
  const [addressAccount, setAddressAccount] = useState({
    address: '',
    phone: '',
  })

  // Handle change value confirm address form
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')
    const nameInput = e.target.name
    const valueInput = e.target.value
    setAddressAccount({ ...addressAccount, [nameInput]: valueInput })
    if (nameInput === 'phone') {
      setCurrentPhoneNumber(
        formatPhoneNumber(valueInput).replace(REGEX_REMOVE_BRACKETS, ''),
      )
      setAddressAccount((prev) => ({
        ...prev,
        phone: formatPhoneNumber(valueInput),
      }))
    }
  }

  // Handle submit confirm address when link bill
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    if (currentPhoneNumber.length !== 10) {
      setErrorMessage(PHONE_ERROR_LENGTH)
    } else {
      try {
        setLoading(true)
        addAddress(userId, {
          address: addressAccount.address,
          phoneNumber: COUNTRY_CODE + currentPhoneNumber,
        })

        router.push(PRIMARY_HEADER_URL.CONFIRM_SSN.URL)
      } catch {
        throw new Error(SERVER_ERROR)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <WrapperContent
      maxWidth={theme.metrics.width.xxxl}
      mTop={theme.metrics.dimensions.xxl}
    >
      <TitlePageStyled
        as="h1"
        pTop={theme.metrics.dimensions.xs}
        fontSize={theme.typography.fontSize.xlg}
        lineHeight={theme.typography.lineHeight.lg}
        color={theme.colors.shark}
        fontFamily="AdobeCleanExtraBold"
      >
        Where do you live?
      </TitlePageStyled>
      <TextStyled
        as="p"
        mTop={theme.metrics.dimensions.lg}
        mBottom={theme.metrics.dimensions.lg}
      >
        <TextStyled
          fontSize={theme.typography.fontSize.sm}
          lineHeight={theme.typography.fontSize.md}
          color={theme.colors.shark}
          pBottom={theme.metrics.dimensions.md}
          pTop={theme.metrics.dimensions.sm}
        >
          Your address is used to verify your identity.
        </TextStyled>
      </TextStyled>

      <AddressForm
        address={addressAccount.address}
        phone={addressAccount.phone}
        handleChangeValue={handleChangeValue}
        onSubmit={onSubmit}
        errorMessage={errorMessage}
      />
      <TextStyled as="p">
        <TextStyled
          color={theme.colors.frenchRose}
          fontSize={theme.typography.fontSize.xss}
        >
          This will not affect your credit score. We don’t store your sensitive
          information.
        </TextStyled>
        <LinkComponent
          href={DEFAULT_HEADER_URL.SIGN_UP.URL}
          linkTypes="supportLinkUnderline"
          textDecoration="underline"
          text="Learn more"
          display="inline"
          mLeft={theme.metrics.dimensions.xs}
          mRight={theme.metrics.dimensions.xs}
          fontWeight={800}
          fontSize={theme.typography.fontSize.base}
        />
        <TextStyled
          color={theme.colors.frenchRose}
          fontSize={theme.typography.fontSize.xss}
        >
          about our security.
        </TextStyled>
      </TextStyled>
    </WrapperContent>
  )
}

export default AddressPage
