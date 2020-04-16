import { LOCATION_CHANGE } from "../actions/actionTypes"

export default location = (state = "ruins", action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return action.location
        default:
            return state
    }
}