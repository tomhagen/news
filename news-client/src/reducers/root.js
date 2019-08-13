import { combineReducers } from "redux";
import newsListReducer from "./news";

const rootReducer = combineReducers({
    newsList: newsListReducer
});
export default rootReducer;
