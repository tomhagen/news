import * as types from "../constants/newsType";
import Axios from "axios";

export const requestGetAllNewsList = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/posts"
    })
      .then(res => {
        console.log(res);
        dispatch(actGetAllNewsList(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const requestGetNewsByCategory = (type, limit) => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/posts/category?type=${type}&limit=${limit}`
    })
      .then(res => {
        console.log(res);
        dispatch(actGetNewsByCategory(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const requestGetDetailOfNews = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://localhost:5000/api/posts/id?id=${id}`
    })
      .then(res => {
        console.log(res);
        dispatch(actGetDetailOfNews(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actGetAllNewsList = news => {
  return {
    type: types.GET_ALL_NEWS,
    payload: news
  };
};
export const actGetNewsByCategory = news => {
  return {
    type: types.GET_NEWS_BY_CATEGORY,
    payload: news
  };
};
export const actGetDetailOfNews = news => {
  return {
    type: types.GET_DETAIL_OF_NEWS,
    payload: news
  };
};
