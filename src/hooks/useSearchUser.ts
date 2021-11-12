import { useCallback, useState } from 'react'
import { User } from '../types/api/User'

export const useSearchUser = () => {
  const [searchedUsers, setSearchedUsers] = useState<User[] | null>(null)

  /** ユーザ名又はフルネームを条件にユーザを検索 */
  const searchUsersByName = useCallback((name: string, allUsers: User[]) => {
    // 正規表現オブジェクト。フラグ"i"で大文字/小文字を区別しない
    const regex = new RegExp(name, 'i')
    // username 又は name が検索条件にマッチするユーザを抽出
    const result = allUsers.filter(
      (user) => regex.test(user.username) || regex.test(user.name)
    )
    setSearchedUsers(result)
  }, [])

  return { searchUsersByName, searchedUsers }
}
