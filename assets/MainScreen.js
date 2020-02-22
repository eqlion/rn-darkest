import * as React from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { Provider } from "react-native-paper";

import Header from "./containers/HeaderContainer";
import Provision from "./containers/ProvisionContainer";
import Curios from "./containers/CuriosContainer";
import RadioGroup from "./containers/RadioGroupContainer";
import Tips from "./containers/TipsContainer";
import { lightTheme, darkTheme } from "./styles";

const MainScreen = ({ theme }) => (
    <Provider theme={theme ? lightTheme : darkTheme}>
        <Header />
        <ScrollView
            style={{
                backgroundColor: theme ? "white" : "#121212"
            }}
        >
            <RadioGroup />
            <Provision />
            <Tips />
            <Curios />
        </ScrollView>
    </Provider>
);

const mapStateToProps = state => ({
    theme: state.theme
});

export default connect(mapStateToProps)(MainScreen);
