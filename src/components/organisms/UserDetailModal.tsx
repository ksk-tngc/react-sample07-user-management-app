import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react'
import { memo, useCallback, useEffect, useRef, useState, VFC } from 'react'
import { User } from '../../types/api/User'
import { PrimaryButton } from '../atoms/PrimaryButton'

type Props = {
  isOpen: boolean
  onClose: () => void
  user: User | null
  isAdmin: boolean
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin } = props

  const [userName, setUserName] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const initialRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setUserName(user?.username ?? '')
    setFullName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onClickUpdate = useCallback(() => alert('更新'), [])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent ref={initialRef}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={isAdmin ? '2' : '9'}>
          <VStack spacing="4">
            <FormControl>
              <FormLabel fontWeight="bold">User Name</FormLabel>
              <Input
                value={userName}
                readOnly={!isAdmin}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Full Name</FormLabel>
              <Input
                value={fullName}
                readOnly={!isAdmin}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">E-Mail</FormLabel>
              <Input
                value={email}
                readOnly={!isAdmin}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Phone</FormLabel>
              <Input
                value={phone}
                readOnly={!isAdmin}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
          </VStack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})
