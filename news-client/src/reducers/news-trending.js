import * as types from "../constants/newsType";

const initialState = [];

const trendingNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TRENDING_NEWS:
      var updateState = [...state];
      updateState = action.payload;
      return updateState;
    default:
      return [...state];
  }
};
export default trendingNewsReducer;
