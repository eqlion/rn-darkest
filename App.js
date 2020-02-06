import * as React from "react";
import { Provider as RRProvider } from "react-redux";

import MainScreen from "./assets/MainScreen";
import store from "./assets/store";

// https://www.youtube.com/watch?v=KcC8KZ_Ga2M

// const initialState = {
//     location: "ruins",
//     difficulty: "short",
//     query: ""
// };

export default class App extends React.Component {
    // state = {
    //     location: "ruins",
    //     difficulty: "short",
    //     currentSearch: ""
    // };

    // data = require("./assets/curios.json");

    // _locationChange(location) {
    //     this.setState({ location });
    // };

    // _difficultyChange(difficulty) {
    //     this.setState({ difficulty });
    // };

    // _queryChange(currentSearch) {
    //     this.setState({ currentSearch });
    // };

    // _filter() {
    //     const location = this.state.location;
    //     const search = this.state.currentSearch.toLowerCase();
    //     let curios = [];
    //     for (let curio of this.data) {
    //         if (curio["location"].includes(location) && (!search || curio["name"].toLowerCase().includes(search))) {
    //             curios.push(curio);
    //         }
    //     }
    //     return curios;
    // }

    render() {
        return (
            <RRProvider store={store}>
                <MainScreen />
            </RRProvider>
        );
    }
}
