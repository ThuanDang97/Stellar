import { fireEvent, render, screen } from '@testing-library/react'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

// Contexts
import { AuthProvider } from '@contexts/AuthProvider'

// Mocks
import { USER_ID } from '@mocks/mockData'

jest.mock('@utils/localStorage', () => ({
  ...jest.requireActual('@utils/localStorage'),
  getLocalStorage: jest.fn(),
}))

const AuthProviderTest = () => {
  const { userId, setUserId } = useAuthContext()

  return (
    <>
      <h1>{typeof userId === 'string' ? userId : ''}</h1>
      <button type="button" onClick={() => setUserId(USER_ID)}>
        Set user id
      </button>
    </>
  )
}

it('Authprovider composes correct uid', () => {
  render(
    <AuthProvider>
      <AuthProviderTest />
    </AuthProvider>,
  )

  fireEvent.click(screen.getByRole('button'))

  expect(screen.getByRole('heading').textContent).toBe(USER_ID)
})
