import { Button, Flex } from '@chakra-ui/react'
import { memo, ReactElement, useCallback, VFC } from 'react'
import { useHistory } from 'react-router-dom'

type Props = {
  icon: ReactElement
  label: string
  to: string
}

export const HeaderMenuItem: VFC<Props> = memo((props) => {
  const { icon, label, to } = props

  const history = useHistory()

  const onClickItem = useCallback(() => {
    history.push(to)
  }, [history, to])

  return (
    <Flex
      h="100%"
      align="center"
      color="gray.800"
      _hover={{ cursor: 'pointer', color: 'black' }}
      onClick={onClickItem}
    >
      <Button
        as="a"
        leftIcon={icon}
        variant="unstyled"
        display="flex"
        alignItems="center"
        fontWeight="normal"
      >
        {label}
      </Button>
    </Flex>
  )
})
