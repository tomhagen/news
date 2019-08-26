import * as types from "../constants/userType";

var initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_USERS:
      var updateState = [...state];
      updateState = action.payload;
      return updateState;

    case types.DELETE_USERS:
      var updateState = [...state];
      let index = updateState.findIndex(user => user._id === action.payload);
      updateState.splice(index, 1);
      return updateState;
    default:
      return state;
  }
};
export default userReducer;
