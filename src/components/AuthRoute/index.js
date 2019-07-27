import React, { Component } from 'react'
import store from "@store"
import {Redirect} from "react-router-dom"
export default (WrapperComponent)=> {
    return class extends Component {
        constructor(){
            super()
            this.state = store.getState()
        }
        render(){
            let {token} = this.state.user
            if(!token){
                return <Redirect to="/login"/>
            }
            return <WrapperComponent {...this.props}/>
        }
    }
}
