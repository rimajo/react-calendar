import React, { Component } from 'react';

class FillerDay extends Component {

  constructor(props) {
    super(props);
  }  

  render() { 
    return (
      <td style={{background: '#cecece'}}>
        <div className='day-header'>
          <span className='day-number'>{this.props.dayNumber}</span>
          </div>
        <div className='day-body'>
        </div>
      </td>
    );
  }
}

export default FillerDay;
