import {ACTIVITY} from "../enums/ActivityEnums";

export function openManager(day) {
  return {
    type: ACTIVITY.OPEN_MANAGER, payload: day
  };
}

export function closeManager() {
  return {
    type: ACTIVITY.CLOSE_MANAGER
  };
}

export function saveActivity() {
  return {
    type: ACTIVITY.CLOSE_MANAGER
  };
}
