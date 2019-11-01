import * as React from "react";
import { Provider, DefaultTheme, Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./assets/components/Header";
import Provision from "./assets/components/Provision";
import Choice from "./assets/components/Choice";
import Curios from "./assets/components/Curios";

// https://www.youtube.com/watch?v=KcC8KZ_Ga2M

export default class App extends React.Component {
    state = {
        location: "ruins",
        difficulty: "short",
        currentSearch: "",
    };

    data = require("./assets/curios.json");

    _locationChange(location) {
        this.setState({ location });
    };

    _difficultyChange(difficulty) {
        this.setState({ difficulty });
    };

    _queryChange(currentSearch) {
        this.setState({ currentSearch });
    };

    _filter() {
        const location = this.state.location;
        const search = this.state.currentSearch.toLowerCase();
        let curios = [];
        for (let curio of this.data) {
            if (curio["location"].includes(location) && (!search || curio["name"].toLowerCase().includes(search))) {
                curios.push(curio);
            }
        }
        return curios;
    }


    render() {
        return (
            <Provider theme={theme}>
            {/* <Container> */}
                <Header handler={this._queryChange.bind(this)}/>
                <ScrollView>
                    <Choice
                        firstHandler={this._locationChange.bind(this)}
                        secondHandler={this._difficultyChange.bind(this)}
                    />
                    <Divider />
                    <Provision
                        location={this.state.location}
                        difficulty={this.state.difficulty}
                    />
                    <Divider />
                    <Curios curios={this._filter()} location={this.state.location}/>
                </ScrollView>
            {/* </Container> */}
            </Provider>
        );
    }
}

const theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: "#ffcc80",
        accent: "#ffab91",

        // background: '#121212',
        // surface: '#121212',
        // text: "#fff",
        // primary: "#fff",
        // accent: "#fff",
        // onBackground: '#FFFFFF',
        // onSurface: '#FFFFFF',
        // backdrop: '#FFFFFF'

    }
};

