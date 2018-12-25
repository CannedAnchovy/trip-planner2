import React, { Component } from 'react';
import { Sidebar, Button } from 'semantic-ui-react'
import Schedule from './Schedule';
import '../../css/Planner/ScheduleEditor.css';

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
      pullButtonPosition = {left:'38%'};
      clickAction = this.handleHideClick;
      clickIcon = "left double angle";
    } else {
      pullButtonPosition = {left:'0%'};
      clickAction = this.handleShowClick;
      clickIcon = "right double angle";
    }
    console.log(pullButtonPosition);

    return (
        <Sidebar.Pushable className="scheduleEditor" style={{margin:"0"}} >
          <Sidebar
            animation='overlay'
            icon='labeled'
            visible={this.state.visible}
            style={{width:"38%",backgroundColor:"#EDEDED"}}
          >
          <Schedule />
          </Sidebar>
          <Button.Group
            className="pullEditor"
            style={pullButtonPosition}
            vertical
          >
            <Button onClick={clickAction} icon={clickIcon}/>
          </Button.Group>
          {this.props.children}
        </Sidebar.Pushable>
    );
  }
}

export default ScheduleEditor;


