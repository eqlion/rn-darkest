import {
    LOCATION_CHANGE,
    DIFFICULTY_CHANGE,
    QUERY_CHANGE,
    THEME_CHANGE,
    ActionTypes,
} from "./types";

export const changeLocation = (location: string): ActionTypes => ({
    type: LOCATION_CHANGE,
    location,
});

export const changeDifficulty = (difficulty: string): ActionTypes => ({
    type: DIFFICULTY_CHANGE,
    difficulty,
});

export const changeQuery = (query: string): ActionTypes => ({
    type: QUERY_CHANGE,
    query,
});

export const changeTheme = (): ActionTypes => ({
    type: THEME_CHANGE,
});
