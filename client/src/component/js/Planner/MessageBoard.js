import React, { Component } from 'react';
import { Grid, Dropdown, Button, Tab, Menu, Icon, Message } from 'semantic-ui-react'
//import AttractionInSchedule from './AttractionInSchedule';
//import '../../css/Planner/AttractionList.css'
import Common from '../../../commonStyle';

const style = {
  img: {
    marginTop: '0px',
    marginLeft: '10px',
    width: '380px',
    height: '490px',
  }
}


class MessageBoard extends Component {
  constructor() {
    super();

  }



  render() {
    const imgUrl = require('../../img/messageboard.png');
    return (
      <div className="schedule">
        <div className="mainSchedule">
          <div className="attractionList">
            <div className="attractionList-title">
              旅行留言板
            </div>
            <img src={imgUrl} style={style.img} alt="hi" />
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBoard;


