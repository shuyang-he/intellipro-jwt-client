export const registerSubmit = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "REGISTER_LOADING",
    });
    try {
      const resJson = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res = await resJson.json();
      if (res.success) {
        dispatch({
          type: "REGISTER_SUCCESS",
        });
      } else {
        dispatch({
          type: "REGISTER_FAILURE",
        });
      }
    } catch (error) {
      dispatch({
        type: "REGISTER_FAILURE",
      });
      console.log(error);
    }
  };
};
