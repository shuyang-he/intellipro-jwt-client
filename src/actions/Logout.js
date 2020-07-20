export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOGOUT_LOADING",
    });
    try {
      const resJson = await fetch("/api/users/logout", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const res = await resJson.json();
      if (res.success) {
        dispatch({
          type: "LOGOUT_SUCCESS",
        });
        localStorage.removeItem("jwt");
      } else {
        dispatch({
          type: "LOGOUT_FAILURE",
        });
      }
    } catch (error) {
      dispatch({
        type: "LOGOUT_FAILURE",
      });
      console.log(error);
    }
  };
};
