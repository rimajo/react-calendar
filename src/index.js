import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import {Provider} from 'react-redux';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faAngleRight);

store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

const dayNames = [
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
    "Söndag"
];

const monthNames = [
    'January',
    'February',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'October',
    'November',
    'December'
];

ReactDOM.render(
  <Provider store={store}>
    <Calendar dayTranslations={dayNames} monthTranslations={monthNames}/>
  </Provider>
,document.getElementById('root'));
