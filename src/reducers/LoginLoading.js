const loginLoading = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_LOADING":
      return true;
    case "LOGIN_SUCCESS":
      return false;
    case "LOGIN_FAILURE":
      return false;
    default:
      return state;
  }
};

export default loginLoading;
