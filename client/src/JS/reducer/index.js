import { combineReducers } from "redux";
import userReducer from "./user";
import placeReducer from "./place";
import EditReducer from "./editPlace";
import feedbackReducer from "./feedback";
const rootReducer = combineReducers({
  userReducer,
  placeReducer,
  EditReducer,
  feedbackReducer,
});
export default rootReducer;
