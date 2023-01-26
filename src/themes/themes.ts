import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    gray: {
      100: '#F2F2F2',
      200: '#D9D9D9',
      300: '#808080',
      400: '#333333',
      500: '#262626',
      600: '#1A1A1A',
      700: '#0D0D0D'
    },
    purple: {
      default: '#8284FA',
      dark: '#5E60CE'
    },
    blue: {
      default: '#4EA8DE',
      dark: '#1E6F9F'
    },
    red: {
      danger: '#E25858'
    }
  },
  fonts: {
    REGULAR: 'Inter_400Regular',
    BOLD: 'Inter_700Bold'
  },
  sizes: {
    14: 55
  }
})
