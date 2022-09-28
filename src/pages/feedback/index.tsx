import { useTheme } from 'styled-components'

// Components
import Title from '@components/Title'
import { WrapperContent } from '@components/styled-components'

const FeedbackPage = () => {
  const theme = useTheme()

  return (
    <WrapperContent mTop={theme.metrics.dimensions.xxl}>
      <Title
        fontFamily="AdobeCleanExtraBold"
        fontSize={theme.typography.fontSize.xlg}
        letterSpacing={2}
        lineHeight={theme.typography.lineHeight.lg}
        color={theme.colors.shark}
        pTop={theme.metrics.dimensions.xs}
        title="Feedback Page"
      />
    </WrapperContent>
  )
}

export default FeedbackPage
