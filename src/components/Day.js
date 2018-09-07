
import React, { Component } from 'react';
import { connect } from "react-redux";
import Activity from './Activity';
import { openManager } from "../actions/ActivityActions";

class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {activity: {owner: '', color: ''}};
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

  render() {
    let clickProperty = () => this.props.openManager(this.props.dayNumber);
    let backgroundProperty = {background: `${this.state.activity.color}`};

    if (this.props.type === 'filler') {
      clickProperty = null;      
      backgroundProperty = {background: '#cecece'};
    }

    return (
      <td style={backgroundProperty} onClick={clickProperty}>
        <div className='day-header'>
          <span className={`day-number ${this.props.day}`}>{this.props.dayNumber}</span>
        </div>
        <div className='day-body'>
          <Activity owner={this.state.activity.owner} color={this.state.activity.color}/>
        </div>
      </td>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activity: state.activity
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openManager: (day) => {
      dispatch(openManager(day));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Day);