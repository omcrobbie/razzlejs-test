import { combineReducers } from "redux";
import * as Counter from './counter'

const rootReducer = combineReducers({
    counter: Counter.reducer
})
export default rootReducer