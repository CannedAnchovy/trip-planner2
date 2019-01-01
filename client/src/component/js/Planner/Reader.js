import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setReaderMode, editReaderTag, setReaderKeyword } from '../../../action/Planner';
import { Sidebar, Input, Pagination } from 'semantic-ui-react'
import SearchResult from './SearchResult';
import Button from '../Button';
import TagGenre from './TagGenre';
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
  leftPanel: {
    position: 'relative',
    width: '84%',
    height: '91%',
    margin: '6% 3% 0% 13%',
    padding: '5%',
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '5px',
  },
  tagTitle: {
    color: Common.grey,
    fontSize: Common.headerSize,
    fontWeight: 600,
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
    marginTop: '3px',
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

const results = {
  defaultJournal: [
    {
      type: 'journal',
      title: '日本賞雪之旅',
      user:  'Leo123',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/d-1.jpg')
    },
    {
      type: 'journal',
      title: '雷翻天的韓國五日遊',
      user:  'Jack456',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/d-2.jpg')
    },
    {
      type: 'journal',
      title: '西藏青藏高原之旅',
      user:  'Patrick789',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/d-3.jpg')
    },
    {
      type: 'journal',
      title: '沖繩泡湯之旅',
      user:  'Panda147',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/d-4.jpg')
    }
  ],
  tokyoJournal: [
    {
      type: 'journal',
      title: '2017年再訪東京~第二次東京自由行',
      user:  'CannedAnchovy',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/t-1.jpg')
    },
    {
      type: 'journal',
      title: '東京自由行——9天8夜行程遊記',
      user:  'Joanne',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/t-2.jpg')
    },
    {
      type: 'journal',
      title: '東京自由行攻略：五日走到鐵腿也開心',
      user:  'Timmy',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/t-3.jpg')
    },
  ],
  tokyoAttraction: [
    {
      type: 'attraction',
      title: '明治神宮',
      user:  'Shibuya, Tokyo',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/ta-1.jpg')
    },
    {
      type: 'attraction',
      title: '晴空塔',
      user:  'Sumida, Tokyo',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/ta-2.jpg')
    },
    {
      type: 'attraction',
      title: '淺草雷門',
      user:  'Asakusa, Tokyo',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/ta-3.jpg')
    },
    {
      type: 'attraction',
      title: '涉谷十字路口',
      user:  'Shibuya, Tokyo',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/ta-4.jpg')
    },
  ],
  tokyoFoodAttraction: [
    {
      type: 'attraction',
      title: '炸豬排名店 丸五',
      user:  'Chiyoda, Tokyo ',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/taf-1.jpg')
    },
    {
      type: 'attraction',
      title: '日本橋天丼 金子半之助',
      user:  'Asakusa, Tokyo',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/taf-2.jpg')
    },
    {
      type: 'attraction',
      title: '沾麵 六厘舍',
      user:  'Shibuya, Tokyo',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/taf-3.jpg')
    },
  ]
}
const genres = [
  {
    name: '景點類型',
    tags: [
      '自然風景',
      '人文古蹟',
      '美食小吃'
    ],
  },
  {
    name: '旅伴類型',
    tags: [
      '朋友',
      '家人',
      '伴侶',
      '單獨'
    ],
  },
  {
    name: '其他分類',
    tags: [
      '我是分類',
      '分類',
      '這也是分類',
      '換行會長這樣',
      '繼續分類',
      '我是分類之王'
    ],
  },
];

const mapStateToProps = (state) => ({
  ...state.planner.reader
});

const mapDispatchToProps = (dispatch) => ({
  setModeHandler: (mode) => { dispatch(setReaderMode(mode)); },
  editTagHandler: (tag, action) => { dispatch(editReaderTag(tag, action)); },
  setReaderKeyword: (keyword) => { dispatch(setReaderKeyword(keyword)); },
})

class Reader extends Component {

  getResult() {
    let array = []
    if (this.props.mode === 'searchJournal') {
      if (this.props.keyword === '東京')
        array = results.tokyoJournal;
      else
        array = results.defaultJournal;
    } else if (this.props.mode === 'searchAttraction') {
      if (this.props.keyword === '東京' && this.props.tags.includes('美食小吃'))
        array = results.tokyoFoodAttraction;
      else if (this.props.keyword === '東京')
        array = results.tokyoAttraction;
    }

    return array.map((result, index) => <SearchResult key={`result${index}`} data={result} />);
  }

  render() {
    return (
      <Sidebar.Pusher className="reader" >
        <div className="leftPanelContainer" style={style.leftPanelContainer}>
          <div className="leftPanel" style={style.leftPanel}>
            <div style={style.tagTitle}>標籤篩選</div>
            {genres.map((genre, index) => <TagGenre
              key={`genre-${index}`}
              genre={genre}
              tags={this.props.tags}
              onClick={this.props.editTagHandler}
            />)}
          </div>
        </div>
        <div className="rightPanelContainer" style={style.rightPanelContainer}>
          <div className="rightPanel" style={style.rightPanel}>
            <div className="inputPanel" style={style.inputPanel}>
              <Input
                icon='search'
                placeholder='想去哪裡'
                style={style.search}
                value={this.props.keyword}
                onChange={(event, data) => { this.props.setReaderKeyword(data.value); }}
              />
              <span className="buttonGroup" style={style.buttonGroup}>
                <Button
                  active={this.props.mode === 'searchJournal'}
                  onClick={() => this.props.setModeHandler('searchJournal')}
                >遊記
                </Button>
                <Button
                  active={this.props.mode === 'searchAttraction'}
                  onClick={() => this.props.setModeHandler('searchAttraction')}
                >景點
                </Button>
                <Button
                  active={this.props.mode === 'searchUser'}
                  onClick={() => this.props.setModeHandler('searchUser')}
                >用戶
                </Button>
              </span>
            </div>
            <div className="resultPanel" style={style.resultPanel}>
              {this.getResult()}
            </div>
            <div className="pagePanel" style={style.pagePanel}>
              <Pagination defaultActivePage={1} totalPages={10} />
            </div>
          </div>
        </div>
      </Sidebar.Pusher>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reader);
