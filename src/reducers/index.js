// import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import drawer from "./drawer";
import user from "./user";
import list from "./list";

// export default combineReducers({
  export default {
    form: formReducer,
    drawer,
    user,
    list
  }

