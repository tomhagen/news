import * as types from "../constants/newsType";

var initiateState = [];

const newsListReducer = (state = initiateState, action) => {
  switch (action.type) {
    case types.GET_ALL_NEWS:
        let updateState = [...state];
        updateState = action.news
        // console.log(updateState)
      return updateState;

    default:
      return [...state];
  }
};
export default newsListReducer;
