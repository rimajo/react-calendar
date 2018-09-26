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
