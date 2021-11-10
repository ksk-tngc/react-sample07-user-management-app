import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

type Props = {
  title: string
  status: 'success' | 'error' | 'warning' | 'info'
}

export const useToastMessage = () => {
  const toast = useToast()
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props
      toast({
        title,
        status,
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
    },
    [toast]
  )
  return { showMessage }
}
