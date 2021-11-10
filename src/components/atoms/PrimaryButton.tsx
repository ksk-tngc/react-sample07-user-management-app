import { Button } from '@chakra-ui/react'
import { memo, ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
  onClick: () => void
  disabled: boolean
  isLoading: boolean
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled, isLoading } = props

  return (
    <Button
      colorScheme="blue"
      onClick={onClick}
      disabled={disabled || isLoading}
      isLoading={isLoading}
    >
      {children}
    </Button>
  )
})
