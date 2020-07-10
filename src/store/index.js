import reducer from "../reducers/index";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const midwares = [thunk];
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...midwares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
