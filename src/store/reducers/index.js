import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({
    blogs: blogReducer,
    users: userReducer
});


export default reducers;