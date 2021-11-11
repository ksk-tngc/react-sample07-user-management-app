import { useCallback, useState } from 'react'
import { User } from '../types/api/User'

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const onSelectUser = useCallback((id: number, allUsers: User[]) => {
    const foundUser = allUsers.find((user) => user.id === id)
    setSelectedUser(foundUser!)
  }, [])

  return { onSelectUser, selectedUser }
}
