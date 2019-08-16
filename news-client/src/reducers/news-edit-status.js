import * as types from "../constants/newsType";


let editStatus = null;

const EditStatusReducer = (state = editStatus,action) => {
    switch(action.type){
        case types.GET_EDIT_STATUS:
            state = action.payload;
            return state;
            
        default: return state;
    }
}
export default EditStatusReducer;