import * as React from "react";
import { Provider as RRProvider } from "react-redux";

import MainScreen from "./assets/MainScreen";
import store from "./assets/store";

export default App = () => (
    <RRProvider store={store}>
        <MainScreen />
    </RRProvider>
);
