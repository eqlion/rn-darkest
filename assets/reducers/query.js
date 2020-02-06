import { QUERY_CHANGE } from "../actions/actionTypes";

export default query = (state = "", action) => {
    switch (action.type) {
        case QUERY_CHANGE:
            return action.query;
        default:
            return state;
    }
};
