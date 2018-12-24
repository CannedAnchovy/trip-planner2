import React, { Component } from 'react';
import ScheduleEditor from './ScheduleEditor';
import '../../css/Planner/Planner.css';

class Planner extends Component {
  render() {
    return (
      <div className="Planner">
        <ScheduleEditor />
      </div>
    )
  }
}

export default Planner;
