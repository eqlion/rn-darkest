import { DIFFICULTY_CHANGE, ActionTypes } from "../actions/types";

export default (state = "short", action: ActionTypes) => {
    switch (action.type) {
        case DIFFICULTY_CHANGE:
            return action.difficulty;
        default:
            return state;
    }
};
