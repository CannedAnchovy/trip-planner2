import React, { Component } from 'react';
import { Grid, Dropdown, Button, Tab, Menu, Icon } from 'semantic-ui-react'
import AttractionInSchedule from './AttractionInSchedule';
import '../../css/Planner/Schedule.css'
import Common from '../../../commonStyle';

const styles = {
  tab: {
    height: '100%',
  },
  tabPane: {
    fontSize: '2em',
    height: '90%',
    overflow: 'scroll',
    overflowX: 'hidden',
    
  },
  menuItem: {
    padding: '15px',
    fontSize: '1.3em',
  },
  addDayButton: {
    padding: '15px',
    fontSize: Common.bodySize,
    backgroundColor: Common.ultraLightGrey,
  },
  closeTab: {
    margin: '0px',
    float: 'right',
  },
  addButton: {
    backgroundColor: '#BABABA',
    borderRadius: '50%',
    width: '4.3vw',
    height: '4.3vw',
    fontSize: '1.2rem',
    color: 'white',
    position: 'absolute',
    left: '2vw',
    zIndex: '5',
  }
}



const data = require("../../schedule.json");
const schedule = data.schedule;


class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      days: 1,
    }
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleAddTab = this.handleAddTab.bind(this);
  }

  componentWillMount() {

  }

  handleTabChange(e, { activeIndex }) {
    this.setState({ activeIndex });
  }

  handleAddTab() {
    this.setState({
      activeIndex: this.state.days,
      days: this.state.days + 1,
    });
  }

  handleDeleteTab() {
    if (this.state.days === 1)  return;
    this.setState({
      days: this.state.days - 1,
    });

  }

  

  render() {
    //console.log(this.state.mode);
    if (this.state.activeIndex === this.state.days) {
      this.setState({
        activeIndex: this.state.activeIndex - 1,
      });
    }
    const panes = [];
    for ( let i = 0; i < this.state.days; i = i + 1 ) {
      let closeTabIcon = <div/>;
      if ( this.state.activeIndex === i && this.props.mode === 'edit') {
        closeTabIcon = (
          <Icon
            name="close"
            style={styles.closeTab}
            size="small"
            onClick={(i) => {this.handleDeleteTab(i);}}
          />
        );
      }
      let addAttractionButton = <div/>;
      if ( this.props.mode === 'edit' ) {
        addAttractionButton = (
          <div className="addAttractionInSchedule">
            <Button
              icon="plus"
              style={styles.addButton}
            />
          </div>
        );
      }
      panes.push({
        menuItem: (
          <Menu.Item key={i} style={styles.menuItem}>
            <b className="menuItemDay">{`第 ${i+1} 天`}</b>
            {closeTabIcon}
          </Menu.Item>
        ),
        render: () => {
          return(
            <Tab.Pane style={styles.tabPane}>
              {schedule.map(attraction => (
                <AttractionInSchedule
                  key={attraction.id}
                  mode={this.props.mode}
                  attractionInfo={attraction}
                />
              ))}
              {addAttractionButton}
            </Tab.Pane>
          );
        },
      });
    }
    panes.push({
      menuItem: (
        <Button
          key={this.state.days}
          icon="plus"
          onClick={this.handleAddTab}
          style={styles.addDayButton}
        />
      ),
    });
    //console.log(lineTop);
    return (
      <div className="schedule">
        
        <Tab
          className="mainSchedule"
          panes={panes}
          styles={styles.tab}
          activeIndex={this.state.activeIndex}
          onTabChange={this.handleTabChange}
        />
        
        <div className="schedule-line"></div>
        <div className="schedule-white" id="top"></div>
        <div className="schedule-white" id="bottom"></div>
      </div>
    );
  }
}

export default Schedule;


