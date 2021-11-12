import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { memo, VFC } from 'react'
import {
  BsFillDoorClosedFill,
  BsFillGearFill,
  BsFillPersonLinesFill,
} from 'react-icons/bs'
import { useAuth } from '../../hooks/useAuth'
import { DrawerMenuItem } from '../molecules/DrawerMenuItem'
import { DrawerMenuTitle } from '../molecules/DrawerMenuTitle'
import { ConfirmDialog } from './ConfirmDialog'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const DrawerMenu: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props

  const {
    isOpen: isOpenLogoutConfirm,
    onOpen: onOpenLogoutConfirm,
    onClose: onCloseLogoutConfirm,
  } = useDisclosure()

  const { logout } = useAuth()

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerMenuTitle label="ユーザ管理アプリ" to="/home" />
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <VStack spacing="0">
              <DrawerMenuItem
                icon={<BsFillPersonLinesFill />}
                label="ユーザ一覧"
                to="/home/users"
              />
              <DrawerMenuItem
                icon={<BsFillGearFill />}
                label="設定"
                to="/home/setting"
              />
            </VStack>
          </DrawerBody>
          <Divider />
          <DrawerFooter py="4">
            <VStack spacing="0" w="100%">
              <DrawerMenuItem
                icon={<BsFillDoorClosedFill />}
                label="ログアウト"
                onClick={onOpenLogoutConfirm}
              />
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* ログアウト確認メッセージ */}
      <ConfirmDialog
        isOpen={isOpenLogoutConfirm}
        onClose={onCloseLogoutConfirm}
        onClickOK={logout}
        message="ログアウトします。よろしいですか？"
      />
    </>
  )
})
