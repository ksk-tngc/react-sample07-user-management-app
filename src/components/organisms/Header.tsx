import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, IconButton, useDisclosure } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import {
  BsFillDoorClosedFill,
  BsFillGearFill,
  BsFillPersonLinesFill,
} from 'react-icons/bs'
import { useAuth } from '../../hooks/useAuth'
import { HeaderMenuItem } from '../molecules/HeaderMenuItem'
import { HeaderMenuTitle } from '../molecules/HeaderMenuTitle'
import { ConfirmDialog } from '../organisms/ConfirmDialog'
import { DrawerMenu } from '../organisms/DrawerMenu'

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenLogoutConfirm,
    onOpen: onOpenLogoutConfirm,
    onClose: onCloseLogoutConfirm,
  } = useDisclosure()
  const { logout } = useAuth()

  return (
    <>
      <Flex
        as="nav"
        boxShadow="md"
        h="57px"
        align="center"
        ps={{ base: '2', md: '5' }}
      >
        {/* ハンバーガーアイコン */}
        <IconButton
          me="2"
          aria-label="ドロワーを開く"
          icon={<HamburgerIcon />}
          variant="unstyled"
          display={{ base: 'block', md: 'none' }}
          borderRadius="full"
          onClick={onOpen}
        />

        {/* ヘッダタイトル、ヘッダアイテム */}
        <HStack spacing="7">
          <HeaderMenuTitle label="ユーザ管理アプリ" to="/home" />
          <HStack display={{ base: 'none', md: 'flex' }} spacing="7">
            <HeaderMenuItem
              icon={<BsFillPersonLinesFill />}
              label="ユーザ一覧"
              to="/home/users"
            />
            <HeaderMenuItem
              icon={<BsFillGearFill />}
              label="設定"
              to="/home/setting"
            />
          </HStack>
        </HStack>
        <Box ms="auto" me="4" display={{ base: 'none', md: 'block' }}>
          <HeaderMenuItem
            icon={<BsFillDoorClosedFill />}
            label="ログアウト"
            onClick={onOpenLogoutConfirm}
          />
        </Box>
      </Flex>

      {/* ドロワー */}
      <DrawerMenu isOpen={isOpen} onClose={onClose} />

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
