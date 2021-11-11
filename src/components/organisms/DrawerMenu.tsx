import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { BsFillGearFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { DrawerMenuItem } from '../molecules/DrawerMenuItem'
import { DrawerMenuTitle } from '../molecules/DrawerMenuTitle'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const DrawerMenu: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      placement="left"
      size="xs"
    >
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
      </DrawerContent>
    </Drawer>
  )
})
