import * as React from "react";
import { View, StatusBar } from "react-native";
import { Toolbar } from "react-native-material-ui";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export default class Head extends React.Component {
    state = {
        query: "",
    };

    _search = (query = "") => {
        this.props.handler(query);
        this.setState({ query });
    }

    render() {
        return (
            <View>
                <View
                    style={styles.statusbar}
                />
                <Toolbar
                    style={styles.toolbar}
                    centerElement="Prepare"
                    searchable={{
                        autoFocus: true,
                        placeholder: "Curio",
                        onChangeText: this._search,
                        onSearchClosed: this._search,
                    }}
                    
                />
            </View>
        )
    }
}

const styles = {
    statusbar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: "#ffcc80"
    },
    toolbar: {
        container: {
            backgroundColor: "#ffcc80",
        }
    }
};