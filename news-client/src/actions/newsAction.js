import * as types from '../constants/newsType';
import Axios from 'axios';


export const requestGetNewsList = () => {
    return (dispatch) => {
        Axios({
            method: 'GET',
            url: 'http://localhost:5000/api/posts'
        })
        .then(res => {
            console.log(res);
            dispatch(actGetNewsList(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}
export const actGetNewsList = (news) => {
    return {
        type: types.GET_ALL_NEWS,
        news
    }
}

