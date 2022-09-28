import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'

// Components
import Avatar from '@components/Avatar/index'

// Props type
import { AvatarProps } from '@self-types/components/Avatar.props'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Mocks
import { AVATAR_IMAGE, USER_FULL_NAME } from '@mocks/mockData'

describe('Avatar component', () => {
  it('Should renders not url image', () => {
    const props: AvatarProps = { fullName: USER_FULL_NAME }
    renderWithTheme(<Avatar {...props} />)
    expect(screen.getByTestId('avatarDefault')).toHaveTextContent('JW')
  })
  it('Should renders image correctly', () => {
    const props: AvatarProps = AVATAR_IMAGE
    renderWithTheme(<Avatar {...props} />)
    const imageAVatar = screen.getByTestId('imgAvatar')
    expect(imageAVatar).toHaveAttribute('src')
  })
  it('renders snapshot', () => {
    const props: AvatarProps = AVATAR_IMAGE
    const { asFragment } = renderWithTheme(<Avatar {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
