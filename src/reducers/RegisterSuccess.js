const registerSuccess = (state = false, action) => {
  switch (action.type) {
    case "REGISTER_LOADING":
      return false;
    case "REGISTER_SUCCESS":
      return true;
    case "REGISTER_FAILURE":
      return false;
    default:
      return state;
  }
};

export default registerSuccess;
