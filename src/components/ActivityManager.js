import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeManager } from "../actions/ActivityActions";
import { filterActiveties, saveActivity } from "../actions/FakeDatabaseActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ActivityManager extends Component {

  constructor(props) {
    super(props);
    this.activity = {owner: -1, date: '', note: ''}
  }

  setOwner(event) {
    this.activity.owner = parseInt(event.target.value);
  }

  setNote(event) {
  	this.activity.note = event.target.value;
  }

  setDate() {
  	this.activity.date = `${this.props.date.year}-${this.props.date.month+1}-${this.props.activity.dayToManage}`;
  }

  closeManager(){
    this.props.closeManager();
    this.resetActivity();
  }

  resetActivity() {
    this.activity = {owner: -1, date: '', note: ''}
  }

  getUserSelect() {
    return (
      <select onChange={event => this.setOwner(event)}>
        <option value='-1'></option>
        {this.props.users.map(user => {
      		return <option value={user.id}>{user.name}</option>
    	})}
      </select>
    );
  }

  getDisplayDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(this.activity.date).toLocaleDateString('sv-se', options);
  }

  saveActivity(){
  	this.props.saveActivity(this.activity);
  	this.props.filterActiveties(this.props.date.year, this.props.date.month);
    this.resetActivity();
  }

  render() {
	this.setDate();
  	if (this.props.activity.managerIsOpen) {
      	return (
      		<div id='activity-manager' className='shadow'>
      		<span className='header'>{this.getDisplayDate()}<FontAwesomeIcon icon='times' className='clickable' onClick={() => this.closeManager()}/></span>
      		<div className='body'>
      			<div id='activity-content'>
      				{this.getUserSelect()}
      				<label>Notis:</label>
      				<input onChange={event => this.setNote(event)}></input>
      			</div>
      			<button className='clickable' onClick={() => this.saveActivity()}><FontAwesomeIcon icon='check'/></button>
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
    saveActivity: (activityInformation) => {
      dispatch(saveActivity(activityInformation));
      dispatch(closeManager());
    },
    filterActiveties: (year, month) => {
      dispatch(filterActiveties(year, month));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityManager);