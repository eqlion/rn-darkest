import { THEME_CHANGE, ActionTypes } from "../actions/types";

// If theme is true, the theme is white, otherwise — false

export default (state = true, action: ActionTypes) => {
    switch (action.type) {
        case THEME_CHANGE:
            return !state;
        default:
            return state;
    }
};
