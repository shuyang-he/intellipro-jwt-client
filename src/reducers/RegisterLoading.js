const registerLoading = (state = false, action) => {
  switch (action.type) {
    case "REGISTER_LOADING":
      return true;
    case "REGISTER_SUCCESS":
      return false;
    case "REGISTER_FAILURE":
      return false;
    default:
      return state;
  }
};

export default registerLoading;
