import React, { Component } from 'react';
import Month from './Month';
import MonthPicker from './MonthPicker';
import ActivityManager from './ActivityManager';

class Calendar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let monthTranslations = (this.props.monthTranslations && this.props.monthTranslations.length == 12) ? this.props.monthTranslations : null;
    let dayTranslations   = (this.props.dayTranslations && this.props.dayTranslations.length == 7) ? this.props.dayTranslations : null;

    return (
        <div id='calendar-wrapper'>
          <ActivityManager />
          <MonthPicker monthTranslations={monthTranslations}/>
          <Month dayTranslations={dayTranslations}/>
        </div>

    );
  }
}

export default Calendar;