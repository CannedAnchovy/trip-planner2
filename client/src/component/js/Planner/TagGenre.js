import React from 'react';
import Button from '../Button';
import Common from '../../../commonStyle';

const style = {
  tagGenre: {
    width: '100%',
    margin: '25px 0',
  },
  genre: {
    paddingBottom: '5px',
    color: Common.grey,
    fontSize: Common.buttonTextSize,
    fontWeight: 600,
    borderBottom: '2px solid ' + Common.lightGrey,
  },
  tagGroup: {
    width: '100%',
    margin: '5px 0'
  }

}

const TagGenre = (props) => {

  return (
    <div className="tagGenre" style={style.tagGenre}>
      <div className="genre" style={style.genre}>{props.genre.name}</div>
      <div className="tagGroup" style={style.tagGroup}>
        {props.genre.tags.map((tag, index) => {
          let selected = props.tags.includes(tag);
          return <Button
            key={`tag-${index}-${tag}`}
            primary
            active={selected}
            onClick={() => props.onClick(tag, (selected)? 'delete' : 'add')}
          >
          {tag}
          </Button>;
        })}
      </div>
    </div>
  );
}

export default TagGenre;
