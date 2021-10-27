import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import {LoginScreen} from '../components/login/LoginScreen'
import { DashBoardRoutes } from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";
// import { MarvelScreen } from '../components/marvel/MarvelScreen'

export const AppRouter = () => {

  const {user} = useContext(AuthContext)
  // console.log(user);
    return (
        <Router>
        <div>
          <Switch>
            <PublicRoute
            exact path = "/login" 
            component = {LoginScreen}
            isauthenticated={user.logged}/>
            <PrivateRouter 
              path = "/"
              component = {DashBoardRoutes}
              isAuthenticated={user.logged}
             />
          </Switch>
        </div>
      </Router>
  
    )
}
