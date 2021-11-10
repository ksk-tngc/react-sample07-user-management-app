import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { ChangeEvent, memo, useCallback, useState, VFC } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { PrimaryButton } from '../atoms/PrimaryButton'

export const Login: VFC = memo(() => {
  // State
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  // Custom Hooks
  const { login, isLoading } = useAuth()

  // InputのonChangeハンドラ
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  // ログインボタン
  const onClickLogin = useCallback(() => {
    login(userId)
  }, [login, userId])

  return (
    <Flex h="100vh" justify="center" align="center">
      <Box w="sm" bg="White" p="8" textAlign="center" borderRadius="xl" pb="9">
        <Stack spacing="4">
          <Heading as="h1" size="lg" color="gray.700">
            ユーザ管理アプリ
          </Heading>
          <Divider />
          <Input
            placeholder="ユーザID"
            value={userId}
            onChange={onChangeUserId}
          />
          <Input
            placeholder="パスワード"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <PrimaryButton
            onClick={onClickLogin}
            disabled={userId === '' || password === ''}
            isLoading={isLoading}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
