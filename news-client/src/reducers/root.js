import { combineReducers } from "redux";
import newsListReducer from "./news";
import newsByCategoryReducer from "./news-by-category";
import newsEditReducer from "./news-edit";
import EditStatusReducer from "./news-edit-status";
import authReducer from "./auth";
import errorReducer from "./errors";
import newsPagniationReducer from "./news-pagniation";
import userReducer from "./users";
import trendingNewsReducer from "./news-trending";

const rootReducer = combineReducers({
  newsList: newsListReducer,
  newsByCategory: newsByCategoryReducer,
  trendingNews: trendingNewsReducer,
  newsEdit: newsEditReducer,
  newsEditStatus: EditStatusReducer,
  allNewsPagniation: newsPagniationReducer,
  auth: authReducer,
  error: errorReducer,
  userList: userReducer
});
export default rootReducer;
