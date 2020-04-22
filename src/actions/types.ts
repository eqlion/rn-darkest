export const LOCATION_CHANGE = "LOCATION_CHANGE";
export const DIFFICULTY_CHANGE = "DIFFICULTY_CHANGE";
export const THEME_CHANGE = "THEME_CHANGE";

interface LocationChangeAction {
    type: typeof LOCATION_CHANGE;
    location: "ruins" | "weald" | "cove" | "warrens";
}

interface DifficultyChangeAction {
    type: typeof DIFFICULTY_CHANGE;
    difficulty: "short" | "medium" | "long";
}

interface ThemeChangeAction {
    type: typeof THEME_CHANGE;
}

export type ActionTypes =
    | LocationChangeAction
    | DifficultyChangeAction
    | ThemeChangeAction;
