import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

// component
import Metrics from '@themes/Metrics'
import PlaceholderItem from '../index'

// themes

describe('PlaceholderItem Component', () => {
  it('renders PlaceholderItem component', () => {
    const { container } = render(
      <PlaceholderItem
        type="rect"
        width={Metrics.width.base}
        height={Metrics.height.base}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
