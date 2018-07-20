import {NAVIGATION} from "../enums/MonthEnums";

export function navigateForward() {
  return {
    type: NAVIGATION.NAVIGATE_FORWARD
  };
}

export function navigateBackwards() {
  return {
    type: NAVIGATION.NAVIGATE_BACKWARDS
  };
}