import { Home } from '../components/pages/Home'
import { Page404 } from '../components/pages/Page404'
import { Setting } from '../components/pages/Setting'
import { Users } from '../components/pages/Users'

// "/home"配下のルート設定
export const HomeRoutes = [
  {
    expect: true,
    path: '/',
    component: <Home />,
  },
  {
    expect: false,
    path: '/users',
    component: <Users />,
  },
  {
    expect: false,
    path: '/setting',
    component: <Setting />,
  },
  {
    expect: false,
    path: '/*',
    component: <Page404 />,
  },
]
