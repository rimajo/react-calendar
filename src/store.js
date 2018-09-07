import {createStore, combineReducers} from "redux";

import month from "./reducers/MonthReducer";
import activity from "./reducers/ActivityReducer";

export default createStore(combineReducers({month, activity}));
