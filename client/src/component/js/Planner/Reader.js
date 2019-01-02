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
  noResult: {
    marginLeft: '5px',
    marginTop: '15px',
    color: Common.black,
    fontSize: Common.headerSize,
  },
  pagePanel: {
    height: '8%',
    width: '20%',
    marginTop: '3%',
    marginLeft: '18%',
  }
}

const results = {
  journal: [
    {
      type: 'journal',
      title: '日本賞雪之旅',
      subtitle: 'Leo123',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/d-1.jpg'),
      tags: ['自然風景', '家人']
    },
    {
      type: 'journal',
      title: '雷翻天的韓國五日遊',
      subtitle:  'Jack456',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/d-2.jpg'),
      tags: ['美食小吃', '朋友']
    },
    {
      type: 'journal',
      title: '西藏青藏高原之旅',
      subtitle:  'Patrick789',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/d-3.jpg'),
      tags: ['自然風景', '人文古蹟', '伴侶']
    },
    {
      type: 'journal',
      title: '沖繩泡湯之旅',
      subtitle:  'Panda147',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/d-4.jpg'),
      tags: [, '單獨']
    },
    {
      type: 'journal',
      title: '2017年再訪東京~第二次東京自由行',
      subtitle:  'CannedAnchovy',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/t-1.jpg'),
      tags: ['美食小吃', '人文古蹟','單獨']
    },
    {
      type: 'journal',
      title: '東京自由行——9天8夜行程遊記',
      subtitle:  'Joanne',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/t-2.jpg'),
      tags: ['美食小吃', '伴侶']
    },
    {
      type: 'journal',
      title: '東京自由行攻略：五日走到鐵腿也開心',
      subtitle:  'Timmy',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/t-3.jpg'),
      tags: ['美食小吃', '人文古蹟', '朋友']
    },
  ],
  attraction: [
    {
      type: 'attraction',
      title: '明治神宮',
      subtitle:  '涉谷, 東京',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/ta-1.jpg'),
      tags: ['人文古蹟']
    },
    {
      type: 'attraction',
      title: '晴空塔',
      subtitle:  '墨田, 東京',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/ta-2.jpg'),
      tags: []
    },
    {
      type: 'attraction',
      title: '淺草雷門',
      subtitle:  '淺草, 東京',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/ta-3.jpg'),
      tags: ['人文古蹟']
    },
    {
      type: 'attraction',
      title: '涉谷十字路口',
      subtitle:  '涉谷, 東京',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/ta-4.jpg'),
      tags: []
    },
    {
      type: 'attraction',
      title: '炸豬排名店 丸五',
      subtitle:  '千代田, 東京',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/taf-1.jpg'),
      tags: ['美食小吃']
    },
    {
      type: 'attraction',
      title: '日本橋天丼 金子半之助',
      subtitle:  '淺草, 東京',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/taf-2.jpg'),
      tags: ['美食小吃']
    },
    {
      type: 'attraction',
      title: '沾麵 六厘舍',
      subtitle:  '涉谷, 東京',
      body: '對呼米來說，一趟美好旅行最高的境界就是花最少的費用，享受到最豪華的饗宴!!就像我們這趟日本東京、東北7日自由行，利用各種折扣優惠一路吃喝玩樂，可說是美好旅程的極致體驗!! 對呼米來說，一趟美好旅行最高的境界',
      likeNum: 1314,
      buyNum: 87,
      imgUrl: require('../../img/taf-3.jpg'),
      tags: ['美食小吃']
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

  matchtags(tags1, tags2) {
    for (let i=0; i<tags2.length; ++i) {
      if (!tags1.includes(tags2[i]))
        return false;
    }
    return true;
  }

  getResult(mode, keyword, tags) {
    let array = [];
    if (mode === 'searchJournal') array = results.journal;
    else if (mode === 'searchAttraction') array = results.attraction;

    console.log(array);
    array = array.filter((element) => (element.title.includes(keyword) || element.subtitle.includes(keyword)));
    array = array.filter((element) => this.matchtags(element.tags, tags));

    if (array.length === 0) return <div className="noResult" style={style.noResult}>沒有結果，請嘗試其他的搜尋條件</div>;
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
              {this.getResult(this.props.mode, this.props.keyword, this.props.tags)}
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
