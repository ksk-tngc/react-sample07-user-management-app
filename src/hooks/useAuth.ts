import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useToastMessage } from '../hooks/useToastMessage'
import { User } from '../types/api/User'

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()
  const { showMessage } = useToastMessage()

  // ログイン処理
  const login = useCallback(
    (id: string) => {
      setIsLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data.id.toString() === id) {
            setIsLoading(false)
            showMessage({ title: 'ログインしました', status: 'success' })
            history.push('/home')
          }
        })
        .catch(() => {
          setIsLoading(false)
          showMessage({ title: 'ユーザが見つかりません', status: 'error' })
        })
    },
    [history, showMessage]
  )
  return { login, isLoading }
}
