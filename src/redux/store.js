import { createStore, combineReducers } from "redux";
import { bookReducer } from "./bookReducer";

const rootReducer = combineReducers({
  bookReducer,
});

const store = createStore(rootReducer);

export default store;
