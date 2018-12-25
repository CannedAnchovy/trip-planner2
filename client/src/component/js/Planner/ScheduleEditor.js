import React, { Component } from 'react';
import { Sidebar, Button, Grid, Dropdown } from 'semantic-ui-react'
import Schedule from './Schedule';
import AttractionList from './AttractionList';
import MessageBoard from './MessageBoard';
import '../../css/Planner/ScheduleEditor.css';
import Common from '../../../commonStyle';

const styles = {
  pullEditorButtonSelect: {
    width: '1.3vw',
    backgroundColor: Common.ultraLightGrey,
    lineHeight: '2.5vh',
    borderRadius: '0 10px 10px 0',
    color: Common.grey,
    border: '2px solid #EEEEEE',
  },
  pullEditorButtonUnselect: {
    width: '1.3vw',
    backgroundColor: Common.white,
    lineHeight: '2.5vh',
    borderRadius: '0 10px 10px 0',
    color: Common.grey,
    border: '2px solid #EEEEEE',
  },
  grid: {
    margin: '0px',
  },
  gridColSelection: {
    padding:'0px',
    width:'56%',
    position: 'static',
    zIndex: '30',
  },
  gridColButton: {
    padding:'0px',
    width:'22%',
  },
  dropdown: {
    fontSize: Common.headerSize,
    width: '80%',
    backgroundColor: '#EDEDED',
    borderWidth: '0px 0px 3px 0px',
  },
  editButton: {
    padding:'0px',
    width:'30%',
  },
  pushButton: {
    backgroundColor: Common.white,
    borderRadius: '0 10px 10px 0',
    border: '2px solid #EEEEEE',
  },
}

const options = [
  { key: 1, text: '日本五日遊', value: 1 },
  { key: 2, text: '人生好難之旅', value: 2 },
  { key: 3, text: '好想放假之旅', value: 3 },
]

class ScheduleEditor extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      show: false,
      page: 'schedule',
      mode: 'readOnly',
    }

    this.handleHideClick = this.handleHideClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })


    handleModeChange() {
      const newMode = (this.state.mode === 'edit')? 'readOnly':'edit';
      this.setState({
        mode: newMode,
      });
    }

    handlePageChange(newPage) {
      this.setState({
        page: newPage,
      })
    }

    render() {
    let buttonStyle = {
      schedule: styles.pullEditorButtonUnselect,
      list: styles.pullEditorButtonUnselect,
      messageBoard: styles.pullEditorButtonUnselect,
    }
    let page = <div/>;
    if ( this.state.page === 'schedule' ) {
      page = (<Schedule mode={this.state.mode}/>);
      buttonStyle.schedule = styles.pullEditorButtonSelect;
    } else if ( this.state.page === 'list' ) {
      page = (<AttractionList />);
      buttonStyle.list = styles.pullEditorButtonSelect;
    } else if (this.state.page === 'messageBoard' ) {
      console.log('hihihih');
      page = (<MessageBoard />);
      buttonStyle.messageBoard = styles.pullEditorButtonSelect;
    }
    let buttonGroup;
    if(this.state.visible) {
      buttonGroup = (
        <Button.Group
          className="pullEditor"
          style={{left:'37.3%'}}
          vertical
        >
          <Button
            style={buttonStyle.schedule}
            onClick={()=>{this.handlePageChange('schedule');}}
          >規劃行程</Button>
          <Button
            style={buttonStyle.list}
            onClick={()=>{this.handlePageChange('list');}}
          >景點列表</Button>
          <Button
            style={buttonStyle.messageBoard}
            onClick={()=>{this.handlePageChange('messageBoard');}}
          >留言板</Button>
          <Button
            onClick={this.handleHideClick}
            icon="left double angle"
            style={styles.pushButton}
          />
        </Button.Group>
      );
    } else {
      buttonGroup = (
        <Button.Group
          className="pullEditor"
          style={{left:'0%'}}
          vertical
        >
          <Button style={styles.pullEditorButtonSelect} onClick={this.handleShowClick}>編輯行程</Button>
        </Button.Group>
      );
    }
    let modeButton = (this.state.mode === 'edit')? '我要儲存':'我要編輯';
    
    return (
      <Sidebar.Pushable className="scheduleEditor" style={{margin:"0"}} >
        <Sidebar
          animation='overlay'
          icon='labeled'
          visible={this.state.visible}
          style={{width:"38%",backgroundColor:"#EDEDED"}}
        >
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
              <Button secondary >旅遊資訊</Button>
            </Grid.Column>
            <Grid.Column style={styles.gridColButton}>
              <Button secondary >地圖</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {page}
        <Grid
          className="editButton"
          textAlign='center'
          style={styles.grid}
        >
          <Grid.Row>
            <Grid.Column style={styles.editButton}>
              <Button
                secondary
                onClick={this.handleModeChange}
              >{modeButton}</Button>
            </Grid.Column>
            <Grid.Column style={styles.editButton}>
              <Button secondary >輸出行程</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Sidebar>
        {buttonGroup}
        {this.props.children}
      </Sidebar.Pushable>
    );
  }
}

export default ScheduleEditor;


