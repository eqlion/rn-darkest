import { QUERY_CHANGE } from "../actions/actionTypes";

export default query = (state = "", action) => {
    switch (action.type) {
        case QUERY_CHANGE:
            // If the search window is closed, it sends "undefined",
            // which brakes everything
            if (action.query) {
                return action.query;
            } else {
                return "";
            }
        default:
            return state;
    }
};
