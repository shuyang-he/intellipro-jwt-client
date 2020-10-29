export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOGOUT_LOADING",
    });
    try {
      const resJson = await fetch("http://localhost:8000/api/users/logout", {
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
