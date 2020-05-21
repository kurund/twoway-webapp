import * as actionTypes from "./actionTypes";

export const fetchContents = (contents) => {
  return {
    type: actionTypes.FETCH_CONTENTS,
    contents: contents,
  };
};

export const addContent = (content) => {
  return {
    type: actionTypes.ADD_CONTENT,
    content: content,
  };
};
