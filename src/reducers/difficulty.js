import { DIFFICULTY_CHANGE } from "../actions/actionTypes";

export default difficulty = (state = "short", action) => {
    switch (action.type) {
        case DIFFICULTY_CHANGE:
            return action.difficulty;
        default:
            return state;
    }
};
