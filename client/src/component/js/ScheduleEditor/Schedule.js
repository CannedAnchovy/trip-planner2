import React, { Component } from 'react';
import { Grid, Dropdown, Button, Tab, Menu, Icon } from 'semantic-ui-react'
import '../../css/Schedule.css'

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
  }
}

const options = [
  { key: 1, text: '日本五日遊', value: 1 },
  { key: 2, text: '人生好難之旅', value: 2 },
  { key: 3, text: '好想放假之旅', value: 3 },
]

const panes = [
  { menuItem: (
      <Menu.Item style={styles.menuItem}>
        <b className="menuItemDay">第 1 天</b>
        <Icon
          name="close"
          style={styles.closeTab}
          size="small"
        />
      </Menu.Item>
    ),
    render: () => {
      return(
        <Tab.Pane style={styles.tabPane}>
          This is 1st day's schedule!!
        </Tab.Pane>
      );
    },
    index: 0,
  },
]



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
    panes.push({
      menuItem: (
        <Button 
          icon="plus"
          onClick={this.handleAddTab}
          style={styles.menuItem}
        />
      ),
    });
  }

  handleTabChange(e, { activeIndex }) {
    this.setState({ activeIndex });
  }

  handleAddTab() {
    panes.splice(this.state.days);
    panes.push({
      menuItem: (
        <Menu.Item style={styles.menuItem}>
        <b className="menuItemDay">{`第 ${this.state.days+1} 天`}</b>
        <Icon
          name="close"
          style={styles.closeTab}
          size="small"
        />
      </Menu.Item>
      ),
      render: () => {
        return(
          <Tab.Pane style={styles.tabPane}>
            This is {this.state.days} day's schedule!!
          </Tab.Pane>
        );
      },
    });
    panes.push({
      menuItem: (
        <Button 
          icon="plus"
          onClick={this.handleAddTab}
          style={styles.menuItem}
        />
      ),
    });
    this.setState({
      activeIndex: this.state.days,
      days: this.state.days + 1,
    });
  }

  render() {
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
        />
        <Grid 
          className="editButton"
          textAlign='center'
          style={styles.grid}
        >
          <Grid.Row>
            <Grid.Column style={styles.editButton}>
              <Button secondary size="big">我要編輯</Button>
            </Grid.Column>
            <Grid.Column style={styles.editButton}>
              <Button secondary size="big">輸出行程</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>         
      </div>
    );
  }
}

export default Schedule;


