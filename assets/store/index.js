import { createStore } from "redux";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers";

const persistConfig = {
    key: "@rn-darkest",
    storage: AsyncStorage,
    whitelist: ["theme"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
