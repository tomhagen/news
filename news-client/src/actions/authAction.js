import Axios from "axios";
import jwtDecode from "jwt-decode";
import * as types from "../constants/userType";
import lodash from "lodash";
import setHeader from "../helpers/setHeader";
import { message } from "antd";

export const login = (data, history) => {
  const { email, password } = data;
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://localhost:5000/api/users/login",
      data: { email, password }
    })
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        const decoded = jwtDecode(token);

        dispatch(setCurrentUser(decoded));
        dispatch(getErrors({}));
        message.success("Login success ");
        history.push("/admin/dashboard");
      })
      .catch(err => {
        const _ = lodash;
        if (err) {
          dispatch(getErrors(_.get(err, "response.data")));
        }
      });
  };
};

export const register = (data, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://localhost:5000/api/users/register",
      data: data
    })
      .then(res => {
        console.log(res);
        dispatch(getErrors({}));
        message.success("Add new user successfully ");
        history.push("/admin/dashboard");
      })
      .catch(err => {
        console.log(err);
        const _ = lodash;
        if (err) {
          dispatch(getErrors(_.get(err, "response.data")));
         
        }
      });
  };
};
export const setCurrentUser = data => {
  return {
    type: types.SET_CURRENT_USER,
    payload: data
  };
};

export const getErrors = err => {
  return {
    type: types.GET_ERRORS,
    payload: err
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("token");
    dispatch(setCurrentUser({}));
    setHeader();
  };
};
