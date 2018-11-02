import React, { Component } from 'react';
import Month from './Month';
import MonthPicker from './MonthPicker';
import ActivityManager from './ActivityManager';

class Calendar extends Component {

  constructor(props) {
    super(props);
  }

  render() {  
    return (
        <div id='calendar-wrapper'>
          <ActivityManager />
          <MonthPicker />
          <Month />
        </div>

    );
  }
}

export default Calendar;