export const loginSubmit = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "LOGIN_LOADING",
    });
    try {
      const resJson = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res = await resJson.json();
      const { success, exist, valid, data, token } = res;
      if (success) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: data,
        });
        localStorage.setItem("jwt", token);
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
        });
      }
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
      });
      console.log(error);
    }
  };
};
