import { combineReducers } from "redux";

import location from "./location";
import difficulty from "./difficulty";
import theme from "./theme";

export const rootReducer = combineReducers({
    location,
    difficulty,
    theme,
});

export type RootState = ReturnType<typeof rootReducer>;
