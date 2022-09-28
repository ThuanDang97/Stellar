// Components
import PlanFeature from '@components/PlanFeature/index'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Props type
import { PlanFeatureProps } from '@self-types/components/PlanFeature.props'

describe('Plan Feature Component', () => {
  const props: PlanFeatureProps = {
    type: 'normal',
    title: 'Plan Feature',
  }

  const customProps: PlanFeatureProps = {
    type: 'bold',
    title: 'Plan Feature',
  }

  test('Component Plan Feature should matches font normal to DOM Snapshot', () => {
    const { asFragment } = renderWithTheme(<PlanFeature {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('Component Plan Feature should matches font bold to DOM Snapshot', () => {
    const { asFragment } = renderWithTheme(<PlanFeature {...customProps} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
