import React from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { Provider } from "react-native-paper";
import { RootState, IMainProps as IProps } from "./types";

import Header from "./containers/HeaderContainer";
import RadioGroup from "./containers/RadioGroupContainer";
import Accordion from "./components/Accordion";
import { lightTheme, darkTheme } from "./styles";

const MainScreen = ({ theme, location, difficulty }: IProps) => {
    return (
        <Provider theme={theme ? lightTheme : darkTheme}>
            <Header />
            <ScrollView
                style={{
                    backgroundColor: theme ? "white" : "#121212",
                }}
            >
                <RadioGroup />
                <Accordion
                    location={location}
                    theme={theme}
                    difficulty={difficulty}
                />
            </ScrollView>
        </Provider>
    );
};

const mapStateToProps = (state: RootState) => ({
    theme: state.theme,
    location: state.location,
    difficulty: state.difficulty,
});

export default connect<IProps, null, {}, RootState>(mapStateToProps)(
    MainScreen
);
