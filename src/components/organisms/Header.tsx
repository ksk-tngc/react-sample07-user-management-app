import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, HStack, IconButton, useDisclosure } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { BsFillGearFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { HeaderMenuItem } from '../molecules/HeaderMenuItem'
import { HeaderMenuTitle } from '../molecules/HeaderMenuTitle'
import { DrawerMenu } from '../organisms/DrawerMenu'

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        as="nav"
        boxShadow="lg"
        h="57px"
        align="center"
        ps={{ base: '2', md: '5' }}
      >
        {/* ハンバーガーアイコン */}
        <IconButton
          me="1"
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
      </Flex>

      {/* ドロワー */}
      <DrawerMenu isOpen={isOpen} onClose={onClose} />
    </>
  )
})
