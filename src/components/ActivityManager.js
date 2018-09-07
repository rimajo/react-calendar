import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeManager } from "../actions/ActivityActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ActivityManager extends Component {   
  
  constructor(props) {
    super(props);
  }

  render() {
  	if (this.props.activity.managerIsOpen) {
  		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  		const date = `${this.props.date.year}-${this.props.date.month+1}-${this.props.activity.dayToManage}`;
  		const displayDate = new Date(date).toLocaleDateString('sv-se', options);
  		return (
      		<div id='activity-manager' className='shadow'>
      		<span className='header'>{displayDate}<FontAwesomeIcon icon='times' className='clickable' onClick={() => this.props.closeManager()}/></span>
      		<div className='body'>
      			<select>
      			<option></option>
      			<option>Rickard</option>
      			<option>Magnus</option>
      			<option>Mia</option>
      			</select>
      			<button className='clickable'><FontAwesomeIcon icon='check'/></button>
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
    date: state.month
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeManager: () => {
      dispatch(closeManager());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityManager);