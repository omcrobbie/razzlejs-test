import { combineReducers } from "redux";
import * as Post from './posts'

const rootReducer = combineReducers({
    post: Post.reducer 
})
export default rootReducer