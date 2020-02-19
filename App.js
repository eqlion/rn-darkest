import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import MainScreen from "./assets/MainScreen";
import { store, persistor } from "./assets/store";

export default App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MainScreen />
        </PersistGate>
    </Provider>
);
