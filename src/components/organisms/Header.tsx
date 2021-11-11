import { Flex, HStack } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { BsFillGearFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { HeaderMenuItem } from '../atoms/HeaderMenuItem'
import { HeaderMenuTitle } from '../atoms/HeaderMenuTitle'

export const Header: VFC = memo(() => {
  return (
    <Flex as="nav" boxShadow="lg" h="52px">
      <HStack spacing="7">
        <HeaderMenuTitle label="ユーザ管理アプリ" to="/home" />
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
    </Flex>
  )
})
