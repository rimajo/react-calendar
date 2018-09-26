import {DATABASE} from "./../enums/FakeDatabaseEnums";


const FakeDatabaseReducer = (state = {
  users: [{name: 'Rickard', color: '#ff793f'}, {name: 'Maria', color: '#33d9b2'}, {name: 'Magnus', color: '#706fd3'}, {name: 'David', color: '#cccccc'}],
  activities: [{owner: 'Rickard', color: '#ff793f', date: '2018-09-25', notes: 'från 16:00'}, {owner: 'Magnus', color: '#706fd3', date: '2018-09-26', notes: ''}, {owner: 'Rickard', color: '#ff793f', date: '2018-09-05', notes: 'från 16:00'},]
}, action) => {
  switch (action.type) {
    case DATABASE.CREATE_ACTIVITY:
    state = {managerIsOpen: true, dayToManage: action.payload};
  }
  return state;
};

export default FakeDatabaseReducer;
