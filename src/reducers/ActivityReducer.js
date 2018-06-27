import {ACTIVITY} from "./../enums/ActivityEnums";


const ActivityReducer = (state = {
  type: "",
  startTime: "",
  owner: "",
  description: ""
}, action) => {
  switch (action.type) {
    case ACTIVITY.ADD_ACTIVITY:
      break;
    case ACTIVITY.EDIT_ACTIVITY:
     break;
    case ACTIVITY.REMOVE_ACTIVITY:
     break;
  }

  return state;
};

export default ActivityReducer;
