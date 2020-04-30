import React, { Component } from 'react';
import { Grid, Image, TextArea } from 'semantic-ui-react';
import '../../css/Planner/AttractionInSchedule.css';
import Common from '../../../commonStyle';

const styles = {
  grid: {
    margin: "0",
  },
  categroyIcon: {
    padding: "0",
    width: "15%",
    position: 'static',
    zIndex: '5',
  },
  attractionContent: {
    padding: "5px 25px",
    width: "85%",
    // backgroundColor: "#BBBBBB",
  },
  attractionTitle: {
    fontSize: Common.subHeaderSize,
    padding: "0 0 0 2%",
    fontWeight: "bold",
    // backgroundColor: "#BABABA",
  },
  attractionMemo: {
    fontSize: Common.bodySize,
    padding: "10px 0 0 2%",
    lineHeight: "1.4285em",
    // backgroundColor: "#BABABA",
  },
  attractionTraffic: {
    fontSize: Common.bodySize,
    margin: "5px 0 0 0",
    padding: "5px",
    backgroundColor: "#BABABA",
    color: "white",
    borderRadius: "10px",
    lineHeight: "1.4285em",
  },
}


class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      attractionInfo: {
        id: 0,
        title: '',
        memo: '',
        traffic: '',
      },
      scheduleLineHeight: 0,
    }
    this.refs = React.createRef();
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleMemoChange = this.handleMemoChange.bind(this);
    this.handleTrafficChange = this.handleTrafficChange.bind(this);
    this.scheduleLineHeightChange = this.scheduleLineHeightChange.bind(this);
  }

  componentWillMount() {
    //console.log(this.props.attractionInfo);
    this.setState({
      attractionInfo: {
        id: this.props.attractionInfo.id,
        title: this.props.attractionInfo.title,
        memo: this.props.attractionInfo.memo,
        traffic: this.props.attractionInfo.traffic,
      }
    });
  }

  componentDidMount() {
    const height = this.scheduleLineHeightChange();
    this.setState({
      attractionInfo: this.state.attractionInfo,
      scheduleLineHeight: height
    });
    // console.log(this.state.scheduleLineHeight);
  }

  

  handleTitleChange(e) {
    this.setState({
      attractionInfo: {
        title: e.target.value,
        memo: this.state.attractionInfo.memo,
        traffic: this.state.attractionInfo.traffic,
      },
      scheduleLineHeight: this.state.scheduleLineHeight
    });
  }

  handleMemoChange(e) {
    this.setState({
      attractionInfo: {
        title: this.state.attractionInfo.title,
        memo: e.target.value,
        traffic: this.state.attractionInfo.traffic,
      },
      scheduleLineHeight: this.scheduleLineHeightChange()
    });
  }

  handleTrafficChange(e) {
    this.setState({
      attractionInfo: {
        title: this.state.attractionInfo.title,
        memo: this.state.attractionInfo.memo,
        traffic: e.target.value,
      },
      scheduleLineHeight: this.scheduleLineHeightChange()
    });
  }

  scheduleLineHeightChange() {
    const attractionHeight = document.getElementById("attractionInSchedule" + this.state.attractionInfo.id).offsetHeight;
    const attracitonIconHeight = document.getElementById("attractionIcon" + this.state.attractionInfo.id).offsetHeight;
    
    return attractionHeight - attracitonIconHeight;
  }


  render() {
    const attractionInfo = this.state.attractionInfo;
    //console.log(attractionInfo);
    const iconUrl = require(`../../img/${this.props.attractionInfo.type}.png`);
    let title, memo, traffic;
    if ( this.props.mode === 'edit' ) {
      title = (
        <TextArea
          id="title"
          className="attraction-input"
          autoHeight
          rows={1}
          placeholder="輸入景點名稱"
          value={attractionInfo.title}
          onChange={(e) => {this.handleTitleChange(e);}}
          style={styles.attractionTitle}
        />);
      memo = (
        <TextArea 
          id="memo"
          className="attraction-input"
          autoHeight
          placeholder="輸入備註"
          value={attractionInfo.memo}
          rows={1}
          onChange={(e) => {this.handleMemoChange(e);}}
          style={styles.attractionMemo}
        />);
      traffic = (
        <TextArea
          id="traffic"
          className="attraction-input"
          autoHeight
          placeholder="輸入交通方式"
          value={attractionInfo.traffic}
          rows={1}
          onChange={(e) => {this.handleTrafficChange(e);}}
          style={styles.attractionTraffic}
        />);
    } else {
      title = (
        <Grid.Row style={styles.attractionTitle}>
          <span>{attractionInfo.title}</span>
        </Grid.Row>
      );
      memo = (
        <Grid.Row style={styles.attractionMemo}>
          <span>{attractionInfo.memo}</span>
        </Grid.Row>);
      traffic = (
        <Grid.Row style={styles.attractionTraffic}>
          <span>{attractionInfo.traffic}</span>
        </Grid.Row>);
    }
    
    return (
      <div className="attractionInSchedule" id={"attractionInSchedule" + this.state.attractionInfo.id } ref={elem => this.refs = elem}>
        <Grid columns={2} style={styles.grid}>
          <Grid.Column style={styles.categroyIcon}>
            <Image src={iconUrl} id={"attractionIcon" + this.state.attractionInfo.id }/>
            <div className="schedule-line" id="schedule-line" style={{ height: this.state.scheduleLineHeight}}></div>
          </Grid.Column>
          <Grid.Column style={styles.attractionContent}>
              {title}
              {memo}
              {traffic}
          </Grid.Column>
        </Grid>
        
      </div>
      
    );
  }
}

export default Schedule;
