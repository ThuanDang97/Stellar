import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'

// Layouts
import PageLayout from '@layouts/PageLayout'

// Constants
import { ARROW_BACK_ROUTES, DEFAULT_HEADER_URL } from '@constants/index'

// Utils
import { getHeaderType, getPageTitle } from '@utils/index'

// Contexts
import AppProvider from '@contexts/index'

// Themes
import { swrFetcher } from '@services/index'
import { theme } from '../themes'
import '../../styles/globals.css'
import '../../styles/reset.css'

// Services

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter()

  const headerType = getHeaderType(route)

  return (
    <>
      <Head>
        <title>{getPageTitle(route)}</title>
        <link rel="icon" href="/images/logo.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, maximum-scale=1.0, initial-scale=1, width=device-width"
        />
        <meta name="description" content="Stellar - App" />
      </Head>

      <SWRConfig
        value={{
          fetcher: swrFetcher,
        }}
      >
        <ThemeProvider theme={theme}>
          <AppProvider>
            <PageLayout
              {...(headerType && { headerType })}
              {...(route === DEFAULT_HEADER_URL.SIGN_UP.URL && {
                hasLoginBtn: true,
              })}
              {...(ARROW_BACK_ROUTES.includes(route) && { hasArrow: true })}
            >
              <Component {...pageProps} />
            </PageLayout>
          </AppProvider>
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default MyApp
