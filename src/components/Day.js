import React, { Component } from 'react';
import { connect } from "react-redux";
import Activity from './Activity';
import { openManager } from "../actions/ActivityActions";

class Day extends Component {

  constructor(props) {
    super(props);
  }

  getActivity(){
    if(Object.getOwnPropertyNames(this.props.activityInformation).length > 0) {
      const userIndex = this.props.activityInformation.owner;
      const user = this.props.users.find(user => user.id == userIndex);
      return <Activity owner={user.name} note={this.props.activityInformation.note}/>;
    }
    return null;
  }

  render() {
    const clickProperty = () => this.props.openManager(this.props.dayNumber);
    const backgroundProperty = {background: `${this.props.activityInformation.color || '#f2f2f2'}`};

    return (
      <td style={backgroundProperty} onClick={clickProperty}>
        <div className='day-header'>
          <span className={`day-number ${this.props.day}`}>{this.props.dayNumber}</span>
          </div>
        <div className='day-body'>
          {this.getActivity()}
        </div>
      </td>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
    users: state.fakeDatabase.users
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