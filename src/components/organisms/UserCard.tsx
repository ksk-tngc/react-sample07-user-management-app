import { Flex, Image, Text, VStack } from '@chakra-ui/react'
import { memo, VFC } from 'react'

type Props = {
  id: number
  userName: string
  fullName: string
  onClick: (id: number) => void
}

export const UserCard: VFC<Props> = memo((props) => {
  const { id, userName, fullName, onClick } = props

  return (
    <Flex
      w="240px"
      h="280px"
      bg="white"
      align="center"
      justify="center"
      rounded="xl"
      shadow="lg"
      _hover={{ cursor: 'pointer', opacity: '.8' }}
      onClick={() => onClick(id)}
    >
      <VStack spacing="1">
        <Image
          alt="プロフィール画像"
          // src="https://source.unsplash.com/random"
          src={`https://source.unsplash.com/random?${id}`}
          boxSize="170px"
          rounded="full"
          mb="2"
        />
        <Text fontWeight="bold" size="md">
          {userName}
        </Text>
        <Text>{fullName}</Text>
      </VStack>
    </Flex>
  )
})
