import React, { Component } from 'react';

class Activity extends Component {   
  

  render() {
    return (
      <div className='activity'>
        <span>{this.props.owner}</span>        
      </div>
    );
  }
}

export default Activity;