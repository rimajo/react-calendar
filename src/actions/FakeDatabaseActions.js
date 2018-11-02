import {DATABASE} from "../enums/FakeDatabaseEnums";

export function getUsers() {
  return {
    type: DATABASE.GET_USERS
  };
}

export function getActiveties() {
  return {
    type: DATABASE.GET_ACTIVITIES
  };
}

export function saveActivity(activityInformation) {
  return {
    type: DATABASE.ADD_ACTIVITY, payload: activityInformation
  };
}

export function filterActiveties(year, month) {
  return {
    type: DATABASE.FILTER_ACTIVETIES, payload: {"year" : year, "month" : month}
  };
}

