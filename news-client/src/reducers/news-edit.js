import * as types from "../constants/newsType";

var initiateState = {};

const newsEditReducer = (state = initiateState, action) => {
  switch (action.type) {
    case types.EDIT_NEWS:
      var newsEdit = { ...state };
      newsEdit = action.payload;
      return newsEdit;
    default:
      return { ...state };
  }
};
export default newsEditReducer;
