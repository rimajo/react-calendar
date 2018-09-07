import {NAVIGATION} from "./../enums/MonthEnums";

const MonthReducer = (state = getInitialDate(), action) => {
  switch (action.type) {
    case NAVIGATION.NAVIGATE_FORWARD:
      if (state.month == 0) {
        state = {
          year: state.year-1,
          month: 11
        };
      }else{
        state = {
          year: state.year,
          month: state.month-1
        };
      }
      break;
    case NAVIGATION.NAVIGATE_BACKWARDS:
      if (state.month == 11) {
        state = {
          year: state.year+1,
          month: 0
        };
      }else{
        state = {
          year: state.year,
          month: state.month+1
        };
      }
      break;   
  }

  return state;
};

function getInitialDate() {
    const date  = new Date();
    const year  = date.getFullYear();
    const month = date.getMonth();

    return {year: year, month: month}
}

export default MonthReducer;