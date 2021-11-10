import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { PrimaryButton } from '../atoms/PrimaryButton'

export const Login: VFC = memo(() => {
  return (
    <Flex h="100vh" justify="center" align="center">
      <Box w="sm" bg="White" p="8" textAlign="center" borderRadius="xl" pb="9">
        <Stack spacing="4">
          <Heading as="h1" size="lg">
            ユーザ管理アプリ
          </Heading>
          <Divider />
          <Input placeholder="ユーザID" />
          <Input placeholder="パスワード" type="password" />
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
