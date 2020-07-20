const profileLoading = (state = false, action) => {
  switch (action.type) {
    case "PROFILE_LOADING":
      return true;
    case "PROFILE_SUCCESS":
      return false;
    case "PROFILE_FAILURE":
      return false;
    default:
      return state;
  }
};

export default profileLoading;
