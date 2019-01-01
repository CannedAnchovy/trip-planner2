const setReaderMode = (modeString) => {
  return {
    type: 'SET_READER_MODE',
    payload: {
      mode: modeString,
    },
  };
}

const editReaderTag = (tagString, actionString) => {
  return {
    type: 'EDIT_READER_TAG',
    payload: {
      tag: tagString,
      action: actionString,
    }
  }
}

const setReaderKeyword = (value) => {
  return {
    type: 'SET_READER_KEYWORD',
    payload: {
      keyword: value,
    }
  };
}

export {
  setReaderMode,
  editReaderTag,
  setReaderKeyword
};
