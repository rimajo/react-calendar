import {createStore, combineReducers} from "redux";

import month from "./reducers/MonthReducer";
import activity from "./reducers/ActivityReducer";
import fakeDatabase from "./reducers/FakeDatabase";

export default createStore(combineReducers({month, activity, fakeDatabase}));
