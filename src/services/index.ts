import axios from 'axios'
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid'

// Constants
import {
  BASE_URL,
  PLAID_CLIENT_ID,
  PLAID_ENV,
  PLAID_SECRET,
  SERVER_ERROR,
} from '@constants/index'

// Create instance and define base url
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// Fetcher
export const swrFetcher = async (url: string) => {
  try {
    const response = await axiosInstance.get(url)

    return response.data
  } catch {
    throw SERVER_ERROR
  }
}

// Config client api for plaid
const configuration = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
      'PLAID-SECRET': PLAID_SECRET,
      'Plaid-Version': '2020-09-14',
    },
  },
})

export const client = new PlaidApi(configuration)

export const multiFetcher = async (...urlArr: string[]) =>
  Promise.allSettled(urlArr.map((url) => swrFetcher(url)))
