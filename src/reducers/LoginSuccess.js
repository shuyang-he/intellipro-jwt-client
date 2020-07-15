const loginSuccess = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return true;
    case "LOGIN_FAILURE":
      return false;
    case "LOGOUT_SUCCESS":
      return false;
    case "LOGOUT_FAILURE":
      return true;
    default:
      return state;
  }
};

export default loginSuccess;
