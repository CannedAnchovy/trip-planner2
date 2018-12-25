import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import Common from '../../../commonStyle';

const style = {
  searchResult: {
    position: 'relative',
    width: '100%',
    height: '22%',
    margin: '2% 0%',
    padding: '1em 1em',
    boxShadow: 'none',
    borderWidth: '2px',
    borderColor: Common.ultraLightGrey,
  },
  textArea: {
    width: '77%',
    height: '100%',
    display: 'inline-block'
  },
  img: {
    width: '21%',
    height: '98%',
    marginLeft: '2%',
    display: 'inline-block'
  },
  title: {
    marginBottom: '7px',
    fontSize: Common.headerSize,
    color: Common.black,
    fontWeight: 600,
    letterSpacing: '3px',
    cursor: 'pointer',
    display: 'inline-block'
  },
  subTitle: {
    float: 'right',
    marginRight: '3px',
    fontSize: Common.bodySize,
    color: Common.lightGrey,
    fontWeight: 600,
    letterSpacing: '3px',
    cursor: 'pointer',
    display: 'inline-block'
  },
  body: {
    marginLeft: '3px',
    fontSize: Common.bodySize,
    color: Common.black,
    fontWeight: 400,
    letterSpacing: '2px',
    lineHeight: '22px',
    wordWrap: 'break-word',
    wordBreak: 'break-all'
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  action: {
    margin: '5px 20px 0 5px',
    fontSize: Common.noteSize,
    color: Common.grey,
    fontWeight: 400,
    cursor: 'pointer',
    display: 'inline-block',
  },
  actionIcon: {
    fontSize: Common.noteSize,
    color: Common.lightGrey,
    fontWeight: 400,
    cursor: 'pointer',
  }
}

const SearchResult = (props) => {
  const { data } = props;
  if (data.type === 'journal') {
    return (
      <Segment className="searchResult" style={style.searchResult}>
        <div className="textArea" style={style.textArea}>
          <div className="title" style={style.title}>{data.title}</div>
          <div className="subTitle" style={style.subTitle}>
            <Icon name="user" />{data.user}
          </div>
          <div className="body" style={style.body}>
            {data.body} ...... (<span className="link" style={style.link}>閱讀全文</span>)
          </div>
          <div className="action" style={style.action}>
            <Icon className="actionIcon" name="heart" style={style.actionIcon}/>{data.likeNum}
          </div>
          <div className="action" style={style.action}>
            <Icon className="actionIcon" name="diamond" style={style.actionIcon}/>{data.buyNum}
          </div>
        </div>
        <img className="resultImg" src={data.imgUrl} style={style.img} alt="resultImg"/>
      </Segment>
    )
  }
}

export default SearchResult;
