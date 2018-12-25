import React, { Component } from 'react';
import { Grid, Dropdown, Button, Tab, Menu, Icon } from 'semantic-ui-react'
import AttractionInSchedule from './AttractionInSchedule';
import '../../css/Schedule.css';

const styles = {
  grid: {
    margin: '0px',
  },
  gridColSelection: {
    padding:'0px',
    width:'56%',
  },
  gridColButton: {
    padding:'0px',
    width:'22%',
  },
  dropdown: {
    fontSize:'1.5em',
    width: '80%',
    backgroundColor: '#EDEDED',
    borderWidth: '0px 0px 3px 0px',
  },
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
    fontSize: '1.3em'
  },
  closeTab: {
    margin: '0px',
    float: 'right',
  },
  editButton: {
    padding:'0px',
    width:'30%',
  },
  addButton: {
    backgroundColor: '#BABABA',
    borderRadius: '50%',
    width: '4vw',
    height: '4vw',
    fontSize: '25px',
    color: 'white',
    position: 'absolute',
    zIndex: '5',
  }
}

const options = [
  { key: 1, text: '日本五日遊', value: 1 },
  { key: 2, text: '人生好難之旅', value: 2 },
  { key: 3, text: '好想放假之旅', value: 3 },
]

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
    this.handleModeChange = this.handleModeChange.bind(this);
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

  handleModeChange() {
    const newMode = (this.state.mode === 'edit')? 'readOnly':'edit';
    this.setState({
      mode: newMode,
    });
  }

  render() {
    console.log(data);
    if (this.state.activeIndex === this.state.days) {
      this.setState({
        activeIndex: this.state.activeIndex - 1,
        mode: 'readOnly',
      });
    }
    const panes = [];
    for ( let i = 0; i < this.state.days; i = i + 1 ) {
      let closeTabIcon = <div/>;
      if (this.state.activeIndex === i) {
        closeTabIcon = (
          <Icon
            name="close"
            style={styles.closeTab}
            size="small"
            onClick={(i) => {this.handleDeleteTab(i);}}
          />
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
                  mode={this.state.mode}
                  attractionInfo={attraction}
                />
              ))}
              <div className="addAttractionInSchedule">
                <Button
                  icon="plus"
                  style={styles.addButton}
                />
              </div>
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
          style={styles.menuItem}
        />
      ),
    });
    let modeButton = (this.state.mode === 'edit')? '我要儲存':'我要編輯';
    //console.log(lineTop);
    return (
      <div className="schedule">
        <Grid
          className="scheduleInfo"
          columns={3} 
          verticalAlign='middle' 
          textAlign='center' 
          style={styles.grid}
        >
          <Grid.Row>
            <Grid.Column style={styles.gridColSelection}>
              <Dropdown
                selection
                options={options}
                placeholder='Choose an option'
                defaultValue={options[0].value}
                style={styles.dropdown}
              />
            </Grid.Column>
            <Grid.Column style={styles.gridColButton}>
              <Button secondary size="big">旅遊資訊</Button>
            </Grid.Column>
            <Grid.Column style={styles.gridColButton}>
              <Button secondary size="big">地圖</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Tab
          className="mainSchedule"
          panes={panes}
          styles={styles.tab}
          activeIndex={this.state.activeIndex}
          onTabChange={this.handleTabChange}
        />
        <Grid 
          className="editButton"
          textAlign='center'
          style={styles.grid}
        >
          <Grid.Row>
            <Grid.Column style={styles.editButton}>
              <Button
                secondary
                size="big"
                onClick={this.handleModeChange}
              >{modeButton}</Button>
            </Grid.Column>
            <Grid.Column style={styles.editButton}>
              <Button secondary size="big">輸出行程</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="schedule-line"></div>
        <div className="schedule-white"></div>
      </div>
    );
  }
}

export default Schedule;


