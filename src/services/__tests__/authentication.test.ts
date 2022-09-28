import mockAxios from 'axios'

// Services
import {
  loginUser,
  resetPassword,
  sendEmailForgotPwd,
  signUpUser,
} from '@services/authentication'

// Mocks
import { USER, USER_ID } from '@mocks/mockData'

// Constants
import {
  EMAIL_EXIST,
  INVALID_EMAIL,
  INVALID_EMAIL_OR_PASSWORD,
  SERVER_ERROR,
} from '@constants/index'

const mockPostAxios = jest.mocked(mockAxios.post)
const mockIsAxiosError = jest.mocked(mockAxios.isAxiosError)

afterEach(() => {
  jest.clearAllMocks()
})

/**
 * Sign up
 */
describe('signup correctly', () => {
  it('should call signup function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({
      data: USER,
    })

    const data = await signUpUser(USER)

    expect(data).toEqual(USER)
  })

  it('should call signup function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await signUpUser(USER)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  it('should call signup function correctly when it rejected with axios error', async () => {
    const messageError = { message: EMAIL_EXIST }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await signUpUser(USER)
    } catch (error) {
      expect(error).toEqual({ message: EMAIL_EXIST })
    }
  })
})

/**
 * Login
 */
describe('login correctly', () => {
  it('should call login function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({
      data: USER,
    })

    const data = await loginUser(USER)

    expect(data).toEqual(USER)
  })

  it('should call login function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    mockIsAxiosError.mockReturnValue(false)

    try {
      await loginUser(USER)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  it('should call login function correctly when it rejected with axios error', async () => {
    const messageError = { message: INVALID_EMAIL_OR_PASSWORD }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await loginUser(USER)
    } catch (error) {
      expect(error).toEqual(messageError)
    }
  })
})

/**
 * Forgot password
 */
describe('send email forgot password correctly', () => {
  it('should call send email forgot password function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({
      data: USER,
    })

    const data = await sendEmailForgotPwd('khanhtam304n@gmail.com')

    expect(data).toEqual(USER)
  })

  it('should call send email forgot password function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    mockIsAxiosError.mockReturnValue(false)

    try {
      await sendEmailForgotPwd('khanhtam304n@gmail.com')
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  it('should call send email forgot password function correctly when it rejected with axios error', async () => {
    const messageError = { message: INVALID_EMAIL }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await sendEmailForgotPwd('khanhtam304n@gmail.com')
    } catch (error) {
      expect(error).toEqual(messageError)
    }
  })
})

/**
 * Reset password
 */
describe('reset password correctly', () => {
  it('should call reset password function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({
      data: USER,
    })

    const data = await resetPassword(USER_ID, 'khanhtam304n@gmail.com')

    expect(data).toEqual(USER)
  })

  it('should call reset password function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    mockIsAxiosError.mockReturnValue(false)

    try {
      await resetPassword(USER_ID, 'khanhtam304n@gmail.com')
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  it('should call reset password function correctly when it rejected with axios error', async () => {
    const messageError = { message: INVALID_EMAIL }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await resetPassword(USER_ID, 'khanhtam304n@gmail.com')
    } catch (error) {
      expect(error).toEqual(messageError)
    }
  })
})
