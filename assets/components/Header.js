import * as React from "react";
import { View, StatusBar } from "react-native";
import { Toolbar } from "react-native-material-ui";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export default Header = ({ changeQuery, changeTheme, theme }) => (
    <View>
        <View style={styles(theme).statusbar} />
        <Toolbar
            style={styles(theme).toolbar}
            centerElement="Prepare"
            searchable={{
                autoFocus: true,
                placeholder: "Curio",
                onChangeText: changeQuery,
                onSearchClosed: changeQuery
            }}
            leftElement={theme ? "brightness-4" : "brightness-7"}
            onLeftElementPress={() => changeTheme()}
        />
    </View>
);

const styles = theme => ({
    statusbar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: theme ? "#ffcc80" : "#121212"
    },
    toolbar: {
        container: {
            backgroundColor: theme ? "#ffcc80" : "#121212"
        }
    }
});
