import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../common/utility";

const initialState = {
  contents: [],
};

const addContent = (state, action) => {
  // build the new content
  const updatedContent = { ...action.content, id: Math.random() };

  // get the copy of existing content from state
  const currentContents = state.contents.slice(0);

  // add new content
  currentContents.push(updatedContent);

  return updateObject(state, { contents: currentContents });
};

const fetchContents = (state, action) => {
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONTENTS:
      return fetchContents(state, action);
    case actionTypes.ADD_CONTENT:
      return addContent(state, action);
    default:
      return state;
  }
};

export default reducer;
