import * as types from "../constants/newsType";

var initiateState = [];

const newsListReducer = (state = initiateState, action) => {
  switch (action.type) {
    case types.GET_ALL_NEWS:
      var updateState = [...state];
      updateState = action.payload;
      // console.log(updateState)
      return updateState;

    case types.DELETE_NEWS:
      var updateState = [...state];
      let index = updateState.findIndex(news => news._id === action.payload);
      updateState.splice(index, 1);
      return updateState;

    case types.UPDATE_NEWS:
      var updateState = [...state];
      let indexUpdate = updateState.findIndex(
        news => news._id === action.payload._id
      );
      updateState[indexUpdate] = action.payload;
      return updateState;
    default:
      return [...state];
  }
};
export default newsListReducer;
