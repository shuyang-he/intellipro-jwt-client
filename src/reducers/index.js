import { combineReducers } from "redux";
import user from "./User";
import loginLoading from "./LoginLoading";
import logoutLoading from "./LogoutLoading";
import profileLoading from "./ProfileLoading";
import registerLoading from "./RegisterLoading";
import registerSuccess from "./RegisterSuccess";

export default combineReducers({
  user,
  loginLoading,
  logoutLoading,
  profileLoading,
  registerLoading,
  registerSuccess,
});
