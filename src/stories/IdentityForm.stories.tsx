import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Story } from '@storybook/react'

// Props types
import { IdentityFormProps } from '@self-types/components/IdentityForm.props'

// Utils
import { calculateAge, formatDate } from '@utils/index'

// Constants
import { MAX_AGE_OF_USER, MIN_AGE_OF_USER } from '@constants/variables'
import { AGE_UNDER_EIGHTEEN, INVALID_DOB } from '@constants/errorMessage'

// Components
import IdentityForm from '@components/IdentityForm'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/IdentityForm',
  component: IdentityForm,
}

const identityInit = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
}

const Template: Story<IdentityFormProps> = () => {
  const [identity, setIdentity] = useState(identityInit)
  const [error, setError] = useState('')
  const ageOfUser = identity.dateOfBirth && calculateAge(identity.dateOfBirth)

  const isEnableButton = !!(
    identity.firstName &&
    identity.lastName &&
    identity.dateOfBirth
  )

  /**
   * Handle change input value
   */
  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const inputValues = { [e.target.name]: e.target.value }

      setIdentity((prev) => ({
        ...prev,
        ...inputValues,
      }))
    },
    [],
  )

  /**
   * User chooses date of birth
   */
  const handleChangeDateOfBirth = useCallback((date: Date) => {
    const formatDayOfBirth = date && formatDate(date)

    setIdentity((prev) => ({
      ...prev,
      dateOfBirth: formatDayOfBirth,
    }))
    setError('')
  }, [])

  /**
   * Function submit form Identity
   */
  const handleSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()
      const checkAge =
        ageOfUser >= MIN_AGE_OF_USER && ageOfUser < MAX_AGE_OF_USER

      if (checkAge) {
        alert('Successfully !')
      } else if (ageOfUser && ageOfUser < MIN_AGE_OF_USER) {
        setError(AGE_UNDER_EIGHTEEN)
      } else {
        setError(INVALID_DOB)
      }
    },
    [ageOfUser],
  )

  return (
    <ViewStyled maxWidth={380}>
      <IdentityForm
        error={error}
        onChangeDayOfBirth={handleChangeDateOfBirth}
        onSubmit={handleSubmitForm}
        onChangeInput={handleChangeInput}
        isEnableButton={isEnableButton}
        firstName={identity.firstName}
        lastName={identity.lastName}
      />
    </ViewStyled>
  )
}

export const Identity = Template.bind({})
