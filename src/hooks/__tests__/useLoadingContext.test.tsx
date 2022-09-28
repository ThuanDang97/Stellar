import React, { useMemo } from 'react'
import { render, screen } from '@testing-library/react'

// Contexts
import { LoadingContext } from '@contexts/LoadingProvider'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'

// Types
import { ILoadingContext } from '@self-types/contexts/LoadingContext'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useMemo: jest.fn().mockReturnValue({
    loading: true,
    setLoading: jest.fn(),
  }),
}))

const LoadingContextTest = () => {
  const { setLoading, loading } = useLoadingContext()

  return (
    <>
      <h1>{loading ? 'loading' : 'not loading'}</h1>
      <button type="button" onClick={() => setLoading(false)}>
        Set loading
      </button>
    </>
  )
}

it('should get correct loading state', () => {
  const providerProps: ILoadingContext = useMemo(
    () => ({
      loading: true,
      setLoading: jest.fn(),
    }),
    [],
  )

  render(
    <LoadingContext.Provider value={providerProps}>
      <LoadingContextTest />
    </LoadingContext.Provider>,
  )

  expect(screen.getByRole('heading').textContent).toBe('loading')
})
