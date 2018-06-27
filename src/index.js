import React from 'react';
import ReactDOM from 'react-dom';
import Month from './components/month/Month';
import {Provider} from 'react-redux';
import store from './store';

store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Month />
  </Provider>
,document.getElementById('root'));
