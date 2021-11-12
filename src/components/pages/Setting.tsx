import { Flex, Text } from '@chakra-ui/react'
import { memo, VFC } from 'react'

export const Setting: VFC = memo(() => {
  return (
    <>
      <Flex p="2">
        <Text fontWeight="bold">⚙️ Setting page ...</Text>
      </Flex>
    </>
  )
})
