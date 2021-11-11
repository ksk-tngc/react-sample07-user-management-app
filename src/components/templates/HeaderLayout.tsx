import { Box } from '@chakra-ui/react'
import { memo, ReactNode, VFC } from 'react'
import { Header } from '../organisms/Header'

type Props = {
  children: ReactNode
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props
  return (
    <>
      <Header />
      <Box p="4">{children}</Box>
    </>
  )
})
