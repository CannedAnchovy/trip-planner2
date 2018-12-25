import React, { Component } from 'react';
import { Grid, Image, TextArea } from 'semantic-ui-react';
import '../../css/AttractionInSchedule.css';


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
    padding: "1% 5%",
    width: "85%",
  },
  attractionTitle: {
    fontSize: "0.7em",
    padding: "0 0 0 2%",
    fontWeight: "bold",
  },
  attractionMemo: {
    fontSize: "0.6em",
    padding: "10px 0 0 2%",
  },
  attractionTraffic: {
    fontSize: "0.6em",
    margin: "3% 0 0 0",
    padding: "2%",
    backgroundColor: "#BABABA",
    color: "white",
    borderRadius: "10px",
  },
}

const mode = 'edit';
//const mode = 'readOnly';
const iconUrl = require("../../img/restaurant.png");



class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      attractionInfo: {
        title: '',
        memo: '',
        traffic: '',
      }
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleMemoChange = this.handleMemoChange.bind(this);
    this.handleTrafficChange = this.handleTrafficChange.bind(this);
  }

  componentWillMount() {
    //console.log(this.props.attractionInfo);
    this.setState({
      attractionInfo: {
        title: this.props.attractionInfo.title,
        memo: this.props.attractionInfo.memo,
        traffic: this.props.attractionInfo.traffic,
      }
    });
  }

  handleTitleChange(e) {
    this.setState({
      attractionInfo: {
        title: e.target.value,
        memo: this.state.attractionInfo.memo,
        traffic: this.state.attractionInfo.traffic,
      }
    });
  }

  handleMemoChange(e) {
    this.setState({
      attractionInfo: {
        title: this.state.attractionInfo.title,
        memo: e.target.value,
        traffic: this.state.attractionInfo.traffic,
      }
    });
  }

  handleTrafficChange(e) {
    this.setState({
      attractionInfo: {
        title: this.state.attractionInfo.title,
        memo: this.state.attractionInfo.memo,
        traffic: e.target.value,
      }
    });
  }

  render() {
    const attractionInfo = this.state.attractionInfo;
    //console.log(attractionInfo);
    const iconUrl = require(`../../img/${this.props.attractionInfo.type}.png`);
    let title, memo, traffic;
    if ( this.props.mode === 'edit' ) {
      title = (
        <input
          id="title"
          className="attraction-input"
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
          rows={2}
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
      <div className="attractionInSchedule">
        <Grid columns={2} style={styles.grid}>
          <Grid.Column style={styles.categroyIcon}>
            <Image src={iconUrl}/>
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


/*
<Grid.Row style={styles.attractionTitle}>
              {title}
            </Grid.Row>
            <Grid.Row style={styles.attractionMemo}>
              {memo}
            </Grid.Row>
            <Grid.Row style={styles.attractionTraffic}>
              {traffic}
            </Grid.Row>
*/