import React, { Component } from 'react';

class Activity extends Component {

  getDescription() {
    if (this.props.type === 'T') {
      return <span className='activity-description'> {this.props.owner}</span>
    }
    return <span className='activity-description'> {this.props.title}</span>
  }

  render() {
    return (
      <div className={`activity activity-${this.props.type}`}>
        {this.getDescription()}
        <span className='activity-time'>{this.props.time}</span>
      </div>
    );
  }
}

export default Activity;
