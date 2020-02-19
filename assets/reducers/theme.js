import { THEME_CHANGE } from "../actions/actionTypes";

export default theme = (state = true, action) => {
    switch (action.type) {
        case THEME_CHANGE:
            const newState = action.theme === undefined ? !state : action.theme;
            return newState;
        default:
            return state;
    }
};
