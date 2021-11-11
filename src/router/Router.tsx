import { memo, VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from '../components/pages/Login'
import { Page404 } from '../components/pages/Page404'
import { HeaderLayout } from '../components/templates/HeaderLayout'
import { HomeRoutes } from './HomeRoutes'

export const Router: VFC = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        {/* "/home"配下のルート */}
        <Route
          path="/home"
          render={(props) => (
            <Switch>
              {HomeRoutes.map((route, index) => (
                <Route
                  key={index}
                  exact={route.expect}
                  path={`${props.match.url}${route.path}`}
                >
                  <HeaderLayout>{route.component}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
})
