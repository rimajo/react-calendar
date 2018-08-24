
import React, { Component } from 'react';
import Activity from './Activity';

class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {activity: {startTime: '', type: '', owner: '', color: ''}};
  }

  componentDidMount(){
    this.setState(this.getInitialActivities());
  }

  //just for mockind data as there is no database connection yet
  getInitialActivities() {
    let option = Math.floor(Math.random() * 4);

    switch(option) {
    case 1:
      return {activity: {owner: 'Magnus', color: '#ff793f'}};
    case 2:
      return {activity: {owner: 'Rickard', color: '#33d9b2'}};
    case 3:
      return {activity: {owner: 'Mia', color: '#706fd3'}};
    }
  }

  getDayType() {
    return(
      <td style={{background: `${this.state.activity.color}`}} className={this.props.type}>
        <div className='day-header'>
          <span className={`day-number ${this.props.day}`}>{this.props.dayNumber}</span>
        </div>
        <div className='day-body'>
          <Activity owner={this.state.activity.owner} color={this.state.activity.color}/>
        </div>
      </td>
    );
  }

  render() {
    return (
      this.getDayType()
    );
  }
}

export default Day;