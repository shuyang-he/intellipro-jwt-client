const loading = (state = false, action) => {
  switch (action.type) {
    case "LOADING":
      return true;
    default:
      return state;
  }
};

export default loading;
