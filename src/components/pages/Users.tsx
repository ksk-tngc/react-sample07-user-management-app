import { Flex, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import { memo, useCallback, useEffect, VFC } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers'
import { useLoginUser } from '../../hooks/useLoginUser'
import { useSelectUser } from '../../hooks/useSelectUser'
import { UserCard } from '../organisms/UserCard'
import { UserDetailModal } from '../organisms/UserDetailModal'

export const Users: VFC = memo(() => {
  // Custom Hooks
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getAllUsers, allUsers, isLoading } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()
  const { loginUser } = useLoginUser()

  // ユーザ一覧取得
  useEffect(() => getAllUsers(), [getAllUsers])

  // ユーザカードクリック
  const onClickUserCard = useCallback(
    (id: number) => {
      onSelectUser(id, allUsers)
      onOpen()
    },
    [allUsers, onOpen, onSelectUser]
  )

  return (
    <>
      {isLoading ? (
        <Flex justify="center" align="center" h="100vh">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Wrap spacing="3" justify="center" pt="4">
          {allUsers.map((user, index) => (
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
