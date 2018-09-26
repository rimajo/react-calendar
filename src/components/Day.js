
import React, { Component } from 'react';
import { connect } from "react-redux";
import Activity from './Activity';
import { openManager } from "../actions/ActivityActions";

class Day extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let clickProperty = () => this.props.openManager(this.props.dayNumber);
    let backgroundProperty = {background: `${this.props.activityInformation.color}`};
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
          <Activity owner={this.props.activityInformation.owner} color={this.props.activityInformation.color}/>
        </div>
      </td>);
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

Day.defaultProps = {
  activityInformation:{}
};
