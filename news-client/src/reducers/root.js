import { combineReducers } from "redux";
import newsListReducer from "./news";
import newsByCategoryReducer from "./news-by-category";

const rootReducer = combineReducers({
    newsList: newsListReducer,
    newsByCategory: newsByCategoryReducer
});
export default rootReducer;
