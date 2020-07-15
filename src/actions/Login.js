const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS",
  };
};

const loginFailure = () => {
  return {
    type: "LOGIN_FAILURE",
  };
};

export const checkLoginStatus = (exist, valid, dispatch) => {
  if (exist && valid) {
    dispatch(loginSuccess());
  } else {
    dispatch(loginFailure());
  }
};
