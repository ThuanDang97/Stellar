import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      caribbeanGreen: string
      pomegranate: string
      frenchRose: string
      supernova: string
      cello: string
      shark: string
      silver: string
      iron: string
      foam: string
      pizzaz: string
      bridalHeath: string
      firefly: string
      mercury: string
      black: string
      gallery: string
      white: string
      spanishGray: string
      tangaroa: string
      backdrop: string
      silverLight: string
      blue: string
      ironLight: string
      rollingStone: string
      bigStone: string
      regentGray: string
      doveGray: string
      lightBlack: string
      shamrock: string
      tangerineYellow: string
      carnation: string
      caribbeanGreenOpacity: string
      silverLightOpacity: string
      cardinal: string
      yankeesBlue: string
      caribbeanGreenDark: string
    }
    typography: {
      fontWeight: {
        small: number
        base: number
        medium: number
        bold: number
      }
      fontSize: {
        xxxl: number
        xxl: number
        xl: number
        xlg: number
        default: number
        lg: number
        md: number
        common: number
        sm: number
        base: number
        xss: number
        xs: number
        xxs: number
      }
      letterSpacing: {
        xxl: number
        xl: number
        md: number
        custom: number
        sm: number
        input: number
        xs: number
        tiny: number
      }
      lineHeight: {
        xl: number
        lg: number
        xmd: number
        md: number
        sm: number
        xs: number
        tiny: number
      }
    }
    metrics: {
      dimensions: {
        base: number
        tiny: number
        xs: number
        sm: number
        md: number
        xmd: number
        lg: number
        xlg: number
        xl: number
        xxl: number
        xxxl: number
      }
      width: {
        base: number
        common: number
        full: string
        xs: number
        sm: number
        md: number
        xmd: number
        lg: number
        xl: number
        xxl: number
        xxxl: number
      }
      height: {
        default: number
        base: number
        tiny: number
        sm: number
      }
      borderRadius: {
        default: number
        base: number
        circle: number
      }
      borderWidth: {
        default: number
        base: number
        tiny: number
        sm: number
        md: number
        lg: number
        xl: number
      }
      images: {
        md: number
        base: number
        banner: number
      }
      icons: {
        base: number
        default: number
        sm: number
      }
      modal: {
        base: number
        default: number
        max: number
      }
      input: {
        base: number
        fontWeight: number
      }
      layout: {
        default: string
        maxWidth: number
      }
      breakPoints: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
        xxl: number
      }
      zIndex: {
        under: number
        low: number
        high: number
        top: number
      }
    }
    shadow: {
      small: string
      regular: string
      large: string
      badgeReadyShow: string
      badgeDefaultShow: string
      normal: string
    }
  }
}
