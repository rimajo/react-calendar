import {createStore, combineReducers} from "redux";

import month from "./reducers/DateReducer";
import activity from "./reducers/ActivityReducer";
import fakeDatabase from "./reducers/FakeDatabaseReducer";

export default createStore(combineReducers({month, activity, fakeDatabase}));
