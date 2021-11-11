import {
  Divider,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { useLoginUser } from '../../hooks/useLoginUser'

export const Home: VFC = memo(() => {
  const { loginUser } = useLoginUser()

  return (
    <>
      <Text>ホーム</Text>
      <Divider my="4" />
      <Table variant="simple" size="sm" w="md">
        <TableCaption>ログインユーザ情報</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>ユーザ名</Th>
            <Th>フルネーム</Th>
            <Th>管理者</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{loginUser?.id}</Td>
            <Td>{loginUser?.username}</Td>
            <Td>{loginUser?.name}</Td>
            <Td>{loginUser?.isAdmin ? 'YES' : 'NO'}</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  )
})
