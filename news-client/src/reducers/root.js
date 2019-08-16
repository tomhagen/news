import { combineReducers } from "redux";
import newsListReducer from "./news";
import newsByCategoryReducer from "./news-by-category";
import newsEditReducer from "./news-edit";
import EditStatusReducer from "./news-edit-status";

const rootReducer = combineReducers({
    newsList: newsListReducer,
    newsByCategory: newsByCategoryReducer,
    newsEdit: newsEditReducer,
    newsEditStatus: EditStatusReducer
});
export default rootReducer;
