import { ChakraProvider } from '@chakra-ui/react'
import { Login } from './components/pages/Login'
import { theme } from './theme/theme'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Login />
      </div>
    </ChakraProvider>
  )
}
