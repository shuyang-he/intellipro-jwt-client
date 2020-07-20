const initialState = {
  user: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default user;
