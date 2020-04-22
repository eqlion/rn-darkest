import { LOCATION_CHANGE, ActionTypes } from "../actions/types";

export default (state = "ruins", action: ActionTypes) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return action.location;
        default:
            return state;
    }
};
