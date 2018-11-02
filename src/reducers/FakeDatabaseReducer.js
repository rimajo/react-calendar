import {DATABASE} from "./../enums/FakeDatabaseEnums";

const FakeDatabaseReducer = (state = {
  users: [
  {id: 0, name: 'Rickard', color: '#ff793f'}, 
  {id: 1, name: 'Maria', color: '#33d9b2'}, 
  {id: 2, name: 'Magnus', color: '#706fd3'}, 
  {id: 3, name: 'David', color: '#cccccc'}
  ],
  activities: []
}, action) => {
  switch (action.type) {
    case DATABASE.FILTER_ACTIVETIES:
    	let filteredActiveties = [];
    	if(state.activities){    	 
    		filteredActiveties = state.activities.filter(activity => {
      			const dateComponents = activity.date.split("-");
      			const year  = dateComponents[0];
      			const month = dateComponents[1].startsWith('0') ? dateComponents[1].substring(1,2) : dateComponents[1];
    			return (year == action.payload.year && month == action.payload.month+1);
    		});
    	}
    	return {...state, currentMonthsActiveties: filteredActiveties}
    case DATABASE.ADD_ACTIVITY:
    	const newState = {...state};
    	const duplicateIndex = newState.activities.findIndex(activity => {
    		return activity.date == action.payload.date;
    	})
    	
    	if (duplicateIndex != -1) {
    		newState.activities.splice(duplicateIndex,1);
    	}

    	if (action.payload.owner == -1) {
    		return state;
    	}

    	return { ...newState, activities: [...state.activities, {...action.payload}]}    
    default:
    	return state;
  }  
};

export default FakeDatabaseReducer;