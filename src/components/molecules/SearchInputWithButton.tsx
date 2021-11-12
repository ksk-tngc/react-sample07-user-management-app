import { SearchIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Input } from '@chakra-ui/react'
import { ChangeEvent, memo, VFC } from 'react'

type Props = {
  placeholder?: string
  onClickSearch?: () => void
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInputWithButton: VFC<Props> = memo((props) => {
  const {
    placeholder = '検索条件を入力',
    onClickSearch = undefined,
    value = '',
    onChange = undefined,
  } = props
  return (
    <Flex align="center">
      <Input
        placeholder={placeholder}
        bg="white"
        rounded="full"
        fontSize="sm"
        value={value}
        onChange={onChange}
      />
      <IconButton
        aria-label="検索ボタン"
        icon={<SearchIcon />}
        bg="gray.200"
        rounded="full"
        size="sm"
        ms="1"
        _hover={{ bg: 'gray.300' }}
        onClick={onClickSearch}
      />
    </Flex>
  )
})
