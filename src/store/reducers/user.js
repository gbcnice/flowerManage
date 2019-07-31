import {handleActions} from "redux-actions"
const defaultState = {
    token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):"",
    user:"未登录"
}

export default handleActions({
    LOGIN_ACTION:(state,action)=>{
            let newState = {...state};
        if(action.payload.username=='gbc'&&action.payload.password==123){
            newState.token = "123"
            sessionStorage.setItem("token","123")
            newState.user = action.payload.username
        }
        else{
            alert("用户名不存在")
        }
        return newState
    },
    LOGOUT_ACTION:(state,action)=>{
        let tokenState = {...state}
        tokenState.token = ""
        return tokenState
    }    
},defaultState)