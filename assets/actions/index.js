import {
    LOCATION_CHANGE,
    DIFFICULTY_CHANGE,
    QUERY_CHANGE,
    THEME_CHANGE
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

export const changeTheme = (theme = undefined) => ({
    type: THEME_CHANGE,
    theme
});
