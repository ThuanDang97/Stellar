import { TextProps } from './Text.props'

export interface TitleProps extends TextProps {
  title: string
  headingLevel?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  titleHover?: string
}
