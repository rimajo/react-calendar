import React, { Component } from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigateForward, navigateBackwards } from "../actions/MonthPickerActions";

class MonthPicker extends Component {

  constructor(props) {
    super(props);

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

    this.state = {monthNames: props.monthTranslations || defaultMonthNames}
  }

  getMonthName() {
    return this.state.monthNames[this.props.date.month];
  }

  render() {
    return (
        <div id='month-navigation'>
          <span id='current-date'>{this.props.date.year} {this.getMonthName()}</span>
          <FontAwesomeIcon icon='angle-left' className='clickable' onClick={() => this.props.navigateForward()}/>
          <FontAwesomeIcon icon='angle-right' className='clickable' onClick={() => this.props.navigateBackwards()}/>
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