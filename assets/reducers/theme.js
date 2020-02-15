import { THEME_CHANGE } from "../actions/actionTypes";

export default theme = (state = true, action) => {
    switch (action.type) {
        case THEME_CHANGE:
            return !state;
        default:
            return state;
    }
};
