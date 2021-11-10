import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/m-plus-rounded-1c'
import { Router } from './router/Router'
import { theme } from './theme/theme'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  )
}
