import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import * as ROUTES from "./constants/Routes"

import "./styles/app.css"

// Pages
const Login = lazy(() => import("./pages/Login"))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
