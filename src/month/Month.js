import React, { Component } from 'react';
import './month.css';
import Day from './../day/Day';

class Month extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialDate();
  }

  getInitialDate = () => {
    let date                  = new Date();
    let today                 = date.getDate();
    let year                  = date.getFullYear();
    let month                 = date.getMonth();
    let numberOfDays          = new Date(year, month+1, 0).getDate();
    let numberOfDaysLastMonth = new Date(year, month, 0).getDate();
    let startDay              = new Date(year, month, 1).getDay();
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

    getMonthName = () => {
    let weekday = [
      'Januari',
      'Februari',
      'Mars',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'Augusti',
      'September',
      'Oktober',
      'November',
      'December'
    ];
    return weekday[this.state.currentMonth];
  }

  getDayNameIndex = (dayNumber) => {
    if (dayNumber > 6) {
      return dayNumber%7
    }
    return dayNumber;
  }

  getFillerDaysStart = () => {
    let fillerDays = [];
    let dayNumber = this.state.numberOfDaysLastMonth - this.state.startDay+1;
    for (var i = 0; i < this.state.startDay; i++) {
      fillerDays.push(<Day type='filler' dayNumber={dayNumber}/>);
      dayNumber++;
    }
    return fillerDays;
  }

  getFillerDaysEnd = () => {
    let fillerDays = [];
    let dayNumber = 1;
    for (var i = this.state.lastDay; i < 6; i++) {
      fillerDays.push(<Day type='filler' dayNumber={dayNumber}/>);
        dayNumber++;
    }
    return fillerDays;
  }

  getDays = () => {
    let days = [];

    for (var i = 0; i < this.state.numberOfDays; i++) {
      let day = this.state.currentDay === i+1 ? 'today' : '';
      days.push(<Day key={i} dayNumber={i+1} dayNameIndex={this.getDayNameIndex(this.state.startDay+i)} day={day}/>);
    }
    return days;
  }

  render() {

    return (
        <div id='month' className='center'>
          <div id='month-navigation'>{this.state.year} {this.getMonthName()}</div>
          <div id='month-header'>
            <span className='day-name'>Söndag</span>
            <span className='day-name'>Måndag</span>
            <span className='day-name'>Tisdag</span>
            <span className='day-name'>Onsdag</span>
            <span className='day-name'>Torsdag</span>
            <span className='day-name'>Fredag</span>
            <span className='day-name'>Lördag</span>
          </div>
          {this.getFillerDaysStart()}
          {this.getDays()}
          {this.getFillerDaysEnd()}
        </div>
    );
  }
}

export default Month;
