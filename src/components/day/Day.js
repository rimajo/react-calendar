import React, { Component } from 'react';
import Activity from './../activity/Activity';
import './day.css';


class Day extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialActivities();
  }

  //just for mockind data as there is no database connection yet
  getInitialActivities() {
    let option = Math.floor(Math.random() * 4);

    switch(option) {
    case 1:
      return {activeties: [{startTime: '17:10', title: 'Bollagstämma', type: 'M', owner: 'Mia'}]};
    case 2:
      return {activeties: [{startTime: '16:00', type: 'T', owner: 'Magnus'}, {startTime: '18:00', title: 'Möte', type: 'M', owner: 'David'}]};
    case 3:
      return {activeties: [{startTime: '', type: 'T', owner: 'Rickard'}, {startTime: '19:00', title: 'Möte', type: 'M', owner: 'Magnus'}, {startTime: '20:00', title: 'Byta ut köket i källaren', type: 'A', owner: 'David'}]};
    default:
      return {activeties: []};
    }
  }

  getDayName() {
    let weekday = [
      "Söndag",
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag"
    ];
    return weekday[this.props.dayNameIndex];
  }

  getDayType() {
    if (this.props.type === 'filler') {
      return (<div className={`day ${this.props.type}`}>
         <div className='day-header'>
          <span className='day-number'>{this.props.dayNumber}</span>
        </div>
      </div>
      );
    }

    return(
      <div className='day'>
        <div className='day-header'>
          <span className={`day-number ${this.props.day}`}>{this.props.dayNumber}</span>
          <span className='day-name-small'>{this.getDayName()}</span>
        </div>
        <div className='day-body'>
        {this.state.activeties.map(function(activity){
            return <Activity title={activity.title} type={activity.type} time={activity.startTime} owner={activity.owner} />;
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      this.getDayType()
    );
  }
}

export default Day;
