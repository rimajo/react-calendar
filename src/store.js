import {createStore, combineReducers} from "redux";

import month from "./reducers/MonthReducer";
import day from "./reducers/DayReducer";
import activity from "./reducers/ActivityReducer";

export default createStore(combineReducers({month, day, activity}));
