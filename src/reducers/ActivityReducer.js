import {ACTIVITY} from "./../enums/ActivityEnums";


const ActivityReducer = (state = {managerIsOpen: false, dayToManage: 0}, action) => {
  switch (action.type) {
    case ACTIVITY.ADD_ACTIVITY:
      break;
    case ACTIVITY.EDIT_ACTIVITY:
      break;
    case ACTIVITY.REMOVE_ACTIVITY:
      break;
    case ACTIVITY.OPEN_MANAGER:
      state = {managerIsOpen: true, dayToManage: action.payload};
      break;
    case ACTIVITY.CLOSE_MANAGER:
      state = {managerIsOpen: false};
      break;
  }

  return state;
};

export default ActivityReducer;