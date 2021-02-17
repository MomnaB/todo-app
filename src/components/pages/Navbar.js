import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './Posts'
import Home from './Home';
// import Material from './Material'

function Navbar() {
    return (
        <Router>
<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to ="/">Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Posts">
            <Posts/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

        </Router>
    )
}

export default Navbar
