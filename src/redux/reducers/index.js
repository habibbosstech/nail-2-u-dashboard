import {combineReducers} from "redux";
import auth from "./auth";
import dashboard from "./dashboard";
//import message from "./message";

export default combineReducers({
    auth, dashboard
    //message,
});
