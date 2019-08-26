import _ from "lodash";
import * as types from "../constants/userType";

const initialState = {
  profile: {}, // decode in payload
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        profile: action.payload,
        isAuthenticated: !_.isEmpty(action.payload)

        // neu action.payload = {} thi decoded = {} => token ko co => isAuthenticated = false
      };

    default:
      return state;
  }
};
export default authReducer;
