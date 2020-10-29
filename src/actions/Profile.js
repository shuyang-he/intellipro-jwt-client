import Cookies from "js-cookie";

export const getProfile = () => {
  return async (dispatch) => {
    dispatch({
      type: "PROFILE_LOADING",
    });
    const token = Cookies.get("jwt");
    try {
      const resJson = await fetch("http://localhost:8000/api/users/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await resJson.json();
      if (res.success) {
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: res.data,
        });
      } else {
        dispatch({
          type: "PROFILE_FAILURE",
        });
      }
    } catch (error) {
      dispatch({
        type: "PROFILE_FAILURE",
      });
      console.log(error);
    }
  };
};
