import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rooterReducer = combineReducers({
  counter: counterReducer,
});

export default rooterReducer;
