import { render, screen } from '@testing-library/react'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

// Types
import { IAuthContext } from '@self-types/contexts/AuthContext'

// Contexts
import { AuthContext } from '@contexts/AuthProvider'

// Mocks
import { USER_ID } from '@mocks/mockData'

const AuthContextTest = () => {
  const { userId } = useAuthContext()

  return <h1>{userId}</h1>
}

it('use auth context hook return correct user id', () => {
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const authProviderProps: IAuthContext = {
    userId: USER_ID,
    setUserId: jest.fn(),
  }

  render(
    <AuthContext.Provider value={authProviderProps}>
      <AuthContextTest />
    </AuthContext.Provider>,
  )

  expect(screen.getByRole('heading').textContent).toBe(USER_ID)
})
