import {
  createContext,
  Dispatch,
  memo,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from 'react'
import { User } from '../types/api/User'

// Contextに格納するデータの型
type LoginUserContextType = {
  loginUser: User | null
  setLoginUser: Dispatch<SetStateAction<User | null>>
}

// Context
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
)

// Context.Provider
export const LoginUserProvider: VFC<{ children: ReactNode }> = memo((props) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<User | null>(null)
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
})
