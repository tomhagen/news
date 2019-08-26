import * as types from "../constants/newsType";

const initialState = [];

const newsPagniationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_NEWS_PAGNIATION:
      let updateState = [...state];
      updateState = action.payload;
      return updateState;
    default:
      return state;
  }
};
export default newsPagniationReducer;
