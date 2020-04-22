export const LOCATION_CHANGE = "LOCATION_CHANGE";
export const DIFFICULTY_CHANGE = "DIFFICULTY_CHANGE";
export const QUERY_CHANGE = "QUERY_CHANGE";
export const THEME_CHANGE = "THEME_CHANGE";

interface LocationChangeAction {
    type: typeof LOCATION_CHANGE;
    location: string;
}

interface DifficultyChangeAction {
    type: typeof DIFFICULTY_CHANGE;
    difficulty: string;
}

interface QueryChangeAction {
    type: typeof QUERY_CHANGE;
    query: string;
}

interface ThemeChangeAction {
    type: typeof THEME_CHANGE;
}

export type ActionTypes =
    | LocationChangeAction
    | DifficultyChangeAction
    | QueryChangeAction
    | ThemeChangeAction;
