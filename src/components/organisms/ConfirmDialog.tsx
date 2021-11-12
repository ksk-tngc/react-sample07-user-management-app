import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  HStack,
} from '@chakra-ui/react'
import { memo, useRef, VFC } from 'react'
import { PrimaryButton } from '../atoms/PrimaryButton'

type Props = {
  isOpen: boolean
  onClose: () => void
  onClickOK: () => void
  message: string
}

export const ConfirmDialog: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onClickOK, message } = props

  const calcelRel = useRef<HTMLButtonElement>(null)

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={calcelRel}
      onClose={onClose}
      // isCentered={true}
      motionPreset="slideInBottom"
      size="sm"
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader></AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <HStack spacing="2">
              <Button ref={calcelRel} onClick={onClose}>
                Cancel
              </Button>
              <PrimaryButton onClick={onClickOK}>OK</PrimaryButton>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
})
