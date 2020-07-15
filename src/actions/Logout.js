const logoutLoading = () => {
  return {
    type: "LOGOUT_LOADING",
  };
};

const logoutSuccess = () => {
  return {
    type: "LOGOUT_SUCCESS",
  };
};

const logoutFailure = () => {
  return {
    type: "LOGOUT_FAILURE",
  };
};

export const logout = async (dispatch) => {
  try {
    dispatch(logoutLoading());
    const resJson = await fetch("/api/users/logout", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const res = await resJson.json();
    if (res.success) {
      dispatch(logoutSuccess());
    } else {
      dispatch(logoutFailure());
    }
  } catch (error) {
    dispatch(logoutFailure());
    console.log(error);
  }
};
