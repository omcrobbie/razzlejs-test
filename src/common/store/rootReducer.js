import { combineReducers } from "redux";
import * as Post from './posts'
import * as Show from './shows'

const rootReducer = combineReducers({
    posts: Post.reducer,
    shows: Show.reducer
})
export default rootReducer