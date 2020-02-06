import { combineReducers } from 'redux'

import location from "./location"
import difficulty from "./difficulty"
import query from "./query"


export default combineReducers({
    location,
    difficulty,
    query,
})