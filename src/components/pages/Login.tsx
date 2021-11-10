import { Text } from '@chakra-ui/react'
import { memo, VFC } from 'react'

export const Login: VFC = memo(() => {
  return (
    <>
      <Text fontWeight="bold">ログインページ</Text>
      <Text>Font Test</Text>
      <Text>あいうえお</Text>
    </>
  )
})
