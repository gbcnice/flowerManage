import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"//actions异步增强 中间件
import home from "./reducers/home"
import user from "./reducers/user"
const reducer = combineReducers({
    home,
    user
})
export default createStore(reducer,applyMiddleware(reduxThunk))