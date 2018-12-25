import React, { Component } from 'react';
import { Grid, Dropdown, Button, Tab, Menu, Icon, Message } from 'semantic-ui-react'
//import AttractionInSchedule from './AttractionInSchedule';
//import '../../css/Planner/AttractionList.css'
import Common from '../../../commonStyle';

const styles = {
}


class MessageBoard extends Component {
  constructor() {
    super();
    
  }

  

  render() {
    return (
      <div className="schedule">
        <div className="mainSchedule">
          <div className="attractionList">
            <div className="attractionList-title">
              旅行留言板
            </div>
          </div>    
        </div>
      </div>
    );
  }
}

export default MessageBoard;


