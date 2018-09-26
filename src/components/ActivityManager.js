import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeManager, saveActivity } from "../actions/ActivityActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ActivityManager extends Component {

  constructor(props) {
    super(props);
  }

  getUserSelect() {
    return (
      <select>
        <option></option>
        {this.getUserOptions()}
      </select>
    );
  }

  getUserOptions() {
    return this.props.users.map(user => {
      return <option>{user.name}</option>
    })
  }

  getDisplayDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = `${this.props.date.year}-${this.props.date.month+1}-${this.props.activity.dayToManage}`;
    return new Date(date).toLocaleDateString('sv-se', options);
  }

  render() {
  	if (this.props.activity.managerIsOpen) {
      return (
      		<div id='activity-manager' className='shadow'>
      		<span className='header'>{this.getDisplayDate()}<FontAwesomeIcon icon='times' className='clickable' onClick={() => this.props.closeManager()}/></span>
      		<div className='body'>
      		{this.getUserSelect()}
      			<button className='clickable' onClick={() => this.props.saveActivity()}><FontAwesomeIcon icon='check'/></button>
      		</div>
     		</div>
    	);
  	}
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
    date: state.month,
    users: state.fakeDatabase.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeManager: () => {
      dispatch(closeManager());
    },
    saveActivity: () => {
      dispatch(saveActivity());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityManager);
