import {
  Center,
  Flex,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers'
import { useLoginUser } from '../../hooks/useLoginUser'
import { useSearchUser } from '../../hooks/useSearchUser'
import { useSelectUser } from '../../hooks/useSelectUser'
import { SearchInputWithButton } from '../molecules/SearchInputWithButton'
import { UserCard } from '../organisms/UserCard'
import { UserDetailModal } from '../organisms/UserDetailModal'

export const Users: VFC = memo(() => {
  // State
  const [searchName, setSearchName] = useState('')

  // Custom Hooks
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getAllUsers, allUsers, isLoading } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()
  const { loginUser } = useLoginUser()
  const { searchUsersByName, searchedUsers } = useSearchUser()

  // ユーザ一覧取得（画面初期表示時）
  useEffect(() => {
    getAllUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ユーザカードクリック
  const onClickUserCard = useCallback(
    (id: number) => {
      onSelectUser(id, allUsers)
      onOpen()
    },
    [allUsers, onOpen, onSelectUser]
  )

  // 検索ボタン
  const onClickSearch = useCallback(() => {
    searchUsersByName(searchName, allUsers)
  }, [allUsers, searchName, searchUsersByName])

  return (
    <>
      {isLoading ? (
        <Flex justify="center" align="center" h="100vh">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          {/* 検索テキストボックス */}
          <Center my="4">
            <SearchInputWithButton
              placeholder="名前で検索"
              onClickSearch={onClickSearch}
              value={searchName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchName(e.target.value)
              }
            />
          </Center>

          {/* ユーザ一覧 */}
          <Wrap spacing="3" justify="center" pt="4">
            {(searchedUsers || allUsers).map((user, index) => (
              <WrapItem key={index}>
                <UserCard
                  id={user.id}
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUserCard}
                />
              </WrapItem>
            ))}
          </Wrap>
        </>
      )}

      {/* ユーザ詳細モーダル */}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        isAdmin={loginUser?.isAdmin ?? false}
      />
    </>
  )
})
