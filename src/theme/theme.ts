import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: '"M PLUS Rounded 1c"',
    body: '"M PLUS Rounded 1c"',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.800',
      },
    },
  },
})
