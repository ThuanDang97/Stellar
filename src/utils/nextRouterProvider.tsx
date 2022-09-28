import { NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'

const createMockRouter = (router?: Partial<NextRouter>): NextRouter => ({
  basePath: '',
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  back: jest.fn(),
  beforePopState: jest.fn(),
  prefetch: jest.fn(),
  push: jest.fn(),
  reload: jest.fn(),
  replace: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false,
  ...router,
})

export const NextRouterProvider = ({
  children,
  router = { query: {} },
}: {
  children: React.ReactNode
  router: Partial<NextRouter>
}) => (
  <RouterContext.Provider value={createMockRouter(router)}>
    {children}
  </RouterContext.Provider>
)
