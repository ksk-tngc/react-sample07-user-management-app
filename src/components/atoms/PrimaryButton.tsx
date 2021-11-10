import { Button } from '@chakra-ui/react'
import { memo, ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props

  return <Button colorScheme="blue">{children}</Button>
})
