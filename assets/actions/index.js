import {
    LOCATION_CHANGE,
    DIFFICULTY_CHANGE,
    QUERY_CHANGE
} from "./actionTypes";

export const changeLocation = location => ({
    type: LOCATION_CHANGE,
    location
});

export const changeDifficulty = difficulty => ({
    type: DIFFICULTY_CHANGE,
    difficulty
});

export const changeQuery = query => ({
    type: QUERY_CHANGE,
    query
});
