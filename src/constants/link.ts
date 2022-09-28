// Themes
import { theme } from '@themes/index'

export const LINK_TYPES = {
  primaryLink: {
    color: theme.colors.white,
    bgColor: theme.colors.caribbeanGreen,
    borderRadius: theme.metrics.borderRadius.default,
  },
  secondaryLink: {
    color: theme.colors.white,
    bgColor: theme.colors.black,
    borderRadius: 0,
  },
  skipLink: {
    color: theme.colors.shark,
    bgColor: theme.colors.white,
    borderRadius: 0,
  },
  continueLink: {
    color: theme.colors.white,
    bgColor: theme.colors.pomegranate,
    borderRadius: theme.metrics.borderRadius.default,
  },
  unLockLink: {
    color: theme.colors.white,
    bgColor: theme.colors.shark,
    borderRadius: theme.metrics.borderRadius.default,
  },
  supportLink: {
    color: theme.colors.frenchRose,
    bgColor: theme.colors.white,
    borderRadius: 0,
  },
  loginLink: {
    color: theme.colors.black,
    bgColor: 'none',
    borderRadius: 0,
  },
  forgotPasswordLink: {
    color: theme.colors.shark,
    bgColor: 'none',
    borderRadius: 0,
  },
  supportLinkUnderline: {
    color: theme.colors.carnation,
    bgColor: 'none',
    borderRadius: 0,
  },
}
