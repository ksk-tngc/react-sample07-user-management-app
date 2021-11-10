import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: '"M PLUS Rounded 1c"',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900',
      },
    },
  },
})
