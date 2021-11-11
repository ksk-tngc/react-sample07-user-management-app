import { Button } from '@chakra-ui/react'
import { memo, ReactElement, VFC } from 'react'

type Props = {
  icon: ReactElement
  label: string
}

export const MenuItem: VFC<Props> = memo((props) => {
  const { icon, label } = props

  return (
    <Button
      as="a"
      leftIcon={icon}
      variant="unstyled"
      display="flex"
      alignItems="center"
      fontWeight="normal"
    >
      {label}
    </Button>
  )
})
