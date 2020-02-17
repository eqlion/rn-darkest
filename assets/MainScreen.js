import * as React from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { Provider, DefaultTheme, Divider, DarkTheme } from "react-native-paper";

import Header from "./containers/HeaderContainer";
import Provision from "./containers/ProvisionContainer";
import Curios from "./containers/CuriosContainer";
import Choice from "./containers/Choice";
import Tips from "./containers/TipsContainer";

const MainScreen = ({ theme }) => (
    <Provider theme={theme ? lightTheme : darkTheme}>
        <Header />
        <ScrollView style={{ backgroundColor: theme ? "white" : "#121212" }}>
            <Choice />
            <Divider />
            <Provision />
            <Divider />
            <Tips />
            <Divider />
            <Curios />
        </ScrollView>
    </Provider>
);

const lightTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: "#ffc107",
        accent: "#ff7043"
    }
};

const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "#ffcc80",
        accent: "#ffab91"
    }
};

const mapStateToProps = state => ({
    theme: state.theme
});

export default connect(mapStateToProps)(MainScreen);
