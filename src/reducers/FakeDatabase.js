import {DATABASE} from "./../enums/FakeDatabaseEnums";


const FakeDatabaseReducer = (state = {
  users: [{id: 0, name: 'Rickard', color: '#ff793f'}, {id: 1, name: 'Maria', color: '#33d9b2'}, {id: 2, name: 'Magnus', color: '#706fd3'}, {id: 3, name: 'David', color: '#cccccc'}],
  activities: [{owner: 0, color: '#ff793f', date: '2018-09-25', notes: 'från 16:00'}, {owner: 2, color: '#706fd3', date: '2018-09-26', notes: ''}, {owner: 0, color: '#ff793f', date: '2018-09-05', notes: 'från 16:00'},]
}, action) => {
  switch (action.type) {
    case DATABASE.CREATE_ACTIVITY:
    state = {managerIsOpen: true, dayToManage: action.payload};
  }
  return state;
};

export default FakeDatabaseReducer;