import React, { Component } from 'react';
import Day from './Day';
import FillerDay from './FillerDay';
import CalendarHeader from './CalendarHeader';

import { connect } from "react-redux";

class Month extends Component {

  constructor(props) {
    super(props);   
    
    this.state = this.getMonthDetails(props);
  }

  componentWillReceiveProps(nextProps){
    this.setState(this.getMonthDetails(nextProps));
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

  getFillerDaysStart() {
    let fillerDays = [];
    let dayNumber = this.state.numberOfDaysLastMonth - (this.state.startDay-1)+1;
      for (var i = 0; i < this.state.startDay-1; i++) {
        fillerDays.push(<FillerDay key={`start-filler-${i}`} dayNumber={dayNumber} />);
        dayNumber++;
      }

    return fillerDays;
  }

  getFillerDaysEnd () {
    let fillerDays = [];
    let dayNumber = 1;
    if (this.state.lastDay != 0){
      for (var i = this.state.lastDay; i < 7; i++) {
        fillerDays.push(<FillerDay key={`end-filler-${i}`} dayNumber={dayNumber} />);
        dayNumber++;
      }
    }
    return fillerDays;
  }

  getDays () {
    const days = [];
    for (var i = 0; i < this.state.numberOfDays; i++) {
      const day = this.state.currentDay === i+1 ? 'today' : '';   
      days.push(
        <Day key={`day-${i}`} 
             dayNumber={i+1} 
             day={day} 
             activityInformation={this.getActivityInformation(i+1)}/>
      );
    }
        return days;
  }

  getActivityInformation(dayNumber){
    const activityInformation = this.props.currentMonthsActiveties.find(activity => {
      let day = activity.date.split("-")[2];
      day = day.startsWith('0') ? day.substring(1,2) : day;
      return day == dayNumber;
    });

    if (activityInformation) {
      const user = this.props.users.find(user => user.id == activityInformation.owner);     
      activityInformation.color = user.color;
      return activityInformation;      
    }
    
    return {};
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
        <CalendarHeader />
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
    activeties: state.fakeDatabase.activities,
    users: state.fakeDatabase.users,
    currentMonthsActiveties: state.fakeDatabase.currentMonthsActiveties
  };
};

export default connect(mapStateToProps)(Month);