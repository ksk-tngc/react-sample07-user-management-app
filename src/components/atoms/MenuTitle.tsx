import { Heading } from '@chakra-ui/react'
import { memo, VFC } from 'react'

type Props = {
  label: string
}

export const MenuTitle: VFC<Props> = memo((props) => {
  const { label } = props

  return (
    <Heading as="h1" size="md">
      {label}
    </Heading>
  )
})
