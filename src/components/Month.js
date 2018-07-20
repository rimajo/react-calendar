import React, { Component } from 'react';
import Day from './Day';

class Month extends Component {

  constructor(props) {
    super(props);
    let initialDate = this.getInitialDate();
    this.state = {initialDate, startOnMonday: props.startOnMonday || false}
    console.log(this.state);
  }

  getInitialDate (){
    let date                  = new Date();
    let today                 = date.getDate();
    let year                  = date.getFullYear();
    let month                 = date.getMonth()+1;
    let numberOfDays          = new Date(year, month+1, 0).getDate();
    let numberOfDaysLastMonth = new Date(year, month, 0).getDate();
    let startDay              = new Date(year, month, 1).getDay() || 7;
    let lastDay               = new Date(year, month, numberOfDays).getDay();

    return ({
       year: year,
       numberOfDays: numberOfDays,
       numberOfDaysLastMonth: numberOfDaysLastMonth,
       currentDay: today,
       currentMonth: month,
       startDay: startDay,
       lastDay: lastDay
    });
  }

  getDayHeaders() {
    const headers = [];

    const defaultDayName = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    const dayName = this.props.dayTranslations || defaultDayName;

    dayName.forEach(function(name) {
      headers.push(<span className='day-name'>{name}</span>);
    });
    return headers;
  }

  getDayNameIndex(dayNumber) {
    if (dayNumber > 6) {
      return dayNumber%7
    }
    return dayNumber;
  }

  getFillerDaysStart() {
    let fillerDays = [];
    let dayNumber = this.state.initialDate.numberOfDaysLastMonth - this.state.initialDate.startDay+1;

    for (var i = 0; i < this.state.initialDate.startDay-1; i++) {
      fillerDays.push(<Day type='filler' dayNumber={dayNumber}/>);
      dayNumber++;
    }
    return fillerDays;
  }

  getFillerDaysEnd () {
    let fillerDays = [];
    let dayNumber = 1;
    for (var i = this.state.initialDate.lastDay; i < 7; i++) {
      fillerDays.push(<Day type='filler' dayNumber={dayNumber}/>);
        dayNumber++;
    }
    return fillerDays;
  }

  getDays () {
    let days = [];

    for (var i = 0; i < this.state.initialDate.numberOfDays; i++) {
      let day = this.state.initialDate.currentDay === i+1 ? 'today' : '';
      days.push(<Day key={i} dayNumber={i+1} dayNameIndex={this.getDayNameIndex(this.state.initialDate.startDay+i)} day={day}/>);
    }
    return days;
  }

  render() {

    return (
        <div id='month' className='center'>
          <div id='month-header'>
            {this.getDayHeaders()}
          </div>
          {this.getFillerDaysStart()}
          {this.getDays()}
          {this.getFillerDaysEnd()}
        </div>
    );
  }
}

export default Month;
