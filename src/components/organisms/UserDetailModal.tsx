import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { User } from '../../types/api/User'

type Props = {
  isOpen: boolean
  onClose: () => void
  user: User | null
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="9">
          <VStack spacing="4">
            <FormControl>
              <FormLabel fontWeight="bold">User Name</FormLabel>
              <Input value={user?.username} readOnly />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Full Name</FormLabel>
              <Input value={user?.name} readOnly />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">E-Mail</FormLabel>
              <Input value={user?.email} readOnly />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="bold">Phone</FormLabel>
              <Input value={user?.phone} readOnly />
            </FormControl>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
