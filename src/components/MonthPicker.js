import React, { Component } from 'react';
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigateForward, navigateBackwards } from "../actions/MonthPickerActions";

class MonthPicker extends Component {

  getMonthName() {
    const defaultMonthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const monthName = this.props.monthTranslations || defaultMonthNames;

    return monthName[this.props.date.month];  
  }

  handleNavigateForward(){
    this.props.navigateForward();
  }

  handleNavigateBackwards(){
    this.props.navigateBackwards();
  }

  render() {

    return (
        <div className='center'>
          <FontAwesomeIcon icon='angle-left'  onClick={() => this.handleNavigateForward()}   className='clickable'/>
          <FontAwesomeIcon icon='angle-right' onClick={() => this.handleNavigateBackwards()} className='clickable'/>
          <span>{this.props.date.year} {this.getMonthName()}</span>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.month,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigateForward: () => {
      dispatch(navigateForward());
    },
    navigateBackwards: () => {
      dispatch(navigateBackwards());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthPicker);