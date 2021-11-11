import { Flex } from '@chakra-ui/react'
import { memo, useCallback, VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { MenuTitle } from '../atoms/MenuTitle'

type Props = {
  label: string
  to: string
}

export const DrawerMenuTitle: VFC<Props> = memo((props) => {
  const { label, to } = props

  const history = useHistory()

  const onClickHeader = useCallback(() => {
    history.push(to)
  }, [history, to])

  return (
    <Flex
      w="100%"
      align="center"
      _hover={{ cursor: 'pointer' }}
      onClick={onClickHeader}
    >
      <MenuTitle label={label} />
    </Flex>
  )
})
