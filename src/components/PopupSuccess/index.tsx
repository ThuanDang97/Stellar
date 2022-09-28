import { memo, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'styled-components'

// Props type
import { PopupSuccessProps } from '@self-types/components/PopupSuccess.props'

// Components
import { TextStyled, ViewStyled } from '@components/styled-components'
import { AnimatedPopupSuccess } from '@components/PopupSuccess/PopupSuccessStyled'
import Title from '@components/Title'
import Button from '@components/Button'

const PopupSuccess = ({
  isOpen,
  textContent,
  onClose,
  ...props
}: PopupSuccessProps) => {
  const theme = useTheme()

  useEffect(() => {
    const timerId = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timerId)
  }, [isOpen, onClose])

  return (
    <>
      {isOpen && (
        <AnimatedPopupSuccess
          position="fixed"
          bottom={props.bottom || theme.metrics.dimensions.md}
          left={props.left}
          display="flex"
          justifyContent="space-between"
          bgColor={theme.colors.firefly}
          borderRadius={theme.metrics.borderRadius.default}
          pLeft={theme.metrics.dimensions.base}
          maxWidth={400}
          data-testid="popup-success"
          right={theme.metrics.dimensions.md}
        >
          <ViewStyled
            display="flex"
            gap={theme.metrics.dimensions.base}
            justifyContent="space-between"
          >
            <Image
              width={theme.metrics.dimensions.lg}
              height={theme.metrics.dimensions.lg}
              src="/icons/check2-circle-light.svg"
            />
            <ViewStyled
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Title
                headingLevel="h3"
                textAlign="start"
                width={theme.metrics.width.full}
                fontSize={theme.typography.fontSize.lg}
                lineHeight={theme.typography.fontSize.lg}
                letterSpacing={theme.typography.letterSpacing.xxl}
                color={theme.colors.white}
                title="Success"
                fontFamily="AdobeCleanBold"
                pBottom={theme.metrics.dimensions.xs}
              />
              <TextStyled
                as="p"
                textAlign="start"
                width={theme.metrics.width.full}
                fontSize={theme.typography.fontSize.xss}
                lineHeight={theme.typography.fontSize.sm}
                color={theme.colors.silverLight}
                fontWeight={theme.typography.fontWeight.small}
                letterSpacing={theme.typography.letterSpacing.xxl}
              >
                {textContent}
              </TextStyled>
            </ViewStyled>
          </ViewStyled>
          <Button
            variant="dark"
            mBottom={theme.metrics.dimensions.lg}
            onClick={onClose}
            width={theme.metrics.dimensions.base}
            height={theme.metrics.dimensions.base}
            imgUrl="/icons/x-lg.svg"
          />
        </AnimatedPopupSuccess>
      )}
    </>
  )
}

export default memo(PopupSuccess)
