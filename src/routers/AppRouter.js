import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Navbar} from '../components/ui/Navbar'
import {LoginScreen} from '../components/login/LoginScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'

export const AppRouter = () => {
    return (
        <Router>
        <div>
          <Navbar/>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path = "/login" component = {LoginScreen}/>
            <Route exact path = "/" component = {MarvelScreen}/>
          </Switch>
        </div>
      </Router>
  
    )
}
