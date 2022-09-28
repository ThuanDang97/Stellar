import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'

// Props type
import { InputProps } from '@self-types/components/Input.props'

// Components
import {
  WrapperInputStyled,
  InputItemStyled,
  GroupLine,
  LineBottomInputStyled,
  PasswordStrength,
  WrapperIconStyled,
} from '@components/Input/InputStyled'
import Image from 'next/image'
import { TextStyled } from '@components/styled-components'

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  onBlur,
  statusPassword,
  isStraightLine,
  isLogin,
  iconUrl,
  name,
  error,
  mBottom,
  mTop,
  height,
  pBottom,
  lineTop,
  width,
  mRight,
  readOnly,
  maxLength,
  autocomplete,
  mTopIcon,
}: InputProps) => {
  const theme = useTheme()
  const url = `${iconUrl}${value && '-active'}.svg`
  const isSignUpPassword = type === 'password' && !isLogin && !error

  // Render icon input
  const renderInputIcon = useMemo(() => {
    return (
      iconUrl && (
        <WrapperIconStyled width={width} mRight={mRight} mTop={mTopIcon}>
          <Image src={url} alt="icon" layout="fill" />
        </WrapperIconStyled>
      )
    )
  }, [iconUrl, mRight, mTopIcon, url, width])

  return (
    <>
      <WrapperInputStyled
        lineTop={lineTop}
        height={height}
        pBottom={pBottom}
        mTop={mTop}
        mBottom={mBottom}
        data-testid="inputIcon"
        sizeLine={isSignUpPassword ? 0 : theme.metrics.borderWidth.tiny}
        color={error ? theme.colors.pomegranate : theme.colors.cello}
        lineColor={error ? theme.colors.pomegranate : theme.colors.regentGray}
        display={isSignUpPassword || isStraightLine ? 'none' : 'block'}
      >
        {renderInputIcon}
        {value && name === 'phone' ? (
          <TextStyled
            fontSize={theme.typography.fontSize.base}
            mRight={theme.metrics.dimensions.xs}
          >
            +1
          </TextStyled>
        ) : (
          ''
        )}
        <InputItemStyled
          data-testid="iconInput"
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          onBlur={onBlur}
          readOnly={readOnly}
          maxLength={maxLength}
          autoComplete={autocomplete}
        />
        {isSignUpPassword && (
          <PasswordStrength
            display="block"
            color={
              statusPassword === 'medium'
                ? theme.colors.tangerineYellow
                : statusPassword === 'strong'
                ? theme.colors.shamrock
                : theme.colors.pomegranate
            }
            data-testid="spanCheckPass"
          >
            {statusPassword}
          </PasswordStrength>
        )}
      </WrapperInputStyled>
      {isSignUpPassword && (
        <GroupLine data-testid="WrapperGroupLine">
          <LineBottomInputStyled
            level="weak"
            {...(statusPassword && { borderColor: theme.colors.pomegranate })}
          />
          <LineBottomInputStyled
            level="medium"
            {...(statusPassword && {
              borderColor:
                statusPassword !== 'weak'
                  ? theme.colors.pizzaz
                  : theme.colors.silver,
            })}
            mLeft={-3}
            mRight={-3}
          />
          <LineBottomInputStyled
            level="strong"
            {...(statusPassword && {
              borderColor:
                statusPassword === 'strong'
                  ? theme.colors.caribbeanGreen
                  : theme.colors.silver,
            })}
          />
        </GroupLine>
      )}
    </>
  )
}

export default React.memo(Input)
