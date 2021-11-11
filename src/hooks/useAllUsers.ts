import axios from 'axios'
import { useCallback, useState } from 'react'
import { useToastMessage } from '../hooks/useToastMessage'
import { User } from '../types/api/User'

export const useAllUsers = () => {
  // State
  const [isLoading, setIsLoading] = useState(false)
  const [allUsers, setAllUsers] = useState<User[]>([])

  // Custom Hooks
  const { showMessage } = useToastMessage()

  /** 全ユーザ取得 */
  const getAllUsers = useCallback(() => {
    setIsLoading(true)
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setIsLoading(false)
        setAllUsers(res.data)
      })
      .catch(() => {
        setIsLoading(false)
        showMessage({ title: 'データの取得に失敗しました', status: 'error' })
      })
  }, [showMessage])

  return { getAllUsers, isLoading, allUsers }
}
