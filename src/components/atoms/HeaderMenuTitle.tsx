import { Flex, Heading } from '@chakra-ui/react'
import { memo, useCallback, VFC } from 'react'
import { useHistory } from 'react-router-dom'

type Props = {
  label: string
  to: string
}

export const HeaderMenuTitle: VFC<Props> = memo((props) => {
  const { label, to } = props

  const history = useHistory()

  const onClickHeader = useCallback(() => {
    history.push(to)
  }, [history, to])

  return (
    <Flex
      ml="4"
      h="100%"
      align="center"
      _hover={{ cursor: 'pointer' }}
      onClick={onClickHeader}
    >
      <Heading as="h1" size="md">
        {label}
      </Heading>
    </Flex>
  )
})
