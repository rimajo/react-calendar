import React, { Component } from 'react';

class CalendarHeader extends Component {
 
  getCalendarHeaders() {
    const dayNames = [
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
      "Söndag"];

    return dayNames.map((name, index)=>{
      return <th key={`header-${index}`}>{name}</th>
    });
  }
 
  render() {
    return( 
      <thead>
        <tr>
          {this.getCalendarHeaders()}
        </tr>
      </thead>      
    );
  }
}

export default CalendarHeader;