import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLoginUser } from '../hooks/useLoginUser'
import { useToastMessage } from '../hooks/useToastMessage'
import { User } from '../types/api/User'

export const useAuth = () => {
  // State
  const [isLoading, setIsLoading] = useState(false)

  // Custom Hooks
  const history = useHistory()
  const { showMessage } = useToastMessage()
  const { setLoginUser } = useLoginUser()

  // ログイン処理
  const login = useCallback(
    (id: string) => {
      setIsLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data.id.toString() === id) {
            setIsLoading(false)
            const isAdmin = res.data.id === 10 ? true : false // 仮の管理者ユーザ
            setLoginUser({ ...res.data, isAdmin }) // Contextに保存
            showMessage({ title: 'ログインしました', status: 'success' })
            history.push('/home')
          }
        })
        .catch(() => {
          setIsLoading(false)
          showMessage({ title: 'ユーザが見つかりません', status: 'error' })
        })
    },
    [history, setLoginUser, showMessage]
  )

  // ログアウト処理
  const logout = useCallback(() => {
    setLoginUser(null)
    showMessage({ title: 'ログアウトしました', status: 'success' })
    history.push('/')
  }, [history, setLoginUser, showMessage])

  return { login, isLoading, logout }
}
