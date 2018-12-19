import React, { Component } from 'react';
import { Segment, Sidebar, Button } from 'semantic-ui-react'
import Schedule from './Schedule';
import '../../css/ScheduleEditor.css'


class ScheduleEditor extends Component {
  constructor() {
    super();
    this.state = { visible: true, show: false,}

    this.handleHideClick = this.handleHideClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
  }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
  
    render() {
    let pullButtonPosition, clickAction, clickIcon;
    if(this.state.visible) {
      pullButtonPosition = {left:'92%'};
      clickAction = this.handleHideClick;
      clickIcon = "left double angle";
    } else {
      pullButtonPosition = {left:'0%'};
      clickAction = this.handleShowClick;
      clickIcon = "right double angle";
    }
    console.log(pullButtonPosition);
    
    return (
        <div className="scheduleEditor">
        <Sidebar.Pushable as={Segment} style={{margin:"0",}}>
          <Sidebar
            animation='overlay'
            icon='labeled'
            visible={this.state.visible}
            style={{width:"92%",backgroundColor:"#EDEDED"}}
          >
          <Schedule />
          </Sidebar>
        </Sidebar.Pushable>
        <Button.Group
          className="pullEditor"
          style={pullButtonPosition}
          vertical
        >
          <Button onClick={clickAction} icon={clickIcon}/>
        </Button.Group>
        </div>
    );
  }
}

export default ScheduleEditor;


