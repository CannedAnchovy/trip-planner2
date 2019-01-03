import React, { Component } from 'react';
import { Grid, Dropdown, Button, Tab, Menu, Icon, List, Image } from 'semantic-ui-react'
//import AttractionInSchedule from './AttractionInSchedule';
import '../../css/Planner/AttractionList.css'
import Common from '../../../commonStyle';

const styles = {
  list: {
    margin: "0",
  },
  icon: {
    height: "5vh",
  },
  button: {
    backgroundColor: Common.lightGrey,
    color: Common.white,
  },
  listItem: {
    margin: "1vh 0",
  },
  listContent: {
    width: "calc(100% - 5vh)",
    height: "5vh",
    lineHeight: "5vh",
  },
  listTitle: {
    width: "48%",
    fontSize: Common.subHeaderSize,
    float: "left",
    fontWeight: "bold",
  }
}

const iconUrl = require("../../img/restaurant.png");


class AttractionList extends Component {
  constructor() {
    super();

  }



  render() {
    return (
      <div className="schedule">
        <div className="mainSchedule">
          <div className="attractionList">
            <div className="attractionList-title">
              旅行景點列表
            </div>
            <List className="attractionList-content" style={styles.list}>
              <List.Item style={styles.listItem}>
                <Image
                  src={iconUrl}
                  style={styles.icon}
                />
                <List.Content style={styles.listContent}>
                  <div style={styles.listTitle}>東京鐵塔</div>
                  <Button
                    icon="like"
                    content="6"
                    size="mini"
                    style={styles.button}/>
                  <Button
                    size="mini"
                    style={styles.button}
                  >加入行程</Button>
                  <Button
                    size="mini"
                    style={styles.button}
                  >移除</Button>
                </List.Content>
              </List.Item>
              <List.Item style={styles.listItem}>
                <Image
                  src={iconUrl}
                  style={styles.icon}
                />
                <List.Content style={styles.listContent}>
                  <div style={styles.listTitle}>淺草寺</div>
                  <Button
                    icon="like"
                    content="6"
                    size="mini"
                    style={styles.button}/>
                  <Button
                    size="mini"
                    style={styles.button}
                  >加入行程</Button>
                  <Button
                    size="mini"
                    style={styles.button}
                  >移除</Button>
                </List.Content>
              </List.Item>
              <List.Item style={styles.listItem}>
                <Image
                  src={iconUrl}
                  style={styles.icon}
                />
                <List.Content style={styles.listContent}>
                  <div style={styles.listTitle}二重橋></div>
                  <Button
                    icon="like"
                    content="6"
                    size="mini"
                    style={styles.button}/>
                  <Button
                    size="mini"
                    style={styles.button}
                  >加入行程</Button>
                  <Button
                    size="mini"
                    style={styles.button}
                  >移除</Button>
                </List.Content>
              </List.Item>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default AttractionList;


