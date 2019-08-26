import * as types from "../constants/userType";
const initialState = {};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ERRORS:
      
      return action.payload;
    default:
      return state;
  }
};
export default errorReducer;
