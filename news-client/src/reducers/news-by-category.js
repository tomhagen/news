import * as types from "../constants/newsType";

const initialState = [];

const newsByCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS_BY_CATEGORY:
      var updateState = [...state];
      updateState = action.payload;
      return updateState;
    default:
      return [...state];
  }
};
export default newsByCategoryReducer;
