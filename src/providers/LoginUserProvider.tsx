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

// ログインユーザの型
type LoginUserType = User & { isAdmin: boolean }

// Contextに格納するデータの型
type LoginUserContextType = {
  loginUser: LoginUserType | null
  setLoginUser: Dispatch<SetStateAction<LoginUserType | null>>
}

// Context
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
)

// Context.Provider
export const LoginUserProvider: VFC<{ children: ReactNode }> = memo((props) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<LoginUserType | null>(null)
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
})
