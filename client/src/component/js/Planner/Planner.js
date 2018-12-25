import React, { Component } from 'react';
import ScheduleEditor from './ScheduleEditor';
import Reader from './Reader';
import '../../css/Planner/Planner.css';

class Planner extends Component {
  render() {
    return (
      <div className="planner">
        <ScheduleEditor>
          <Reader />
        </ScheduleEditor>
      </div>
    )
  }
}

export default Planner;
