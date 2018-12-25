import React, { Component } from 'react';
import { Sidebar, Input, Pagination } from 'semantic-ui-react'
import SearchResult from './SearchResult';
import Button from '../Button';
import Common from '../../../commonStyle';

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
  },
  inputPanel: {
    width: '100%',
    height: '8%',
  },
  search: {
    fontSize: Common.subTitleSize,
    width: '70%',
  },
  buttonGroup: {
    marginTop: '7px',
    marginRight: '2.5%',
    float: 'right',
  },
  resultPanel: {
    width: '100%',
    height: '80%',
    overflowY: 'scroll',
  },
  pagePanel: {
    height: '8%',
    width: '20%',
    marginTop: '3%',
    marginLeft: '18%',
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
            <div className="inputPanel" style={style.inputPanel}>
              <Input icon='search' placeholder='想去哪裡' style={style.search}/>
              <span className="buttonGroup" style={style.buttonGroup}>
                <Button active={false}>遊記</Button>
                <Button active={true}>景點</Button>
                <Button active={false}>用戶</Button>
              </span>
            </div>
            <div className="resultPanel" style={style.resultPanel}>
              {results.map((result, index) => <SearchResult key={`result${index}`} data={result} />)}
            </div>
            <div className="pagePanel" style={style.pagePanel}>
              <Pagination defaultActivePage={5} totalPages={10} />
            </div>
          </div>
        </div>
      </Sidebar.Pusher>
    );
  }
}

export default Reader;
