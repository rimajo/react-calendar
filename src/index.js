import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import { Provider } from 'react-redux';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faAngleRight, faCheck, faTimes);

store.subscribe(() => {
  console.log("Store updated!", store.getState());
});




ReactDOM.render(
  <Provider store={store}>
    <Calendar/>
  </Provider>
,document.getElementById('root'));