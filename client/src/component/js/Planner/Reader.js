import React, { Component } from 'react';
import { Sidebar, Button } from 'semantic-ui-react'
import SearchResult from './SearchResult'

const style = {
  reader: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  leftPanelContainer: {
    position: 'absolute',
    width: '38%',
    height: '100%',
  },
  rightPanelContainer: {
    position: 'absolute',
    left: '38%',
    width: '62%',
    height: '100%',
  },
  rightPanel: {
    position: 'relative',
    width: '88%',
    height: '92%',
    margin: '4% 5% 4% 7%',
  }
}

class Reader extends Component {
  constructor(){
    super();
    this.state = {
      mode: 'search',
      tags: [],
    }
  }

  render() {
    const results = [
    {
      type: 'journal',
      title: '日本賞雪之旅',
      user:  '使用者暱稱',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/3-4.jpg')
    },
    {
      type: 'journal',
      title: '日本賞雪之旅',
      user:  '使用者暱稱',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/3-4.jpg')
    },
    {
      type: 'journal',
      title: '日本賞雪之旅',
      user:  '使用者暱稱',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/3-4.jpg')
    }
  ];

    return (
      <Sidebar.Pusher className="reader" >
        <div className="leftPanelContainer" style={style.leftPanelContainer}>
        </div>
        <div className="rightPanelContainer" style={style.rightPanelContainer}>
          <div className="rightPanel" style={style.rightPanel}>
            {results.map((result, index) => <SearchResult key={`result${index}`} data={result} />)}
          </div>
        </div>
      </Sidebar.Pusher>
    );
  }
}

export default Reader;
