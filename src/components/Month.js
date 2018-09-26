import React, { Component } from 'react';
import Day from './Day';
import { connect } from "react-redux";

class Month extends Component {

  constructor(props) {
    super(props);
    const defaultDayNames = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    const monthDetails = this.getMonthDetails(props);

    this.state = Object.assign({dayNames: props.dayTranslations || defaultDayNames}, monthDetails);
  }

  componentWillReceiveProps(nextProps) {
    const monthDetails = this.getMonthDetails(nextProps);
    this.setState(Object.assign({dayNames: nextProps.dayTranslations || defaultDayNames}, monthDetails));
  }

  getMonthDetails(props) {
    const date                  = new Date();
    const numberOfDays          = new Date(props.date.year, props.date.month+1, 0).getDate();
    const numberOfDaysLastMonth = new Date(props.date.year, props.date.month, 0).getDate();
    const startDay              = new Date(props.date.year, props.date.month, 1).getDay() || 7;
    const lastDay               = new Date(props.date.year, props.date.month, numberOfDays).getDay();

    const monthDetails = {
       currentDay: 0,
       numberOfDays: numberOfDays,
       numberOfDaysLastMonth: numberOfDaysLastMonth,
       startDay: startDay,
       lastDay: lastDay
    }

    if (date.getMonth() === props.date.month) {
      monthDetails.currentDay = date.getDate();
    }

    return monthDetails;
  }

  getDayHeaders() {
    return this.state.dayNames.map((name, index)=>{
      return <span key={`header-${index}`} className='day-name'>{name}</span>
    });
  }

  getDayNameIndex(dayNumber) {
    if (dayNumber > 6) {
      return dayNumber%7;
    }
    return dayNumber;
  }

  getDaysWithActivities() {
     return this.props.activeties.map(activity => {
       let day = activity.date.split("-")[2];
       if (day.startsWith('0')) {
         return  parseInt(day.substring(1,2));
       }
      return parseInt(day);
    });
  }

  getFillerDaysStart() {
    let fillerDays = [];
    let dayNumber = this.state.numberOfDaysLastMonth - (this.state.startDay-1)+1;
      for (var i = 0; i < this.state.startDay-1; i++) {
        fillerDays.push(<Day key={`start-filler-${i}`} type='filler' dayNumber={dayNumber} />);
        dayNumber++;
      }

    return fillerDays;
  }

  getFillerDaysEnd () {
    let fillerDays = [];
    let dayNumber = 1;
    if (this.state.lastDay != 0){
      for (var i = this.state.lastDay; i < 7; i++) {
        fillerDays.push(<Day key={`end-filler-${i}`} type='filler' dayNumber={dayNumber} />);
        dayNumber++;
      }
    }
    return fillerDays;
  }

  getDays () {
    const days = [];
    const activityDays = this.getDaysWithActivities();
    for (var i = 0; i < this.state.numberOfDays; i++) {
      const day = this.state.currentDay === i+1 ? 'today' : '';
      let activityInformation = {};

      if (activityDays.includes(i+1)) {
          activityInformation = this.props.activeties[activityDays.indexOf(i+1)];
      }
          days.push(<Day key={`day-${i}`} dayNumber={i+1} dayNameIndex={this.getDayNameIndex(this.state.startDay+i)} day={day} activityInformation={activityInformation}/>);
        }
        return days;
    }

    getCalendarHeaders() {
      return this.state.dayNames.map((name, index)=>{
        return <th key={`header-${index}`}>{name}</th>
      });
    }

    getEmptyWeeks(numberOfDays) {
      const weeks = [];
      const numberOfWeeks = numberOfDays / 7;
      for (var i = 0; i < numberOfWeeks; i++) {
        weeks.push([]);
      }
      return weeks;
    }

    getCalendarBody() {
      let days    = this.getFillerDaysStart();
      days        = days.concat(this.getDays());
      days        = days.concat(this.getFillerDaysEnd());
      const weeks = this.getEmptyWeeks(days.length);

      days.forEach((day, index)=>{
        weeks[Math.floor(index/7)].push(day);
      });

      return weeks.map((week, index) => {
        return <tr key={`week-${index}`}>{week}</tr>
      });
    }

    render() {
        return (
            <table>
              <thead>
                <tr>
                {this.getCalendarHeaders()}
                </tr>
              </thead>
              <tbody>
                {this.getCalendarBody()}
              </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    date: state.month,
    activeties: state.fakeDatabase.activities
  };
};

export default connect(mapStateToProps)(Month);
