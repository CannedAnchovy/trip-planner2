import React, { Component } from 'react';
import ScheduleEditor from './ScheduleEditor/ScheduleEditor';
import '../css/MainDisplay.css';

class MainDisplay extends Component {
  render() {
    return (
        <div className="mainDisplay">
          <ScheduleEditor />
        </div>
    );
  }
}

export default MainDisplay;


