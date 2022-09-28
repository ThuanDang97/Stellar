import axios from 'axios'

// Types
import { IUser } from '@self-types/api'
import { SignUpAccount } from '@self-types/components/SignUpForm.props'

// Constants
import { SERVER_ERROR, DEFAULT_HEADER_URL } from '@constants/index'

// Services
import { axiosInstance } from '.'

/**
 * Sign up
 */
export const signUpUser = async (
  credentials: SignUpAccount,
): Promise<IUser> => {
  try {
    const response = await axiosInstance.post(
      DEFAULT_HEADER_URL.SIGN_UP.URL,
      credentials,
    )

    return response.data as IUser
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}

/**
 * Login
 */
export const loginUser = async (
  credentials: Omit<SignUpAccount, 'userName'>,
): Promise<Omit<IUser, 'password' | 'userName'>> => {
  try {
    const response = await axiosInstance.post(
      DEFAULT_HEADER_URL.LOGIN.URL,
      credentials,
    )

    return response.data as Omit<IUser, 'password' | 'userName'>
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}

/**
 * Forgot password
 */
export const sendEmailForgotPwd = async (
  email: string,
): Promise<Omit<IUser, 'password' | 'userName'>> => {
  try {
    const response = await axiosInstance.post(
      DEFAULT_HEADER_URL.FORGOT_PASSWORD.URL,
      email,
    )

    return response.data as Omit<IUser, 'password' | 'userName'>
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}

/**
 * Reset password
 */
export const resetPassword = async (
  token: string,
  password: string,
): Promise<Omit<IUser, 'password' | 'userName'>> => {
  try {
    const response = await axiosInstance.post(
      DEFAULT_HEADER_URL.RESET_PASSWORD.URL,
      {
        token,
        password,
      },
    )

    return response.data as Omit<IUser, 'password' | 'userName'>
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}
