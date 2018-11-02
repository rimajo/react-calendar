import React, { Component } from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigateForward, navigateBackwards } from "../actions/MonthPickerActions";
import { filterActiveties } from "../actions/FakeDatabaseActions";

class MonthPicker extends Component {

  constructor(props) {
    super(props);

    this.monthNames = [
      'January',
      'February',
      'Mars',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'Augusti',
      'September',
      'Oktober',
      'November',
      'December'
    ];

    props.filterActiveties(props.date.year, props.date.month);
  }

  getMonthName() {
    return this.monthNames[this.props.date.month];
  }

  componentWillReceiveProps(nextProps){    
    this.props.filterActiveties(nextProps.date.year, nextProps.date.month);
  }

  render() {
    return (
        <div id='month-navigation'>
          <span id='current-date'>{this.props.date.year} {this.getMonthName()}</span>
          <FontAwesomeIcon icon='angle-left'  className='clickable' onClick={() => this.props.navigateBackwards()}/>
          <FontAwesomeIcon icon='angle-right' className='clickable' onClick={() => this.props.navigateForward()}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.month,
    activities: state.fakeDatabase.activities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterActiveties: (year, month) => {
      dispatch(filterActiveties(year, month));
    },
    navigateForward: () => {
      dispatch(navigateForward());
    },
    navigateBackwards: () => {
      dispatch(navigateBackwards());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthPicker);