import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Provider, DefaultTheme, Divider } from "react-native-paper";
import { connect } from "react-redux";

import Header from "./containers/Header";
import ProvisionContainer from "./containers/ProvisionContainer";
import CuriosContainer from "./containers/CuriosContainer";
import Choice from "./containers/Choice";
import Curios from "./components/Curios";

export default class MainScreen extends React.Component {
    render() {
        return (
            <Provider theme={theme}>
                <Header />
                <ScrollView>
                    <Choice />
                    <Divider />
                    <ProvisionContainer />
                    <Divider />
                    {/* <Curios location={"ruins"} query={""} /> */}
                    <CuriosContainer />
                </ScrollView>
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
        accent: "#ffab91"

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
