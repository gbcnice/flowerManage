import React, { Component } from 'react';
import AuthRoute from "@components/AuthRoute"
import LayoutCom from "./layout"
import {layoutRouteComponent} from "@router"
import {Switch,Route,Redirect,withRouter} from "react-router-dom"
import routeEach from "@utils/routeEach";
const pageRoute = routeEach(layoutRouteComponent);
console.log(pageRoute)
class App extends Component{
  render(){
    return (
      <Switch>
        <LayoutCom>
          <Redirect to="/home"/>
          {pageRoute}
        </LayoutCom>
      </Switch>
    )
  }
  
}


export default AuthRoute(App)