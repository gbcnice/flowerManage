import {createAction} from "redux-actions"

const LoginAction = createAction("LOGIN_ACTION")
export const LoginAsyncAction =(userInfo) =>{
    return async (dispatch)=>{
        
        dispatch(LoginAction(userInfo))
    }
}
export const LogoutAction = createAction("LOGOUT_ACTION")