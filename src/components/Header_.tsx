import * as React from "react";
import { View } from "react-native";
import { Toolbar } from "react-native-material-ui";

import { header } from "../styles";

export default Header = ({ changeQuery, changeTheme, theme }) => (
    <View>
        <View
            style={
                theme
                    ? { ...header.common, ...header.light }
                    : { ...header.common, ...header.dark }
            }
        />
        <Toolbar
            // This piece of fucking garbage doesn't work without the "container" part
            style={
                theme ? { container: header.light } : { container: header.dark }
            }
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
