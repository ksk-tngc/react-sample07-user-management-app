import { Flex, Text } from '@chakra-ui/react'
import { memo, VFC } from 'react'

export const Home: VFC = memo(() => {
  return (
    <>
      <Flex p="2">
        <Text fontWeight="bold">👋 Top page.</Text>
      </Flex>
    </>
  )
})
