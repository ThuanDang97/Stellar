import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

// Contexts
import { LoadingProvider } from '@contexts/LoadingProvider'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'

const LoadingProviderTest = () => {
  const { setLoading, loading } = useLoadingContext()

  return (
    <>
      <h1>{loading ? 'loading' : 'Not loading'}</h1>
      <button type="button" onClick={() => setLoading(true)}>
        Set loading
      </button>
    </>
  )
}

it('LoadingProvider should work correctly', () => {
  render(
    <LoadingProvider>
      <LoadingProviderTest />
    </LoadingProvider>,
  )

  fireEvent.click(screen.getByRole('button'))

  expect(screen.getByRole('heading').textContent).toBe('loading')
})
