import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import MainScreen from "./src/MainScreen";
import { store, persistor } from "./src/store";

export default () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MainScreen />
            </PersistGate>
        </Provider>
    );
};
