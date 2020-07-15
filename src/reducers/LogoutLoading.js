const logoutLoading = (state = false, action) => {
  switch (action.type) {
    case "LOGOUT_LOADING":
      return true;
    case "LOGOUT_SUCCESS":
      return false;
    case "LOGOUT_FAILURE":
      return false;
    default:
      return state;
  }
};

export default logoutLoading;
