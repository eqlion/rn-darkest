import { combineReducers } from "redux";

import location from "./location";
import difficulty from "./difficulty";
import query from "./query";
import theme from "./theme";

export default combineReducers({
    location,
    difficulty,
    query,
    theme
});
