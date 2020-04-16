import { THEME_CHANGE } from "../actions/actionTypes";

// If theme is true, the theme is white, otherwise — false

export default theme = (state = true, action) => {
    switch (action.type) {
        case THEME_CHANGE:
            const newState = action.theme === undefined ? !state : action.theme;
            return newState;
        default:
            return state;
    }
};
