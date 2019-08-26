import * as types from "../constants/userType";
import Axios from "axios";

export const requestGetAllUsers = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/users"
    })
      .then(res => {
        dispatch(actGetAllUsers(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetAllUsers = user => {
  return {
    type: types.GET_ALL_USERS,
    payload: user
  };
};

export const actDeleteUser = id => {
    return {
        type: types.DELETE_USERS,
        payload: id
    }
}