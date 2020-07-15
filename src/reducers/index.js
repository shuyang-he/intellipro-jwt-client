import { combineReducers } from "redux";
import loginSuccess from "./LoginSuccess";
import logoutLoading from "./LogoutLoading";

export default combineReducers({
  loginSuccess,
  logoutLoading,
});
